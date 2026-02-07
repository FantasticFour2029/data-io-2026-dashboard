<template>
  <div style="min-height: 100vh; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); display: flex; flex-direction: column; align-items: center; justify-content: center; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: white; text-align: center; padding: 20px; padding-top: 100px; padding-bottom: 80px;">
    <p style="font-size: 1.2rem; margin: 10px 0 40px 0; opacity: 0.9;">Welcome to the NYC Housing Data Dashboard</p>
    <main style="width: 100%; height: 80vh;">
      <div style="background: rgba(255,255,255,0.1); border-radius: 10px; padding: 20px; backdrop-filter: blur(10px); height: 100%;">
        <div ref="dashboardContainer" style="height: 100%;"></div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { DatabricksDashboard } from "@databricks/aibi-client";

const dashboardContainer = ref(null);

onMounted(() => {
  const dashboard = new DatabricksDashboard({
    instanceUrl: "https://dbc-3007b053-d743.cloud.databricks.com",
    workspaceId: "7474658088331103",
    dashboardId: "01f10443e8b8111aaeae3efac1f36de9",
    // token: "", // This token should be minted by your server
    container: dashboardContainer.value,
  });

  dashboard.initialize();
});
</script>

<style scoped></style>