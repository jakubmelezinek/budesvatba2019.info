<template>
  <div class="container">
    <table>
      <tr>
        <th v-show="showId">id</th>
        <th>Čas</th>
        <th>Jméno</th>
        <th>Kontakt</th>
        <th>Ubytování</th>
      </tr>
      <tr v-for="attendee in attendees">
        <td v-show="showId">{{ attendee.attendeeId }}</td>
        <td>{{ idToDate(attendee.attendeeId) }}</td>
        <td>{{ attendee.fullName }}</td>
        <td>{{ attendee.contact }}</td>
        <td>{{ attendee.accommodation ? "ano" : ""}}</td>
      </tr>
    </table>
  </div>
</template>

<script src="./list.impl.ts" lang="ts"></script>

<style>
  table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }

  td, th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }

  tr:nth-child(even) {
    background-color: #dddddd;
  }
</style>
