<script setup>
import { useTranslation } from "@/utils/hooks";
import Panel from "./Panel.vue";

const t = useTranslation();
</script>

<template>
  <Panel class="font-segoe container">
    <div class="left">
      <h1>{{ t('welcome.h1') }}</h1>
      <h2>{{ t('welcome.h2') }}</h2>
      <div class="hours">Pon. - Pt. 07:00 - 11:00</div>
      <div class="left-description font-segoe">{{ t('welcome.desc') }}</div>
      <img class="left-map" src="@/assets/maps.jpg" />
      <a class="left-button font-segoe" href="https://login-my.synevo.pl/mysynevo/login.do?client_id=5PP6XQnFvuxZ2q9mha2MTLY9zAka&code_challenge=GI5AuFYstV_JVaDaOoyj0ytCfIO2nqWpeJKpNaezj6U&code_challenge_method=S256&commonAuthCallerPath=%2Foauth2%2Fauthorize&forceAuth=false&passiveAuth=false&redirect_uri=https%3A%2F%2Fmy.synevo.pl&response_mode=query&response_type=code&scope=openid+profile&state=3880f23462624de0ac837aacab840da5&tenantDomain=carbon.super&sessionDataKey=b5bee604-31bc-4a01-9b36-5f11e4981d9b&relyingParty=5PP6XQnFvuxZ2q9mha2MTLY9zAka&type=oidc&sp=my-synevo&isSaaSApp=false&authenticators=BasicAuthenticator%3ALOCAL&reCaptcha=true">{{ t('welcome.button') }}</a>
    </div>
    <img class="right" src="@/assets/blood.png" />
  </Panel>
</template>

<style scoped>
.hours {
  text-decoration: none;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-radius: 2rem;
  border: 1px solid #5463a9;
  color: #5463a9;
}

.container {
  display: grid;
  grid-template-columns: 50% 50%;
  gap: 2rem;
}

.left {
  text-align: left;
}

.right {
  width: 100%;
}

.left-description {
  margin-top: 2.5rem;
  margin-bottom: 2rem;
}

.left-map {
  margin-bottom: 2rem;
  width: 100%;
  border-radius: 2rem;
}

.left-button {
  text-decoration: none;
  outline: none;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-radius: 2rem;
  border: none;
  background-color: #ff4e4e;
}

@media screen and (max-width: 1024px) {
  .container {
    display: flex;
    flex-direction: column;
  }
}
</style>
