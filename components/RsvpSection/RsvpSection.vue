<template>
  <section class="section rsvp-area center-text">
    <div class="container">
      <div class="row">

        <div class="col-sm-12">

          <div class="heading">
            <h2 class="title">{{ $t('RSVP.Heading') }}</h2>
            <span class="heading-bottom"><i class="icon icon-star"></i></span>
          </div>

          <p class="desc margin-bottom">{{ $t('RSVP.Content') }}</p>

        </div>
      </div>

      <div class="row left-text">

        <div class="col-sm-auto col-md-1 col-lg-2"></div>
        <div class="col-sm-12 col-md-10 col-lg-8">
          <div class="contact-form margin-bottom">
            <form id="attendees-form" method="post">

              <AttendeeForm
                v-model="guest"
              />

              <template
                v-for="(companion, attendeeId, index) in companions"
              >
                <AttendeeForm
                  :companion="true"
                  :key="attendeeId"
                  v-model="companions[attendeeId]"
                  @minusOne="onMinusOne"
                />
              </template>

              <div class="row">
                <div class="col-sm-12 margin-bottom">
                  <label class="checkbox-label">
                    <span v-if="emptyCompanions">{{ $t('RSVP.PlusOne') }}</span>
                    <span v-else> {{ $t('RSVP.AnotherOne') }}</span>
                    <input v-model="plusOne" type="checkbox">
                    <span class="checkmark"></span>
                  </label>
                </div>
              </div>

              <div class="row">

                <div class="col-sm-12 center-text">
                  <button type="submit" class="btn"><b>{{ $t('RSVP.Label.Submit') }}</b></button>
                </div>

              </div>
            </form>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script src="./RsvpSection.impl.ts" lang="ts"></script>

<style>
  /* Customize the label (the checkbox-label) */
  .checkbox-label {
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    /*font-size: 22px;*/
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  /* Hide the browser's default checkbox */
  .checkbox-label input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  /* Create a custom checkbox */
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    /*background-color: #eee;*/
    border: 1px solid #ccc;
  }

  /*!* On mouse-over, add a grey background color *!*/
  /*.checkbox-label:hover input ~ .checkmark {*/
  /*  background-color: #ccc;*/
  /*}*/

  /* When the checkbox is checked, add a blue background */
  .checkbox-label input:checked ~ .checkmark {
    background-color: #2196F3;
    border: none;
  }

  /* Create the checkmark/indicator (hidden when not checked) */
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  /* Show the checkmark when checked */
  .checkbox-label input:checked ~ .checkmark:after {
    display: block;
  }

  /* Style the checkmark/indicator */
  .checkbox-label .checkmark:after {
    left: 10px;
    top: 7px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  #attendees-form > div:nth-last-of-type(3) {
    margin-bottom: 0;
  }
</style>
