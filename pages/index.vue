<template>
  <div class="font-sans font-bold">
    <!-- Navigation -->
    <nav
      class="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b border-gray-100 z-50"
    >
      <div class="max-w-7xl text-xl mx-auto px-6 py-4">
        <ul class="flex justify-end space-x-8">
          <li>
            <a href="#hero" class="text-gray-600 hover:text-gray-900 transition"
              >Top</a
            >
          </li>

          <a
            href="#profile"
            class="text-gray-600 hover:text-gray-900 transition"
            >Profile</a
          >

          <a href="#works" class="text-gray-600 hover:text-gray-900 transition"
            >Works</a
          >

          <a href="#skills" class="text-gray-600 hover:text-gray-900 transition"
            >Skills</a
          >

          <li>
            <a
              href="#contact"
              class="text-gray-600 hover:text-gray-900 transition"
              >Contact</a
            >
          </li>
        </ul>
      </div>
    </nav>

    <!-- Hero セクション -->
    <section
      id="hero"
      class="bg-[repeating-linear-gradient(135deg,_#f3f4f6_0px,_#f3f4f6_10px,_#e0e7ef_10px,_#e0e7ef_20px)] min-h-screen flex items-center justify-center"
    >
      <div class="text-center max-w-5xl mx-auto px-6">
        <h1 class="text-6xl font-bold text-gray-900 mb-6 tracking-tight">
          Kawanami Mayumi's portfolio
        </h1>
        <p class="text-xl text-gray-600 mb-8 leading-relaxed">
          Webエンジニア / フリーランス開発者
        </p>
        <a
          href="#profile"
          class="inline-flex items-center px-8 py-4 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-colors"
        >
          詳しく見る
          <svg
            class="ml-2 w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </a>
      </div>
    </section>

    <!-- About セクション -->
    <section
      id="profile"
      class="bg-gradient-to-br from-gray-50 to-white min-h-screen flex items-center justify-center"
    >
      <div class="max-w-5xl mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">Profile</h2>
          <div class="w-24 h-1 bg-gray-900 mx-auto"></div>
        </div>
        <div class="grid md:grid-cols-1 gap-16 items-start">

          <div>
            <h3 class="text-xl font-semibold text-gray-900 mb-6 text-center">
              自己紹介
            </h3>
            <div class="text-xl font-light">
              <p class="text-gray-600 leading-relaxed mb-5">
                はじめまして、川南真弓と申します。
              </p>
              <p class="text-gray-600 leading-relaxed mb-5">
                異業種で約20年の社会人経験を経て、「ものづくり」への興味からWebアプリ開発を学び始め、現在は2年目になります。
              </p>
              <p class="text-gray-600 leading-relaxed mb-5">
                個人開発ではLaravelやNuxt.jsを中心に予約アプリや診断ツールを制作し、チーム開発ではInstagram連携ツールのUIや機能の改修を担当しました。
              </p>
              <p class="text-gray-600 leading-relaxed mb-5">
                技術だけでなく、丁寧なやり取りや責任感を大切にしながら、信頼される開発者を目指しています。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="works" class="py-24 bg-gray-50">
      <div class="max-w-6xl mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">Works</h2>
          <div class="w-24 h-1 bg-gray-900 mx-auto"></div>
        </div>
        <div class="mb-16">
          <div class="grid md:grid-cols-3 gap-8">
            <div
              v-for="(work, i) in works"
              :key="work.title"
              class="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-lg transition-all duration-300 flex flex-col items-center"
            >
              <div
                class="h-48 w-full flex items-center justify-center mb-6 overflow-hidden rounded-lg bg-gradient-to-br from-blue-50 to-indigo-100"
              >
                <img
                  :src="
                    getImagePath(work.mainImg?.[0] || work.images?.[0] || '')
                  "
                  class="object-cover h-full w-full"
                  alt="work image"
                />
              </div>
              <h4 class="text-xl font-semibold text-gray-900 mb-6 text-center">
                {{ work.title }}
              </h4>
              <button
                onmouseover="this.style.backgroundColor='rgb(102, 180, 164)'"
                onmouseout="this.style.backgroundColor='rgb(121, 198, 182)'"
                style="background-color: rgb(121, 198, 182)"
                class="px-6 py-2 text-white rounded-full shadow transition font-semibold flex items-center gap-2 cursor-pointer"
                @click="openModal(i)"
              >
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
                詳細を見る
              </button>
            </div>
          </div>
        </div>
        <!-- ...チーム開発セクションは省略 or 同様に対応可... -->
      </div>

      <!-- モーダル -->
      <div
        v-if="modalOpen"
        class="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      >
        <div
          class="bg-white rounded-2xl shadow-2xl max-w-4xl w-full mx-4 p-8 relative animate-fadeIn"
          style="top: 5%"
        >
          <button
            @click="closeModal"
            class="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center shadow transition"
          >
            <svg
              class="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div class="md:flex gap-8">
            <div class="md:w-2/5 mb-8 md:mb-0">
              <h4 class="text-2xl font-bold mb-4 text-center">
                {{ modalWork.title }}
              </h4>
              <p class="whitespace-pre-line text-gray-700 mb-4">
                {{ modalWork.detail }}
              </p>
              <div class="space-y-2 mb-4">
                <a
                  v-if="modalWork.demo"
                  :href="modalWork.demo"
                  target="_blank"
                  class="inline-flex items-center text-blue-600 hover:underline"
                >
                  <svg
                    class="w-5 h-5 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 10l4.553 2.276A2 2 0 0121 14.03V17a2 2 0 01-2 2H5a2 2 0 01-2-2v-2.97a2 2 0 01.447-1.254L8 10"
                    />
                  </svg>
                  Demo
                </a>
                <a
                  v-if="modalWork.github"
                  :href="modalWork.github"
                  target="_blank"
                  class="inline-flex items-center text-gray-800 hover:underline"
                >
                  <svg
                    class="w-5 h-5 ml-12"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.565 21.8 24 17.303 24 12c0-6.627-5.373-12-12-12z"
                    />
                  </svg>
                  GitHub
                </a>
              </div>
              <h5 class="font-semibold mb-2 mt-6">使用技術など</h5>
              <div class="flex flex-wrap gap-2 mb-2">
                <span
                  v-for="tech in modalWork.techs
                    .split(',')
                    .map((t) => t.trim())"
                  :key="tech"
                  :class="tagClass(tech)"
                  >{{ tech }}</span
                >
              </div>
            </div>
            <!-- 右カラム：画像サムネイル＋メイン画像 -->
            <div class="md:w-3/5">
              <div class="flex flex-wrap gap-2 mb-4">
                <img
                  v-for="img in modalWork.images"
                  :key="img"
                  :src="getImagePath(img)"
                  class="w-20 h-14 object-cover rounded shadow cursor-pointer border-2 border-transparent hover:border-blue-400 transition"
                  @click="mainImage = getImagePath(img)"
                />
              </div>
              <div class="rounded-lg overflow-hidden shadow-lg">
                <img :src="mainImage" class="w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="skills" class="py-24 bg-white">
      <div class="max-w-4xl mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">Skills</h2>
          <div class="w-24 h-1 bg-gray-900 mx-auto"></div>
        </div>
        <p class="text-gray-600 mb-10 text-xl font-light leading-loose">
          各スキルは、個人開発や小規模プロジェクトでの活用経験があります。
          基本的な実装や修正対応が可能で、今後は実務経験を通じて応用力をさらに高めていきたいと考えています。
        </p>
        <div class="grid md:grid-cols-1 gap-16 items-center">
          <div>
            <div class="space-y-8">

              <div class="border-3 border-gray-300 rounded-lg px-15 py-6 shadow-sm bg-white">
                <h3 class="text-xl text-gray-800 mb-2 text-center">
                  フロントエンド
                </h3>
                <div class="space-y-4">
                  <!-- HTML / CSS -->
                  <div class="flex justify-between items-center">
                    <span class="text-gray-700">HTML / CSS</span>
                    <div class="flex space-x-1">
                      <div
                        class="w-4 h-4 rounded-sm"
                        style="background-color: rgb(121, 198, 182)"
                      ></div>
                      <div
                        class="w-4 h-4 rounded-sm"
                        style="background-color: rgb(121, 198, 182)"
                      ></div>
                      <div
                        class="w-4 h-4 rounded-sm"
                        style="background-color: rgb(121, 198, 182)"
                      ></div>
                      <div class="w-4 h-4 bg-gray-200 rounded-sm"></div>
                      <div class="w-4 h-4 bg-gray-200 rounded-sm"></div>
                    </div>
                  </div>

                  <div class="flex justify-between items-center">
                    <span class="text-gray-700">Tailwind CSS</span>
                    <div class="flex space-x-1">
                      <div
                        class="w-4 h-4 rounded-sm"
                        style="background-color: rgb(121, 198, 182)"
                      ></div>
                      <div
                        class="w-4 h-4 rounded-sm"
                        style="background-color: rgb(121, 198, 182)"
                      ></div>
                      <div class="w-4 h-4 bg-gray-200 rounded-sm"></div>
                      <div class="w-4 h-4 bg-gray-200 rounded-sm"></div>
                      <div class="w-4 h-4 bg-gray-200 rounded-sm"></div>
                    </div>
                  </div>

                  <div class="flex justify-between items-center">
                    <span class="text-gray-700">JavaScript</span>
                    <div class="flex space-x-1">
                      <div
                        class="w-4 h-4 rounded-sm"
                        style="background-color: rgb(121, 198, 182)"
                      ></div>
                      <div
                        class="w-4 h-4 rounded-sm"
                        style="background-color: rgb(121, 198, 182)"
                      ></div>
                      <div class="w-4 h-4 bg-gray-200 rounded-sm"></div>
                      <div class="w-4 h-4 bg-gray-200 rounded-sm"></div>
                      <div class="w-4 h-4 bg-gray-200 rounded-sm"></div>
                    </div>
                  </div>

                  <div class="flex justify-between items-center">
                    <span class="text-gray-700">TypeScript</span>
                    <div class="flex space-x-1">
                      <div
                        class="w-4 h-4 rounded-sm"
                        style="background-color: rgb(121, 198, 182)"
                      ></div>
                      <div class="w-4 h-4 bg-gray-200 rounded-sm"></div>
                      <div class="w-4 h-4 bg-gray-200 rounded-sm"></div>
                      <div class="w-4 h-4 bg-gray-200 rounded-sm"></div>
                      <div class="w-4 h-4 bg-gray-200 rounded-sm"></div>
                    </div>
                  </div>

                  <!-- Nuxt -->
                  <div class="flex justify-between items-center">
                    <span class="text-gray-700">Nuxt</span>
                    <div class="flex space-x-1">
                      <div
                        class="w-4 h-4 rounded-sm"
                        style="background-color: rgb(121, 198, 182)"
                      ></div>
                      <div
                        class="w-4 h-4 rounded-sm"
                        style="background-color: rgb(121, 198, 182)"
                      ></div>
                      <div class="w-4 h-4 bg-gray-200 rounded-sm"></div>
                      <div class="w-4 h-4 bg-gray-200 rounded-sm"></div>
                      <div class="w-4 h-4 bg-gray-200 rounded-sm"></div>
                    </div>
                  </div>
                </div>
              </div>


              <div class="border-3 border-gray-300 rounded-lg px-15 py-6 shadow-sm bg-white">
                <h3 class="text-xl text-gray-800 mb-2 text-center">
                  バックエンド
                </h3>
                <div class="space-y-4">
                  <!-- PHP -->
                  <div class="flex justify-between items-center">
                    <span class="text-gray-700">PHP</span>
                    <div class="flex space-x-1">
                      <div
                        class="w-4 h-4 rounded-sm"
                        style="background-color: rgb(121, 198, 182)"
                      ></div>
                      <div
                        class="w-4 h-4 rounded-sm"
                        style="background-color: rgb(121, 198, 182)"
                      ></div>
                      <div class="w-4 h-4 bg-gray-200 rounded-sm"></div>
                      <div class="w-4 h-4 bg-gray-200 rounded-sm"></div>
                      <div class="w-4 h-4 bg-gray-200 rounded-sm"></div>
                    </div>
                  </div>

                  <div class="flex justify-between items-center">
                    <span class="text-gray-700">Laravel</span>
                    <div class="flex space-x-1">
                      <div
                        class="w-4 h-4 rounded-sm"
                        style="background-color: rgb(121, 198, 182)"
                      ></div>
                      <div
                        class="w-4 h-4 rounded-sm"
                        style="background-color: rgb(121, 198, 182)"
                      ></div>
                      <div class="w-4 h-4 bg-gray-200 rounded-sm"></div>
                      <div class="w-4 h-4 bg-gray-200 rounded-sm"></div>
                      <div class="w-4 h-4 bg-gray-200 rounded-sm"></div>
                    </div>
                  </div>

                  <div class="flex justify-between items-center">
                    <span class="text-gray-700">Firebase</span>
                    <div class="flex space-x-1">
                      <div
                        class="w-4 h-4 rounded-sm"
                        style="background-color: rgb(121, 198, 182)"
                      ></div>
                      <div class="w-4 h-4 bg-gray-200 rounded-sm"></div>
                      <div class="w-4 h-4 bg-gray-200 rounded-sm"></div>
                      <div class="w-4 h-4 bg-gray-200 rounded-sm"></div>
                      <div class="w-4 h-4 bg-gray-200 rounded-sm"></div>
                    </div>
                  </div>

                  <div class="flex justify-between items-center">
                    <span class="text-gray-700">Google Apps Script (GAS)</span>
                    <div class="flex space-x-1">
                      <div
                        class="w-4 h-4 rounded-sm"
                        style="background-color: rgb(121, 198, 182)"
                      ></div>
                      <div class="w-4 h-4 bg-gray-200 rounded-sm"></div>
                      <div class="w-4 h-4 bg-gray-200 rounded-sm"></div>
                      <div class="w-4 h-4 bg-gray-200 rounded-sm"></div>
                      <div class="w-4 h-4 bg-gray-200 rounded-sm"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="border-3 border-gray-300 rounded-lg px-15 py-6 shadow-sm bg-white">
                <h3 class="text-xl text-gray-800 mb-2 text-center">
                  インフラ・データベース
                </h3>
                <div class="space-y-4">
                  <div class="flex justify-between items-center">
                    <span class="text-gray-700">Docker</span>
                    <div class="flex space-x-1">
                      <div
                        class="w-4 h-4 rounded-sm"
                        style="background-color: rgb(121, 198, 182)"
                      ></div>
                      <div
                        class="w-4 h-4 rounded-sm"
                        style="background-color: rgb(121, 198, 182)"
                      ></div>
                      <div
                        class="w-4 h-4 rounded-sm"
                        style="background-color: rgb(121, 198, 182)"
                      ></div>
                      <div class="w-4 h-4 bg-gray-200 rounded-sm"></div>
                      <div class="w-4 h-4 bg-gray-200 rounded-sm"></div>
                    </div>
                  </div>

                  <div class="flex justify-between items-center">
                    <span class="text-gray-700">AWS（EC2/S3/RDSなど）</span>
                    <div class="flex space-x-1">
                      <div
                        class="w-4 h-4 rounded-sm"
                        style="background-color: rgb(121, 198, 182)"
                      ></div>
                      <div class="w-4 h-4 bg-gray-200 rounded-sm"></div>
                      <div class="w-4 h-4 bg-gray-200 rounded-sm"></div>
                      <div class="w-4 h-4 bg-gray-200 rounded-sm"></div>
                      <div class="w-4 h-4 bg-gray-200 rounded-sm"></div>
                    </div>
                  </div>

                  <div class="flex justify-between items-center">
                    <span class="text-gray-700">MySQL / DynamoDB</span>
                    <div class="flex space-x-1">
                      <div
                        class="w-4 h-4 rounded-sm"
                        style="background-color: rgb(121, 198, 182)"
                      ></div>
                      <div
                        class="w-4 h-4 rounded-sm"
                        style="background-color: rgb(121, 198, 182)"
                      ></div>
                      <div class="w-4 h-4 bg-gray-200 rounded-sm"></div>
                      <div class="w-4 h-4 bg-gray-200 rounded-sm"></div>
                      <div class="w-4 h-4 bg-gray-200 rounded-sm"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="border-3 border-gray-300 rounded-lg px-15 py-6 shadow-sm bg-white">
                <h3 class="text-xl text-gray-800 mb-2 text-center">
                  開発ツール
                </h3>
                <div class="flex justify-between items-center">
                  <span class="text-gray-700">Git / GitHub</span>
                  <div class="flex space-x-1">
                    <div
                      class="w-4 h-4 rounded-sm"
                      style="background-color: rgb(121, 198, 182)"
                    ></div>
                    <div
                      class="w-4 h-4 rounded-sm"
                      style="background-color: rgb(121, 198, 182)"
                    ></div>
                    <div
                      class="w-4 h-4 rounded-sm"
                      style="background-color: rgb(121, 198, 182)"
                    ></div>
                    <div class="w-4 h-4 bg-gray-200 rounded-sm"></div>
                    <div class="w-4 h-4 bg-gray-200 rounded-sm"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="my-10">
          <ul class="space-y-3 text-gray-700 font-light">
            <li class="flex items-start space-x-3">
              <div class="flex space-x-1 mt-1">
                <div
                  class="w-4 h-4 rounded-sm"
                  style="background-color: rgb(121, 198, 182)"
                ></div>
                <div class="w-4 h-4 bg-gray-200 rounded-sm"></div>
                <div class="w-4 h-4 bg-gray-200 rounded-sm"></div>
                <div class="w-4 h-4 bg-gray-200 rounded-sm"></div>
                <div class="w-4 h-4 bg-gray-200 rounded-sm"></div>
              </div>
              <p>
                基本的な使用方法を理解しており、簡単なコードの実装や修正ができる。
              </p>
            </li>
            <li class="flex items-start space-x-3">
              <div class="flex space-x-1 mt-1">
                <div
                  class="w-4 h-4 rounded-sm"
                  style="background-color: rgb(121, 198, 182)"
                ></div>
                <div
                  class="w-4 h-4 rounded-sm"
                  style="background-color: rgb(121, 198, 182)"
                ></div>
                <div class="w-4 h-4 bg-gray-200 rounded-sm"></div>
                <div class="w-4 h-4 bg-gray-200 rounded-sm"></div>
                <div class="w-4 h-4 bg-gray-200 rounded-sm"></div>
              </div>
              <p>
                実務や個人開発で複数回使用経験があり、実装対応は可能だが、さらなる習熟を進めている。
              </p>
            </li>
            <li class="flex items-start space-x-3">
              <div class="flex space-x-1 mt-1">
                <div
                  class="w-4 h-4 rounded-sm"
                  style="background-color: rgb(121, 198, 182)"
                ></div>
                <div
                  class="w-4 h-4 rounded-sm"
                  style="background-color: rgb(121, 198, 182)"
                ></div>
                <div
                  class="w-4 h-4 rounded-sm"
                  style="background-color: rgb(121, 198, 182)"
                ></div>
                <div class="w-4 h-4 bg-gray-200 rounded-sm"></div>
                <div class="w-4 h-4 bg-gray-200 rounded-sm"></div>
              </div>
              <p>
                実務レベルで自由に使いこなせ、要件に応じて設計・最適化ができる。
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Contact セクション -->
    <section
      id="contact"
      class="bg-gradient-to-br from-gray-50 to-white min-h-screen flex items-center justify-center"
    >
      <div class="max-w-2xl mx-auto px-6 text-center">
        <h2 class="text-4xl font-bold text-gray-900 mb-4">Contact</h2>
        <div class="w-24 h-1 bg-gray-900 mx-auto mb-12"></div>
        <p class="text-lg text-gray-600 mb-8">
          ご連絡は
          <a
            href="mailto:your.email@example.com"
            class="text-gray-900 font-medium underline hover:text-gray-600 transition"
            >メール</a
          >
          までお気軽にどうぞ
        </p>
        <div class="flex justify-center space-x-6">
          <a
            href="https://github.com/"
            target="_blank"
            class="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition"
          >
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
              />
            </svg>
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            class="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition"
          >
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
              />
            </svg>
          </a>
          <a
            href="mailto:your.email@example.com"
            class="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white text-center py-8">
      <p class="text-gray-400">&copy; 2025 Mayumi Kawanami</p>
    </footer>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const config = useRuntimeConfig();
