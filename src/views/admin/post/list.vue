<template>
  <div class="main">
    <div class="body container">
      <div class="typecho-page-title">
        <h2>
          管理文章<a @click="$router.push({path:'/admin/post/add'})">新增</a>
        </h2>
      </div>
      <div class="row typecho-page-main" role="main">
        <div class="col-mb-12 typecho-list">
          <div class="clearfix">
            <ul class="typecho-option-tabs right">
              <li class="">
                <a
                  href="http://127.0.0.2/admin/manage-posts.php?__typecho_all_posts=on"
                  >所有</a
                >
              </li>
              <li class="current">
                <a
                  href="http://127.0.0.2/admin/manage-posts.php?__typecho_all_posts=off"
                  >我的</a
                >
              </li>
            </ul>
            <ul class="typecho-option-tabs">
              <li class="current">
                <a href="http://127.0.0.2/admin/manage-posts.php">可用</a>
              </li>
              <li>
                <a href="http://127.0.0.2/admin/manage-posts.php?status=waiting"
                  >待审核 <span class="balloon">1</span>
                </a>
              </li>
              <li>
                <a href="http://127.0.0.2/admin/manage-posts.php?status=draft"
                  >草稿
                </a>
              </li>
            </ul>
          </div>

          <div class="typecho-list-operate clearfix">
            <form method="get">
              <div class="operate">
                <label
                  ><i class="sr-only">全选</i
                  ><input type="checkbox" class="typecho-table-select-all"
                /></label>
                <div class="btn-group btn-drop">
                  <button class="btn dropdown-toggle btn-s" type="button">
                    <i class="sr-only">操作</i>选中项
                    <i class="i-caret-down"></i>
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a
                        lang="你确认要删除这些文章吗?"
                        href="http://127.0.0.2/index.php/action/contents-post-edit?do=delete&amp;_=4cc2fb6a3366fc01f7a89738f8aa32cc"
                        >删除</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
              <div class="search" role="search">
                <input
                  type="text"
                  class="text-s"
                  placeholder="请输入关键字"
                  value=""
                  name="keywords"
                />
                <select name="category">
                  <option value="">所有分类</option>
                  <option value="1">默认分类</option>
                  <option value="3">默认子分类</option>
                  <option value="4">分类1</option>
                  <option value="6">分类11</option>
                  <option value="7">分类12</option>
                  <option value="5">分类2</option>
                </select>
                <button type="submit" class="btn btn-s">筛选</button>
              </div>
            </form>
          </div>
          <!-- end .typecho-list-operate -->

          <form method="post" name="manage_posts" class="operate-form">
            <div class="typecho-table-wrap">
              <table class="typecho-list-table">
                <colgroup>
                  <col width="20" />
                  <col width="6%" />
                  <col width="45%" />
                  <col width="" />
                  <col width="18%" />
                  <col width="16%" />
                </colgroup>
                <thead>
                  <tr>
                    <th></th>
                    <th></th>
                    <th>标题</th>
                    <th>作者</th>
                    <th>分类</th>
                    <th>日期</th>
                  </tr>
                </thead>
                <tbody>
                  <tr id="post-12">
                    <td><input type="checkbox" value="12" name="cid[]" /></td>
                    <td>
                      <a
                        href="http://127.0.0.2/admin/manage-comments.php?cid=12"
                        class="balloon-button size-10"
                        title="2 评论"
                        >2</a
                      >
                    </td>
                    <td>
                      <a href="http://127.0.0.2/admin/write-post.php?cid=12"
                        >第七篇文章</a
                      >
                      <a
                        href="http://127.0.0.2/admin/write-post.php?cid=12"
                        title="编辑 第七篇文章"
                        ><i class="i-edit"></i
                      ></a>
                      <a
                        href="http://127.0.0.2/index.php/archives/12/"
                        title="浏览 第七篇文章"
                        target="_blank"
                        ><i class="i-exlink"></i
                      ></a>
                    </td>
                    <td>
                      <a href="http://127.0.0.2/admin/manage-posts.php?uid=1"
                        >adminer</a
                      >
                    </td>
                    <td>
                      <a
                        href="http://127.0.0.2/admin/manage-posts.php?category=1"
                        >默认分类</a
                      >
                    </td>
                    <td>5月7日</td>
                  </tr>
                  <tr id="post-10">
                    <td><input type="checkbox" value="10" name="cid[]" /></td>
                    <td>
                      <a
                        href="http://127.0.0.2/admin/manage-comments.php?cid=10"
                        class="balloon-button size-1"
                        title="0 评论"
                        >0</a
                      >
                    </td>
                    <td>
                      <a href="http://127.0.0.2/admin/write-post.php?cid=10"
                        >第五篇文章</a
                      >
                      <a
                        href="http://127.0.0.2/admin/write-post.php?cid=10"
                        title="编辑 第五篇文章"
                        ><i class="i-edit"></i
                      ></a>
                      <a
                        href="http://127.0.0.2/index.php/archives/10/"
                        title="浏览 第五篇文章"
                        target="_blank"
                        ><i class="i-exlink"></i
                      ></a>
                    </td>
                    <td>
                      <a href="http://127.0.0.2/admin/manage-posts.php?uid=1"
                        >adminer</a
                      >
                    </td>
                    <td>
                      <a
                        href="http://127.0.0.2/admin/manage-posts.php?category=1"
                        >默认分类</a
                      >
                    </td>
                    <td>5月7日</td>
                  </tr>
                  <tr id="post-11">
                    <td><input type="checkbox" value="11" name="cid[]" /></td>
                    <td>
                      <a
                        href="http://127.0.0.2/admin/manage-comments.php?cid=11"
                        class="balloon-button size-1"
                        title="0 评论"
                        >0</a
                      >
                    </td>
                    <td>
                      <a href="http://127.0.0.2/admin/write-post.php?cid=11"
                        >第六篇文章</a
                      >
                      <em class="status">待审核</em>
                      <a
                        href="http://127.0.0.2/admin/write-post.php?cid=11"
                        title="编辑 第六篇文章"
                        ><i class="i-edit"></i
                      ></a>
                      <a
                        href="http://127.0.0.2/index.php/archives/11/"
                        title="浏览 第六篇文章"
                        target="_blank"
                        ><i class="i-exlink"></i
                      ></a>
                    </td>
                    <td>
                      <a href="http://127.0.0.2/admin/manage-posts.php?uid=1"
                        >adminer</a
                      >
                    </td>
                    <td>
                      <a
                        href="http://127.0.0.2/admin/manage-posts.php?category=1"
                        >默认分类</a
                      >
                    </td>
                    <td>5月7日</td>
                  </tr>
                  <tr id="post-13">
                    <td><input type="checkbox" value="13" name="cid[]" /></td>
                    <td>
                      <a
                        href="http://127.0.0.2/admin/manage-comments.php?cid=13"
                        class="balloon-button size-1"
                        title="0 评论"
                        >0</a
                      >
                    </td>
                    <td>
                      <a href="http://127.0.0.2/admin/write-post.php?cid=13"
                        >第八篇文章</a
                      >
                      <em class="status">私密</em>
                      <a
                        href="http://127.0.0.2/admin/write-post.php?cid=13"
                        title="编辑 第八篇文章"
                        ><i class="i-edit"></i
                      ></a>
                      <a
                        href="http://127.0.0.2/index.php/archives/13/"
                        title="浏览 第八篇文章"
                        target="_blank"
                        ><i class="i-exlink"></i
                      ></a>
                    </td>
                    <td>
                      <a href="http://127.0.0.2/admin/manage-posts.php?uid=1"
                        >adminer</a
                      >
                    </td>
                    <td>
                      <a
                        href="http://127.0.0.2/admin/manage-posts.php?category=1"
                        >默认分类</a
                      >
                    </td>
                    <td>5月7日</td>
                  </tr>
                  <tr id="post-14">
                    <td><input type="checkbox" value="14" name="cid[]" /></td>
                    <td>
                      <a
                        href="http://127.0.0.2/admin/manage-comments.php?cid=14"
                        class="balloon-button size-1"
                        title="0 评论"
                        >0</a
                      >
                    </td>
                    <td>
                      <a href="http://127.0.0.2/admin/write-post.php?cid=14"
                        >第九篇文章</a
                      >
                      <a
                        href="http://127.0.0.2/admin/write-post.php?cid=14"
                        title="编辑 第九篇文章"
                        ><i class="i-edit"></i
                      ></a>
                      <a
                        href="http://127.0.0.2/index.php/archives/14/"
                        title="浏览 第九篇文章"
                        target="_blank"
                        ><i class="i-exlink"></i
                      ></a>
                    </td>
                    <td>
                      <a href="http://127.0.0.2/admin/manage-posts.php?uid=1"
                        >adminer</a
                      >
                    </td>
                    <td>
                      <a
                        href="http://127.0.0.2/admin/manage-posts.php?category=1"
                        >默认分类</a
                      >
                    </td>
                    <td>5月7日</td>
                  </tr>
                  <tr id="post-15">
                    <td><input type="checkbox" value="15" name="cid[]" /></td>
                    <td>
                      <a
                        href="http://127.0.0.2/admin/manage-comments.php?cid=15"
                        class="balloon-button size-1"
                        title="0 评论"
                        >0</a
                      >
                    </td>
                    <td>
                      <a href="http://127.0.0.2/admin/write-post.php?cid=15"
                        >第十篇文章</a
                      >
                      <em class="status">密码保护</em>
                      <a
                        href="http://127.0.0.2/admin/write-post.php?cid=15"
                        title="编辑 第十篇文章"
                        ><i class="i-edit"></i
                      ></a>
                      <a
                        href="http://127.0.0.2/index.php/archives/15/"
                        title="浏览 第十篇文章"
                        target="_blank"
                        ><i class="i-exlink"></i
                      ></a>
                    </td>
                    <td>
                      <a href="http://127.0.0.2/admin/manage-posts.php?uid=1"
                        >adminer</a
                      >
                    </td>
                    <td>
                      <a
                        href="http://127.0.0.2/admin/manage-posts.php?category=1"
                        >默认分类</a
                      >
                    </td>
                    <td>5月7日</td>
                  </tr>
                  <tr id="post-16">
                    <td><input type="checkbox" value="16" name="cid[]" /></td>
                    <td>
                      <a
                        href="http://127.0.0.2/admin/manage-comments.php?cid=16"
                        class="balloon-button size-1"
                        title="0 评论"
                        >0</a
                      >
                    </td>
                    <td>
                      <a href="http://127.0.0.2/admin/write-post.php?cid=16"
                        >第十一篇文章</a
                      >
                      <em class="status">隐藏</em>
                      <a
                        href="http://127.0.0.2/admin/write-post.php?cid=16"
                        title="编辑 第十一篇文章"
                        ><i class="i-edit"></i
                      ></a>
                      <a
                        href="http://127.0.0.2/index.php/archives/16/"
                        title="浏览 第十一篇文章"
                        target="_blank"
                        ><i class="i-exlink"></i
                      ></a>
                    </td>
                    <td>
                      <a href="http://127.0.0.2/admin/manage-posts.php?uid=1"
                        >adminer</a
                      >
                    </td>
                    <td>
                      <a
                        href="http://127.0.0.2/admin/manage-posts.php?category=1"
                        >默认分类</a
                      >
                    </td>
                    <td>5月7日</td>
                  </tr>
                  <tr id="post-9">
                    <td><input type="checkbox" value="9" name="cid[]" /></td>
                    <td>
                      <a
                        href="http://127.0.0.2/admin/manage-comments.php?cid=9"
                        class="balloon-button size-1"
                        title="0 评论"
                        >0</a
                      >
                    </td>
                    <td>
                      <a href="http://127.0.0.2/admin/write-post.php?cid=9"
                        >第四篇文章</a
                      >
                      <a
                        href="http://127.0.0.2/admin/write-post.php?cid=9"
                        title="编辑 第四篇文章"
                        ><i class="i-edit"></i
                      ></a>
                      <a
                        href="http://127.0.0.2/index.php/archives/9/"
                        title="浏览 第四篇文章"
                        target="_blank"
                        ><i class="i-exlink"></i
                      ></a>
                    </td>
                    <td>
                      <a href="http://127.0.0.2/admin/manage-posts.php?uid=1"
                        >adminer</a
                      >
                    </td>
                    <td>
                      <a
                        href="http://127.0.0.2/admin/manage-posts.php?category=1"
                        >默认分类</a
                      >
                    </td>
                    <td>5月7日</td>
                  </tr>
                  <tr id="post-7">
                    <td><input type="checkbox" value="7" name="cid[]" /></td>
                    <td>
                      <a
                        href="http://127.0.0.2/admin/manage-comments.php?cid=7"
                        class="balloon-button size-1"
                        title="0 评论"
                        >0</a
                      >
                    </td>
                    <td>
                      <a href="http://127.0.0.2/admin/write-post.php?cid=7"
                        >第三篇文章</a
                      >
                      <a
                        href="http://127.0.0.2/admin/write-post.php?cid=7"
                        title="编辑 第三篇文章"
                        ><i class="i-edit"></i
                      ></a>
                      <a
                        href="http://127.0.0.2/index.php/archives/7/"
                        title="浏览 第三篇文章"
                        target="_blank"
                        ><i class="i-exlink"></i
                      ></a>
                    </td>
                    <td>
                      <a href="http://127.0.0.2/admin/manage-posts.php?uid=1"
                        >adminer</a
                      >
                    </td>
                    <td>
                      <a
                        href="http://127.0.0.2/admin/manage-posts.php?category=1"
                        >默认分类</a
                      >
                    </td>
                    <td>5月7日</td>
                  </tr>
                  <tr id="post-4">
                    <td><input type="checkbox" value="4" name="cid[]" /></td>
                    <td>
                      <a
                        href="http://127.0.0.2/admin/manage-comments.php?cid=4"
                        class="balloon-button size-10"
                        title="1 评论"
                        >1</a
                      >
                    </td>
                    <td>
                      <a href="http://127.0.0.2/admin/write-post.php?cid=4"
                        >第二篇文章</a
                      >
                      <a
                        href="http://127.0.0.2/admin/write-post.php?cid=4"
                        title="编辑 第二篇文章"
                        ><i class="i-edit"></i
                      ></a>
                      <a
                        href="http://127.0.0.2/index.php/archives/4/"
                        title="浏览 第二篇文章"
                        target="_blank"
                        ><i class="i-exlink"></i
                      ></a>
                    </td>
                    <td>
                      <a href="http://127.0.0.2/admin/manage-posts.php?uid=1"
                        >adminer</a
                      >
                    </td>
                    <td>
                      <a
                        href="http://127.0.0.2/admin/manage-posts.php?category=1"
                        >默认分类</a
                      >
                    </td>
                    <td>5月2日</td>
                  </tr>
                  <tr id="post-3">
                    <td><input type="checkbox" value="3" name="cid[]" /></td>
                    <td>
                      <a
                        href="http://127.0.0.2/admin/manage-comments.php?cid=3"
                        class="balloon-button size-1"
                        title="0 评论"
                        >0</a
                      >
                    </td>
                    <td>
                      <a href="http://127.0.0.2/admin/write-post.php?cid=3"
                        >这是第一篇帖子</a
                      >
                      <a
                        href="http://127.0.0.2/admin/write-post.php?cid=3"
                        title="编辑 这是第一篇帖子"
                        ><i class="i-edit"></i
                      ></a>
                      <a
                        href="http://127.0.0.2/index.php/archives/3/"
                        title="浏览 这是第一篇帖子"
                        target="_blank"
                        ><i class="i-exlink"></i
                      ></a>
                    </td>
                    <td>
                      <a href="http://127.0.0.2/admin/manage-posts.php?uid=1"
                        >adminer</a
                      >
                    </td>
                    <td>
                      <a
                        href="http://127.0.0.2/admin/manage-posts.php?category=1"
                        >默认分类</a
                      >
                    </td>
                    <td>5月2日</td>
                  </tr>
                  <tr id="post-1">
                    <td><input type="checkbox" value="1" name="cid[]" /></td>
                    <td>
                      <a
                        href="http://127.0.0.2/admin/manage-comments.php?cid=1"
                        class="balloon-button size-10"
                        title="6 评论"
                        >6</a
                      >
                    </td>
                    <td>
                      <a href="http://127.0.0.2/admin/write-post.php?cid=1"
                        >欢迎使用 Typecho</a
                      >
                      <a
                        href="http://127.0.0.2/admin/write-post.php?cid=1"
                        title="编辑 欢迎使用 Typecho"
                        ><i class="i-edit"></i
                      ></a>
                      <a
                        href="http://127.0.0.2/index.php/archives/1/"
                        title="浏览 欢迎使用 Typecho"
                        target="_blank"
                        ><i class="i-exlink"></i
                      ></a>
                    </td>
                    <td>
                      <a href="http://127.0.0.2/admin/manage-posts.php?uid=1"
                        >adminer</a
                      >
                    </td>
                    <td>
                      <a
                        href="http://127.0.0.2/admin/manage-posts.php?category=1"
                        >默认分类</a
                      >
                    </td>
                    <td>5月2日</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </form>
          <!-- end .operate-form -->

          <div class="typecho-list-operate clearfix">
            <form method="get">
              <div class="operate">
                <label
                  ><i class="sr-only">全选</i
                  ><input type="checkbox" class="typecho-table-select-all"
                /></label>
                <div class="btn-group btn-drop">
                  <button class="btn dropdown-toggle btn-s" type="button">
                    <i class="sr-only">操作</i>选中项
                    <i class="i-caret-down"></i>
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a
                        lang="你确认要删除这些文章吗?"
                        href="http://127.0.0.2/index.php/action/contents-post-edit?do=delete&amp;_=4cc2fb6a3366fc01f7a89738f8aa32cc"
                        >删除</a
                      >
                    </li>
                  </ul>
                </div>
              </div>

              <ul class="typecho-pager">
                <li class="current">
                  <a href="http://127.0.0.2/admin/manage-posts.php?page=1">1</a>
                </li>
              </ul>
            </form>
          </div>
          <!-- end .typecho-list-operate -->
        </div>
        <!-- end .typecho-list -->
      </div>
      <!-- end .typecho-page-main -->
    </div>
  </div>
</template>

<script>
export default {
  name: "postList",
};
</script>

<style>
</style>