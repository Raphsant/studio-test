<template>
    <section class="py-16 bg-gray-50">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <h2 class="font-mono text-3xl font-bold mb-4">Tech We Work With</h2>
            </div>

            <div class="mb-12">
                <div class="infinite-carousel" ref="firstCarousel">
                    <div class="scroll-container" :class="{ 'scroll-right': animationsReady }">
                        <div class="scroll-content">
                            <div v-for="icon in posIcons" :key="`pos-${icon.id}`" class="carousel-item">
                                <img :src="icon.src" :alt="icon.name" class="h-10 md:h-12 w-auto"
                                    @load="checkAllImagesLoaded" />
                            </div>
                        </div>
                        <div class="scroll-content" aria-hidden="true">
                            <div v-for="icon in posIcons" :key="`pos-clone-${icon.id}`" class="carousel-item">
                                <img :src="icon.src" :alt="icon.name" class="h-10 md:h-12 w-auto"
                                    @load="checkAllImagesLoaded" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mb-12">
                <div class="infinite-carousel" ref="secondCarousel">
                    <div class="scroll-container" :class="{ 'scroll-left': animationsReady }">
                        <div class="scroll-content">
                            <div v-for="icon in dataIcons" :key="`data-${icon.id}`" class="carousel-item">
                                <img :src="icon.src" :alt="icon.name" class="h-10 md:h-12 w-auto"
                                    @load="checkAllImagesLoaded" />
                            </div>
                        </div>
                        <div class="scroll-content" aria-hidden="true">
                            <div v-for="icon in dataIcons" :key="`data-clone-${icon.id}`" class="carousel-item">
                                <img :src="icon.src" :alt="icon.name" class="h-10 md:h-12 w-auto"
                                    @load="checkAllImagesLoaded" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="text-center mt-12">
                <p class="text-lg text-gray-600 mb-4">
                    Not sure what to use? We will help you find the right tools that support your needs and budget
                </p>
                <NuxtLink to="/#waitlist"
                    class="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors inline-block mt-2">
                    Get in Touch
                </NuxtLink>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue';

const posIcons = [
    { id: 1, name: 'Dutchie', src: '/images/dutchie.png' },
    { id: 2, name: 'Flowhub', src: '/images/flowhub.png' },
    { id: 3, name: 'Treez', src: '/images/treez.png' },
    { id: 4, name: 'Cova', src: '/images/cova.png' },
    { id: 5, name: 'Blaze', src: '/images/blaze.png' },
    { id: 6, name: 'Jane', src: '/images/jane.png' },
];

const dataIcons = [
    { id: 1, name: 'Airflow', src: '/images/airflow.png' },
    { id: 2, name: 'Dagster', src: '/images/dagster.png' },
    { id: 3, name: 'Snowflake', src: '/images/snowflake.png' },
    { id: 4, name: 'BigQuery', src: '/images/bigquery.png' },
    { id: 5, name: 'MotherDuck', src: '/images/motherduck.png' },
    { id: 6, name: 'Tableau', src: '/images/tableau.png' },
    { id: 7, name: 'Power BI', src: '/images/powerbi.png' },
    { id: 8, name: 'Hex', src: '/images/hex.png' },
];

const firstCarousel = ref(null);
const secondCarousel = ref(null);
const animationsReady = ref(false);
const totalImages = posIcons.length * 2 + dataIcons.length * 2;
let loadedImages = 0;

const checkAllImagesLoaded = () => {
    loadedImages++;
    if (loadedImages >= totalImages) {
        initCarousels();
    }
};

const initCarousels = async () => {
    await nextTick();

    if (firstCarousel.value) firstCarousel.value.offsetHeight;
    if (secondCarousel.value) secondCarousel.value.offsetHeight;

    setTimeout(() => {
        animationsReady.value = true;
    }, 50);
};

onMounted(() => {
    setTimeout(() => {
        if (!animationsReady.value) {
            initCarousels();
        }
    }, 1000);

    document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'visible') {
            animationsReady.value = false;
            nextTick(() => {
                initCarousels();
            });
        }
    });

    window.addEventListener('orientationchange', () => {
        animationsReady.value = false;
        setTimeout(() => {
            initCarousels();
        }, 100);
    });
});
</script>

<style>
:root {
    --duration: 60s;
    --gap: 1.5rem;
}

@media (max-width: 768px) {
    :root {
        --duration: 90s;
        --gap: 1rem;
    }
}

@media (max-width: 480px) {
    :root {
        --duration: 120s;
        --gap: 0.75rem;
    }
}

.infinite-carousel {
    position: relative;
    overflow: hidden;
    width: 100%;
    padding: 1rem 0;
}

.scroll-container {
    display: flex;
    width: max-content;
    will-change: transform;
}

.scroll-content {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: max-content;
    padding-right: var(--gap);
}

.carousel-item {
    flex: 0 0 auto;
    padding: 0 var(--gap);
}

.scroll-right {
    animation: scroll-right var(--duration) linear infinite;
    transform: translateZ(0);
    will-change: transform;
}

.scroll-left {
    animation: scroll-left var(--duration) linear infinite;
    transform: translateZ(0);
    will-change: transform;
}

@keyframes scroll-right {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(calc(-50%));
    }
}

@keyframes scroll-left {
    0% {
        transform: translateX(calc(-50%));
    }

    100% {
        transform: translateX(0);
    }
}

.infinite-carousel:hover .scroll-container {
    animation-play-state: paused;
}

.infinite-carousel::before,
.infinite-carousel::after {
    content: "";
    position: absolute;
    top: 0;
    height: 100%;
    width: 5%;
    z-index: 2;
    pointer-events: none;
}

.infinite-carousel::before {
    left: 0;
    background: linear-gradient(to right, rgba(249, 250, 251, 1), rgba(249, 250, 251, 0));
}

.infinite-carousel::after {
    right: 0;
    background: linear-gradient(to left, rgba(249, 250, 251, 1), rgba(249, 250, 251, 0));
}
</style>