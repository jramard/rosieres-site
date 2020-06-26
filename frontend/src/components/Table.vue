<template>
  <div class="table" v-loading="dataIsLoading">
    <div class="table__options">
      <div class="table__options__search">
        <el-input v-model="search" clearable placeholder="Filtrer par Nom, Prénom, ou Id" />
      </div>
      <div class="table__options__daterange">
        <el-date-picker
          v-model="dateRange"
          type="daterange"
          range-separator="à"
          start-placeholder="Date de début"
          end-placeholder="Date de fin"
          :picker-options="{ firstDayOfWeek: 1 }"
        />
      </div>
      <div class="table__options__button">
        <el-button type="success" @click="submitDateFilter">
          Soumettre
        </el-button>
      </div>
    </div>
    <el-table :data="chunkedData[pagination - 1] || chunkedData[0]" stripe style="width: 100%">
      <el-table-column prop="1" label="Nom" sortable></el-table-column>
      <el-table-column prop="2" label="Prénom" sortable></el-table-column>
      <el-table-column
        prop="3"
        label="Genre"
        sortable
        :filters="[{ text: 'Homme', value: 'Male' }, { text: 'Femme', value: 'Female' }]"
        :filter-method="filterGenre"
      >
        <template slot-scope="scope">
          <span>{{ getGender(scope.row[3]) }}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="4"
        label="Pays"
        sortable
        :filters="[
          { text: 'France', value: 'France' },
          { text: 'Grande-Bretagne', value: 'Great Britain' },
          { text: 'États-Unis', value: 'United States' }
        ]"
        :filter-method="filterCountry"
      >
        <template slot-scope="scope">
          <span :class="`flag-icon flag-icon-${getFlag(scope.row[4])}`"></span>
        </template>
      </el-table-column>
      <el-table-column
        prop="5"
        label="Age"
        sortable
        :filters="[
          { text: '<= 25', value: '1' },
          { text: '> 25 et <= 50', value: '2' },
          { text: '> 50', value: '3' }
        ]"
        :filter-method="filterAge"
      ></el-table-column>
      <el-table-column prop="6" label="Date" sortable></el-table-column>
      <el-table-column prop="7" label="Id" sortable>
        <template slot-scope="scope">
          <a :href="`https://www.commune-rosieres10.fr/Recherche?id_article=${scope.row[7]}`">{{ scope.row[7] }}</a>
        </template>
      </el-table-column>
    </el-table>
    <div class="table__pagination">
      <el-pagination
        v-if="chunkedData.length > 1"
        background
        layout="prev, pager, next"
        :page-size="1"
        :total="chunkedData.length"
        @current-change="pageChange"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import { chunk } from "lodash";
import axios from "axios";
// import moment from 'moment';
// moment.locale('fr');

export default {
  name: "Table",
  props: {},
  data() {
    return {
      tableData: [],
      pagination: 1,
      chunkNumber: 10,
      dataIsLoading: true,
      search: "",
      dateRange: "",
    };
  },
  computed: {
    chunkedData() {
      return chunk(this.filteredData, this.chunkNumber);
    },
    filteredData() {
      return this.tableData.filter(
        data =>
          !this.search ||
          data[1].toLowerCase().includes(this.search.toLowerCase()) ||
          data[2].toLowerCase().includes(this.search.toLowerCase()) ||
          data[7].toString().includes(this.search)
      );
    },
  },
  methods: {
    pageChange(val) {
      this.pagination = val;
    },
    getFlag(country) {
      switch (country) {
        case 'France':
          return 'fr';
        case 'Great Britain':
          return 'gb';
        case 'United States':
          return 'us';
        default:
          return 'sa';
      }
    },
    getGender(gender) {
      switch (gender) {
        case 'Male':
          return 'Homme';
        case 'Female':
          return 'Femme';
        default:
          return 'Autre';
      }
    },
    submitDateFilter() {
      // const startDate = moment(this.dateRange[0]).format('L');
      // const endDate = moment(this.dateRange[1]).format('L');
      // console.log(startDate, endDate);
      this.$message('Traiter 5000 lignes en front pour comparer des dates, non merci !');
    },
    filterGenre(value, row) {
      return row[3] === value;
    },
    filterCountry(value, row) {
      return row[4] === value;
    },
    filterAge(value, row) {
      switch (value) {
        case '1':
          return row[5] <= 25;
        case '2':
          return row[5] > 25 && row[5] <= 50;
        case '3':
          return row[5] > 50;
        default:
          return row[5];
      }
    },
  },
  mounted() {
    axios({
      method: "get",
      url: `http://${window.location.hostname}:3000/data`,
    }).then(res => {
      res.data.shift();
      this.tableData = res.data;
      this.dataIsLoading = false;
    });
  },
};
</script>

<style scoped lang="scss">
  .table {
    .table__options {
      display: flex;
      margin-bottom: 25px;
      .table__options__search {
        flex-grow: 1;
      }
      .table__options__daterange {
        width: 350px;
        margin-left: 10px;
      }
      .table__options__button {
        margin-left: 10px;
      }
    }
    .table__pagination {
      margin-top: 25px;
      text-align: center;
    }
  }
</style>
