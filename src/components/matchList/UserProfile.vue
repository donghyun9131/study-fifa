<template>
  <div class="avgMatch">
    <div class="avgStat">
      <dl>
        <dt>
          <span class="avg">닉네임</span>
        </dt>
        <dd class="statTextWrab">
          <p class="statText">{{ data.resultData.nickname }}</p>
        </dd>
      </dl>
    </div>
    <div class="avgStat">
      <dl>
        <dt>
          <span class="tenGame"> </span>
          <span class="avg">레벨</span>
        </dt>
        <dd class="statTextWrab">
          <p class="statText">{{ data.resultData.findUserInfo.level }}</p>
        </dd>
      </dl>
    </div>
    <div class="avgStat">
      <dl>
        <dt>
          <span class="avg">역대 최고 등급</span>
        </dt>
        <dd class="statTextWrab">
          <p class="statText">
            <img style="width: 60px; height: 60px" :src="emitImageUrl(data.resultData.userDivisionInfo[0].division)" />
          </p>
        </dd>
      </dl>
    </div>
    <div class="avgStat">
      <dl>
        <dt>
          <span class="tenGame">{{ data.resultData.response.length }}경기 </span>
          <span class="avg">평균 승리</span>
        </dt>
        <dd class="statTextWrab">
          <p class="statText">{{ ((data.resultData.findUserInfo.winCount / data.resultData.response.length) * 100).toFixed(0) }}%</p>
        </dd>
      </dl>
    </div>
    <div class="avgStat">
      <dl>
        <dt>
          <span class="tenGame">{{ data.resultData.response.length }}경기 </span>
          <span class="avg">평균 점유율</span>
        </dt>
        <dd class="statTextWrab">
          <p class="statText">{{ (data.resultData.findUserInfo.winPossession / data.resultData.response.length).toFixed(1) }}%</p>
        </dd>
      </dl>
    </div>
    <div class="avgStat">
      <dl>
        <dt>
          <span class="tenGame">{{ data.resultData.response.length }}경기 </span>
          <span class="avg">평균 득점</span>
        </dt>
        <dd class="statTextWrab">
          <p class="statText">{{ (data.resultData.findUserInfo.avgGoal / data.resultData.response.length).toFixed(1) }}</p>
        </dd>
      </dl>
    </div>
  </div>
</template>

<script setup>
import { defineProps, reactive } from 'vue'

/**
 * Props로 함수를 전달하는 방식:
  자식 컴포넌트에서 전달받은 함수를 이벤트 핸들러로 사용하거나, 자식 컴포넌트의 상태를 갱신해야 할 때.
  자식 컴포넌트에서 부모 컴포넌트의 기능을 호출해야 할 때.

  Emit을 사용하여 함수를 전달하는 방식:
  자식 컴포넌트에서 발생한 이벤트를 부모 컴포넌트에서 처리해야 할 때.
  부모 컴포넌트의 상태를 갱신해야 할 때.
 */
const props = defineProps({
  resultData: {
    type: Object,
    required: true,
  },
  findDivision: {
    type: Function,
    required: true,
  },
})

// resultData를 새로운 객체로 할당하여 변경을 감지하도록 함
const data = reactive({
  resultData: props.resultData,
})

// avgGoal: {
//   type: Number,
//   required: true,
// },
// winCount: {
//   type: Number,
//   required: true,
// },
// winPossession: {
//   type: Number,
//   required: true,
// },
// gameCount: {
//   type: Number,
//   required: true,
// },

const emitImageUrl = (division) => {
  return props.findDivision(division)
}
</script>
<style></style>
