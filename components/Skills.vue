<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="skills-container d-flex justify-content-between">
          <div
            v-for="skill in skills"
            :key="skill.id"
            class="skill-card text-center"
          >
            <div class="number" :class="`color-${skill.id}`">{{ skill.id }}</div>
            <div class="title">{{ skill.title }}</div>
            <p class="description">{{ skill.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      skills: [
        { id: 1, title: '3D Modeling', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { id: 2, title: 'Architectural Design', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { id: 3, title: 'Architectural Design', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { id: 4, title: 'Architectural Design', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { id: 5, title: 'Architectural Design', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },


    ]
    };
  }
}
</script>
<style scoped>
.skills-container {
  /* Adjust the gap to match your design */
  gap: 2rem;
}
.skill-card {
  /* Adjust width based on the number of items and container width */
  flex: 0 0 calc(20% - 1rem);
}
.number {
  /* Large number styling */
  font-size: 4rem;
  font-weight: bold;
}
.color-1 { color: #007bff; }
.color-2 { color: #6c757d; }
.color-3 { color: #28a745; }
/* Add more color classes as needed */

.title {
  /* Title styling */
  font-size: 1.25rem;
  font-weight: bold;
  margin-top: 0.5rem;
}

.description {
  /* Description styling */
  font-size: 1rem;
}
</style>
