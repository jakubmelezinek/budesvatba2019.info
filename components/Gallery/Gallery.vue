<template>
  <div class="image-gallery">
    <div class="row">

      <div
        v-for="(image, index) in images"
        class="col-lg-4 col-md-6 image-gallery--image"
      >
        <img class="margin-bottom"
             @click="show(index)"
             :src="active ? image.tiny : image.src"
             :alt="image.alt ? image.alt : 'Gallery Image'">

      </div>

    </div>

    <VueEasyLightbox
      ref="lightbox"
      :visible="visible"
      :imgs="imgs"
      :index="index"
      @hide="hide"
    />

  </div>
</template>

<script src="./Gallery.impl.ts" lang="ts"></script>

<style>

  @media (min-width: 768px) {
    .image-gallery--image {
      cursor: pointer;
    }
  }

  .image-gallery--image img {
    image-orientation: from-image;
  }

  .vel-img {
    max-width: none;
    max-height: none;
    width: auto;
  }
</style>
