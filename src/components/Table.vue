<template>
  <div>
    <el-input v-model="search" size="mini" clearable placeholder="Type to search" />
    <el-table :data="chunckedData[pagination - 1] || chunckedData[0]" stripe style="width: 100%">
      <el-table-column prop="date" label="Date" sortable width="180"></el-table-column>
      <el-table-column prop="name" label="Nom" sortable width="180"></el-table-column>
      <el-table-column prop="address" label="Adresse" sortable></el-table-column>
    </el-table>
    <el-pagination
      v-if="chunckedData.length > 1"
      background
      layout="prev, pager, next"
      :page-size="1"
      :total="chunckedData.length"
      @current-change="pageChange"
    ></el-pagination>
  </div>
</template>

<script>
import { chunk } from "lodash";

export default {
  name: "Table",
  props: {},
  data() {
    return {
      tableData: [
        {
          date: "2016-05-03",
          name: "Tom",
          address: "830, Airplane Avenue"
        },
        {
          date: "2018-11-02",
          name: "Julien",
          address: "2468, Aspen Court"
        },
        {
          date: "2016-05-14",
          name: "Teddy",
          address: "1179, Washington Street"
        },
        {
          date: "2016-05-01",
          name: "Steven",
          address: "1486, My Drive"
        },
        {
          date: "2017-02-02",
          name: "Nicolas",
          address: "124, Alfred Drive"
        },
        {
          date: "2010-07-18",
          name: "Solène",
          address: "3819, Rodney Street"
        },
        {
          date: "2019-01-16",
          name: "Sarah",
          address: "4124, Elsie Drive"
        },
        {
          date: "2018-12-26",
          name: "Antoine",
          address: "1968, Leverton Cove Road"
        },
        {
          date: "2015-08-06",
          name: "Hugo",
          address: "4623, Goldcliff Circle"
        },
        {
          date: "2012-09-13",
          name: "Thomas",
          address: "3546, Heavner Avenue"
        },
        {
          date: "2017-07-28",
          name: "Chloé",
          address: "452, Broadway Avenue"
        },
        {
          date: "2020-04-03",
          name: "William",
          address: "5, Downing Street"
        }
      ],
      pagination: 1,
      chunkNumber: 5,
      search: ""
    };
  },
  computed: {
    chunckedData() {
      return chunk(this.filteredData, this.chunkNumber);
    },
    filteredData() {
      return this.tableData.filter(
        data =>
          !this.search ||
          data.name.toLowerCase().includes(this.search.toLowerCase()) ||
          data.address.toLowerCase().includes(this.search.toLowerCase())
      );
    }
  },
  methods: {
    pageChange(val) {
      this.pagination = val;
    }
  }
};
</script>

<style scoped lang="scss">
</style>