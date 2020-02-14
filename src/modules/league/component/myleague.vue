<template>
  <div class="myleague">
    <h3>My League</h3>
    <div no-body class="row leaguesfeed">
      <b-col cols="10" class="firstcol">
        <b-tabs align="left">
          <b-tab
            v-for="item in data"
            :key="item.itemName"
            v-bind:title="item.itemName"
          >
            <div>
              <b-table hover :items="item.items"></b-table>
            </div>
            <div class="overflow">
              <div class="mt-3">
                <b-pagination
                  v-model="currentPage"
                  pills
                  :total-rows="item.count"
                ></b-pagination>
              </div>
            </div>
          </b-tab>
        </b-tabs>
      </b-col>
      <b-col cols="2" class="secondcol">
        <div>
          <b-dropdown
            id="dropdown-dropup"
            dropup
            text="Feeds"
            variant="primary"
            class="float-left"
          >
            <div>
              <b-card tag="article" style="max-width: 20rem;" class="mb-2">
                <div class="row">
                  <div cols="2">
                    <img
                      src="https://picsum.photos/600/300/?image=25"
                      height="30"
                      width="30"
                      class="image"
                    />
                  </div>
                  <div cols="10">
                    <div>
                      <div class="heading">
                        <h5>Name</h5>
                      </div>
                      <div class="timing">
                        <span>2 Hours</span>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- 2ns row -->
                <div class="row">
                  <div cols="12">
                    <p>
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text
                    </p>
                  </div>
                </div>

                <div class="row">
                  <div cols="6">
                    <img
                      src="https://picsum.photos/600/300/?image=25"
                      height="80"
                      width="80"
                    />
                  </div>
                  <div cols="6" class="secondcol">
                    <div class="row">
                      <div cols="6" class="images">
                        <img
                          src="https://picsum.photos/600/300/?image=25"
                          height="30"
                          width="30"
                        />
                      </div>
                      <div cols="6" class="images">
                        <img
                          src="https://picsum.photos/600/300/?image=25"
                          height="30"
                          width="30"
                        />
                      </div>
                    </div>
                    <div class="row">
                      <div cols="6" class="images">
                        <img
                          src="https://picsum.photos/600/300/?image=25"
                          height="30"
                          width="30"
                        />
                      </div>
                      <div cols="6" class="images">
                        <img
                          src="https://picsum.photos/600/300/?image=25"
                          height="30"
                          width="30"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </b-card>
            </div>
          </b-dropdown>
        </div>
      </b-col>
    </div>
  </div>
</template>

<script lang="ts" src="./myleague.ts"></script>

<style scoped lang="css">
@import "../league.css";
</style>
