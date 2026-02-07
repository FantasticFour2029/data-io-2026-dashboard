<script setup></script>

<template>
  <div style="min-height: 100vh; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); display: flex; flex-direction: column; align-items: center; justify-content: center; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: white; text-align: center; padding: 20px; padding-top: 100px; padding-bottom: 80px;">
    <p style="font-size: 1.2rem; margin: 10px 0 40px 0; opacity: 0.9;">Analyze and explore housing trends in New York City</p>
    <main style="max-width: 800px; width: 100%;">
      <div style="display: flex; flex-direction: column; gap: 20px; align-items: center;">
        <div style="background: rgba(255,255,255,0.1); border-radius: 10px; padding: 30px; text-align: center; backdrop-filter: blur(10px); width: 100%; max-width: 400px;">
          <router-link to="/dashboard" style="text-decoration: none; color: white;">
            <button style="background: #4CAF50; border: none; color: white; padding: 15px 32px; text-align: center; text-decoration: none; display: inline-block; font-size: 16px; margin: 4px 2px; cursor: pointer; border-radius: 5px; width: 100%;">Let's go!</button>
          </router-link>
          <p style="margin-top: 10px; font-size: 14px; opacity: 0.9;">Take you to the dashboard</p>
        </div>
        <div style="background: rgba(255,255,255,0.1); border-radius: 10px; padding: 30px; text-align: center; backdrop-filter: blur(10px); width: 100%; max-width: 400px;">
          <router-link to="/about" style="text-decoration: none; color: white;">
            <button style="background: #2196F3; border: none; color: white; padding: 15px 32px; text-align: center; text-decoration: none; display: inline-block; font-size: 16px; margin: 4px 2px; cursor: pointer; border-radius: 5px; width: 100%;">About</button>
          </router-link>
          <p style="margin-top: 10px; font-size: 14px; opacity: 0.9;">Take you to the about page</p>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped></style>