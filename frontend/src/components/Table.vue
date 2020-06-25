<template>
  <div class="table" v-loading="dataIsLoading">
    <div class="table__search">
      <el-input v-model="search" size="mini" clearable placeholder="Type to search" />
    </div>
    <el-table :data="chunkedData[pagination - 1] || chunkedData[0]" stripe style="width: 100%">
      <el-table-column prop="1" label="Nom" sortable></el-table-column>
      <el-table-column prop="2" label="Prénom" sortable></el-table-column>
      <el-table-column prop="3" label="Genre" sortable></el-table-column>
      <el-table-column prop="4" label="Pays" sortable></el-table-column>
      <el-table-column prop="5" label="Age" sortable></el-table-column>
      <el-table-column prop="6" label="Date" sortable></el-table-column>
      <el-table-column prop="7" label="Id" sortable></el-table-column>
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
          data[4].toLowerCase().includes(this.search.toLowerCase())
      );
    },
  },
  methods: {
    pageChange(val) {
      this.pagination = val;
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
    .table__search {
      max-width: 300px;
      margin-bottom: 25px;
    }
    .table__pagination {
      margin-top: 25px;
    }
  }
</style>
