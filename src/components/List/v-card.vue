<template>
  <v-dialog v-model="dialog" persistent max-width="900px">
    <v-tabs>
      <v-tab>Общее</v-tab>
      <v-tab>Характеристики</v-tab>
      <v-tab-item>
        <v-card>
          <v-card>
            <v-card-title><span class="headline ml-3">{{ company.name }}</span></v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="6">
                    <v-card elevation="2">
                      <v-col cols="12">
                        <p class="font-weight-black">Данные о компаний</p>
                        <v-text-field
                            v-model="company.name"
                            :counter="30"
                            label="Название компаний"
                            required
                        ></v-text-field>
                      </v-col>
                    </v-card>
                  </v-col>
                  <v-col cols="6">
                    <v-card elevation="2">
                      <v-col cols="12">
                        <p class="font-weight-black">Статус компаний</p>
                        <div class="v-input__slot">
                          <label class="v-label theme--light">Общее количество товаров: </label>
                          <div><span>{{ company.status.totalProducts }}</span></div>
                        </div>
                        <div class="v-input__slot">
                          <label class="v-label theme--light">Доступные товары: </label>
                          <div><span>{{ company.status.availableProducts }}</span></div>
                        </div>
                        <div class="v-input__slot">
                          <label class="v-label theme--light">Недоступные товары: </label>
                          <div><span>{{ company.status.totalProducts-company.status.availableProducts }}</span></div>
                        </div>
                        <div class="v-input__slot">
                          <label class="v-label theme--light">Последнее дата изменений: </label>
                          <div><span>{{ company.status.lastCheckDate.substring(0,10) }}</span></div>
                        </div>
                      </v-col>
                    </v-card>
                    <v-card class="mt-6" elevation="2">
                      <v-col cols="12">
                        <p class="font-weight-black">Настройки</p>
                        <v-select
                            v-model="cities"
                            :items="company.cities"
                            label="Города"
                            data-vv-name="select"
                            required
                        ></v-select>
                        <v-slider
                            v-model="company.status.availableProducts"
                            :max="company.status.totalProducts"
                            label="Доступные товары"
                            thumb-label="always"
                        ></v-slider>
                      </v-col>
                    </v-card>
                  </v-col>
                </v-row>
              </v-container>
              <small>*указывает обязательное поле</small>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" outlined text @click="close">
                Отменить
              </v-btn>
              <v-btn color="primary" @click="close">
                Сохранить
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <p>
              Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae
              iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non
              adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet,
              leo. Nunc sed turpis.
            </p>

            <p>
              Suspendisse feugiat. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus,
              vitae iaculis lacus elit id tortor. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique
              sapien, a accumsan nisi mauris ac eros. In hac habitasse platea dictumst. Fusce ac felis sit amet ligula
              pharetra condimentum.
            </p>

            <p>
              Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Nam
              commodo suscipit quam. In consectetuer turpis ut velit. Sed cursus turpis vitae tortor. Aliquam eu nunc.
            </p>

            <p>
              Etiam ut purus mattis mauris sodales aliquam. Ut varius tincidunt libero. Aenean viverra rhoncus pede.
              Duis leo. Fusce fermentum odio nec arcu.
            </p>

            <p class="mb-0">
              Donec venenatis vulputate lorem. Aenean viverra rhoncus pede. In dui magna, posuere eget, vestibulum et,
              tempor auctor, justo. Fusce commodo aliquam arcu. Suspendisse enim turpis, dictum sed, iaculis a,
              condimentum nec, nisi.
            </p>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs>

  </v-dialog>
</template>
<script>
export default {
  data() {
    return {
      cities: ""
    }
  },
  props: {
    dialog: {
      default: false
    },
    company: {}
  },
  methods: {
    close() {
      this.$emit('update:dialog', false)
    }
  }
}
</script>
