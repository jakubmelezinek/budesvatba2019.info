<template>
  <div class="image-gallery">
    <div class="row">

      <div
        v-for="(image, index) in images"
        class="col-lg-4 col-md-6 image-gallery--image margin-bottom"
      >
        <img
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

  .image-gallery--image img {
    image-orientation: from-image;
    width: 100%;
  }

  @media (min-width: 768px) {
    .image-gallery--image {
      cursor: pointer;
    }
    .image-gallery--image img {
      width: auto;
      max-width: 100%;
    }
  }

  img.vel-img {
    max-width: none;
    max-height: none;
    width: auto;
  }

</style>