const baseURL = config.public.app.baseURL;
const works = [
  {
    title: "ポートフォリオサイト",
    mainImg: ["/images/portfolio1.png"],
    detail:
      "こちらのポートフォリオサイトです。Nuxt 3とTailwind CSSを用いて制作しました。\n\n" +
      "各制作物を見やすく整理し、技術スタックや実装内容を視覚的に伝える構成にしています。ソースコードにもこだわり、読みやすさや再利用性を意識した設計・スタイルを心がけました。\n\n" +
      "デザインには UI/UX を意識し、レスポンシブ対応や構造のわかりやすさ、Tailwind CSS を活用したスタイリングで「シンプルかつスタイリッシュ」な印象を目指しました。",
    tags: ["Nuxt 3", "Tailwind CSS", "TypeScript", "GitHub"],
    techs: "Nuxt 3, Tailwind CSS, TypeScript, GitHub",
    demo: "https://your-portfolio.vercel.app",
    github: "https://github.com/yourname/portfolio",
    images: ["/images/portfolio1.png"],
  },
  {
    title: "食事診断ツール",
    mainImg: ["/images/meal1.png"],
    detail:
      "子どもの食事傾向を可視化し、マーケティング分析に活用するためのWeb診断ツールを個人開発しました。\n\n" +
      "アンケート形式で回答を取得し、スコア計算・レーダーチャート表示・Googleフォームへの自動送信・回答履歴の保存までを一連の流れで実装。\n\n" +
      "【担当内容】\n" +
      "- Nuxt.js による質問設計とページネーション実装\n" +
      "- レーダーチャートによる診断結果の可視化\n" +
      "- GAS を用いた Google フォーム自動送信\n" +
      "- Firebase Firestore へのログ保存\n" +
      "- レスポンシブ対応の UI 設計\n" +
      "- 要件整理から納品まで一貫対応、仕様書とマニュアルも作成\n",
    tags: ["Nuxt.js","JavaScript", "GAS", "Firebase", "GitHub"],
    techs: "Nuxt.js, JavaScript,GAS, Firebase, GitHub",
    demo: "https://nutrition-check.online/DietarySurveyPlusTestTest",
    github: "",
    images: [
      "/images/meal1.png",
      "/images/meal2.png",
      "/images/meal3.png",
      "/images/meal4.png",
    ],
  },
  {
    title: "飲食店予約アプリ",
    mainImg: ["/images/reserve1.png"],
    detail:
      "LaravelとMySQLを用いて、飲食店の検索〜予約〜口コミ投稿までを一括で管理できるアプリを個人開発しました。\n\n" +
      "ユーザー・店舗・管理者の3権限に対応し、それぞれの立場に応じた画面・機能を実装しています。予約登録・QRコード確認・口コミ投稿・CSVインポート・決済処理など、実用性を意識した設計に取り組みました。\n\n" +
      "Docker上で環境構築を行い、AWS（EC2/S3）を利用して本番デプロイも経験。Laravelの認証・リレーション・Bladeテンプレートの活用を通じて、Webアプリ開発の全体像を実践的に学びました。",
    tags: ["PHP","Laravel", "MySQL", "Docker", "AWS", "GitHub"],
    techs: "PHP,Laravel, MySQL, Docker, AWS, GitHub",
    demo: "https://mayumi-k.main.jp/restaurant/",
    github: "",
    images: [
      "/images/reserve2.png",
      "/images/reserve1.png",
      "/images/reserve7.png",
      "/images/reserve3.png",
      "/images/reserve4.png",
      "/images/reserve5.png",
      "/images/reserve6.png",
    ],
  },
  {
    title: "勤怠管理アプリ",
    mainImg: ["/images/attendance2.png"],
    detail:
      "LaravelとMySQLを用いて、勤務開始・終了や休憩時間を記録・集計できる勤怠管理アプリを個人開発しました。\n\n" +
      "会員登録・ログイン・メール認証を備えたユーザー認証機能や、勤怠データの一覧表示・ページネーションにも対応しています。\n\n" +
      "Dockerを使って開発環境を構築し、保守性を意識したMVC設計やバリデーションの実装など、業務向けWebアプリ開発の基本を習得しました。",
    tags: ["PHP","Laravel", "MySQL", "Docker", "GitHub"],
    techs: "PHP,Laravel, MySQL, Docker, GitHub",
    demo: "https://mayumi-k.main.jp/kintai/",
    github: "",
    images: [
      "/images/attendance1.png",
      "/images/attendance2.png",
      "/images/attendance3.png",
      "/images/attendance4.png",
      "/images/attendance5.png",
    ],
  },
  {
    title: "Instagramチャットボットツール",
    emoji: "🤖",
    detail:
      "Instagramチャットボットツールの詳細説明。NuxtとLaravelでのチーム開発で、キャンペーン管理やダッシュボードUIの改修を担当しました。",
    tags: [
      "Nuxt.js",
      "Laravel",
      "Tailwind CSS",
      "TypeScript",
      "DynamoDB",
      "Docker",
      "GitHub",
    ],
    techs:
      "Nuxt.js, Laravel, PHP,Tailwind CSS, TypeScript, DynamoDB, Docker, GitHub",
    demo: "",
    github: "",
    images: [],
  },
  {
    title: "マーケティング管理システム",
    emoji: "📊",
    detail:
      "不動産会社のマーケティング管理システムの詳細説明。Laravelでデータ収集・可視化を行い、DB追加や画面表示処理を担当しました。",
    tags: ["Laravel", "MySQL", "Docker", "GitHub", "Mac環境"],
    techs: "Laravel, MySQL, Docker, GitHub, Mac環境",
    demo: "",
    github: "",
    images: [],
  },
];

