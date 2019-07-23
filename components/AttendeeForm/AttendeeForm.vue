<template>
  <div class="row row--companion">

    <div v-show="companion" class="col-sm-12 margin-bottom">
      <h5>
        {{ $t('RSVP.Companion') }}
        <a class="smaller minus-one" href="#" @click.prevent="emitMinusOne">{{ $t('RSVP.MinusOne') }}</a>
      </h5>
    </div>

    <div class="col-sm-12 margin-bottom">
      <label>
        <span>{{ $t('RSVP.Label.FullName') }}</span>
        <input v-model="value.fullName" name="full-name" type="text" required>
      </label>
    </div>
    <div class="col-sm-12 margin-bottom">
      <label>
        <span>{{ $t('RSVP.Label.PhoneOrMail') }}</span>
        <input v-model="value.contact" name="contact" type="text" required>
      </label>
    </div>

    <div class="col-sm-12 margin-bottom">
      <label class="checkbox-label">
        <span>{{ $t('RSVP.Label.Accommodation') }}</span>
        <input v-model="value.accommodation" name="accomodation" type="checkbox">
        <span class="checkmark"></span>
      </label>
    </div>

  </div>
</template>

<script src="./AttendeeForm.impl.ts" lang="ts"></script>

<style>
  .minus-one {
    float: right;
    position: relative;
    top: .6rem;
  }
  .row--companion {
    margin-bottom: 20px
  }
</style>
