<template>
  <div class="panel"></div>
  <div class="box"></div>
  <div v-if="isOpened">
    モーダル
  </div>
  <div class="panel"></div>
  <div class="div1"></div>
  <div class="div2">
    <div class="square"></div>
    <div class="square2"></div>

    <!-- <div class="square2"></div> -->
  </div>
</template>

<script>
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { defineComponent, onMounted, ref } from "vue";
gsap.registerPlugin(ScrollTrigger);
export default defineComponent({
  components: {},

  setup() {
    onMounted(() => {
      gsapFunc();
    });
    const gsapFunc = () => {
      gsap.to(".square", {
        x: 1000,
        duration: 8,
        scrollTrigger: {
          trigger: ".square2", // 要素".square"がビューポートに入ったときにアニメーション開始
          start: "top 80%", // アニメーション開始位置(第一引数が要素の上下真ん中を示す、第二引数はブラウザでの位置を表す)
          end: "top 50%", // アニメーション終了位置
          scrub: 4, //スクロールバー触ってるかに合わせてアニメーションつける
          pin: ".square", //endになったら、要素が固定されて上にスクロールされる
          pinSpacing: false,
          toggleActions: "restart none none none", // OnEnter, OnLeave,OnEnterBack, OnLeaveBack 
          markers: false, // マーカー表示
          toggleClass: "red", // クラスの付け替え
        },
      });
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".box",
          start: "top 80%",
          end: "top 50%",
          markers: true,
          scrub: 1,
          onEnter: () => Func(),// OnEnter, OnLeave,OnEnterBack, OnLeaveBack この４つのイベント時にメソッドを呼ぶことも可能
        },
      });
      tl.to(".box", { x: 500, duration: 5 })
        .to(".box", { y: 200, duration: 3 })
        .to(".box", { x: 0, duration: 2 });
    };
    const isOpened = ref(false);
    const Func = () => {
      isOpened.value = !isOpened.value;
    };
    return {
      gsapFunc,
      Func,
      isOpened,
    };
  },
});
</script>