const modalOpen = ref(false);
const modalIndex = ref(0);
const mainImage = ref("");

const openModal = (i) => {
  modalIndex.value = i;
  modalOpen.value = true;
  mainImage.value = works[i].images[0];
};
const closeModal = () => {
  modalOpen.value = false;
};
const modalWork = computed(() => works[modalIndex.value]);

function tagClass(tag) {
  const colorMap = {
    "Nuxt.js": "bg-blue-100 text-blue-800",
    GAS: "bg-orange-100 text-orange-800",
    Firebase: "bg-yellow-100 text-yellow-800",
    GitHub: "bg-gray-100 text-gray-800",
    Laravel: "bg-red-100 text-red-800",
    MySQL: "bg-blue-100 text-blue-800",
    Docker: "bg-cyan-100 text-cyan-800",
    AWS: "bg-orange-100 text-orange-800",
    "Tailwind CSS": "bg-cyan-100 text-cyan-800",
    TypeScript: "bg-blue-100 text-blue-800",
    DynamoDB: "bg-yellow-100 text-yellow-800",
    JavaScript: "bg-gray-100 text-gray-700",
    PHP: "bg-purple-100 text-purple-800",
  };
  return `text-xs px-3 py-1 rounded-full font-medium ${
    colorMap[tag] || "bg-gray-100 text-gray-800"
  }`;
}
function getImagePath(path) {
  if (!path) return "";
  return (baseURL.endsWith("/") ? baseURL.slice(0, -1) : baseURL) + path;
}
</script>
