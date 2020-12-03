amis.define('docs/components/form/city.md', function(require, exports, module, define) {

  module.exports = {
    "title": "City 城市选择器",
    "description": null,
    "type": 0,
    "group": null,
    "menuName": "City",
    "icon": null,
    "order": 10,
    "html": "<p>城市选择器，可用于让用户输入城市。</p>\n<h2><a class=\"anchor\" name=\"%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95\" href=\"#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>基本用法</h2><div class=\"amis-preview\" style=\"height: 600px\"><script type=\"text/schema\" height=\"600\" scope=\"body\">{\n    \"type\": \"form\",\n    \"debug\": true,\n    \"api\": \"https://houtai.baidu.com/api/mock2/form/saveForm\",\n    \"controls\": [\n        {\n            \"name\": \"city\",\n            \"type\": \"city\",\n            \"label\": \"城市\",\n            \"searchable\": true\n        }\n    ]\n}\n</script></div>\n<p>观察数据域中表单项的值，存储的是位置邮编。</p>\n<h2><a class=\"anchor\" name=\"%E9%85%8D%E7%BD%AE%E9%80%89%E6%8B%A9%E7%BA%A7%E5%88%AB\" href=\"#%E9%85%8D%E7%BD%AE%E9%80%89%E6%8B%A9%E7%BA%A7%E5%88%AB\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>配置选择级别</h2><p>可以通过设置 <code>allowDistrict</code> 和 <code>allowCity</code> 设置用户选择级别，例如只选择省份：</p>\n<div class=\"amis-preview\" style=\"height: 600px\"><script type=\"text/schema\" height=\"600\" scope=\"body\">{\n    \"type\": \"form\",\n    \"debug\": true,\n    \"api\": \"https://houtai.baidu.com/api/mock2/form/saveForm\",\n    \"controls\": [\n        {\n            \"name\": \"city\",\n            \"type\": \"city\",\n            \"label\": \"城市\",\n            \"allowDistrict\": false,\n            \"allowCity\": false\n        }\n    ]\n}\n</script></div>\n<h2><a class=\"anchor\" name=\"%E8%8E%B7%E5%8F%96%E6%9B%B4%E5%A4%9A%E9%80%89%E9%A1%B9%E4%BF%A1%E6%81%AF\" href=\"#%E8%8E%B7%E5%8F%96%E6%9B%B4%E5%A4%9A%E9%80%89%E9%A1%B9%E4%BF%A1%E6%81%AF\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>获取更多选项信息</h2><p>表单项值默认格式是编码（即 <code>code</code>），如果你想要详细点的信息，可以把 <code>extractValue</code> 设置成 <code>false</code>。</p>\n<div class=\"amis-preview\" style=\"height: 600px\"><script type=\"text/schema\" height=\"600\" scope=\"body\">{\n    \"type\": \"form\",\n    \"debug\": true,\n    \"api\": \"https://houtai.baidu.com/api/mock2/form/saveForm\",\n    \"controls\": [\n        {\n            \"name\": \"city\",\n            \"type\": \"city\",\n            \"label\": \"城市\",\n            \"extractValue\": false\n        }\n    ]\n}\n</script></div>\n<h2><a class=\"anchor\" name=\"%E5%B1%9E%E6%80%A7%E8%A1%A8\" href=\"#%E5%B1%9E%E6%80%A7%E8%A1%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>属性表</h2><p>当做选择器表单项使用时，除了支持 <a href=\"./formitem#%E5%B1%9E%E6%80%A7%E8%A1%A8\">普通表单项属性表</a> 中的配置以外，还支持下面一些配置</p>\n<table>\n<thead>\n<tr>\n<th>属性名</th>\n<th>类型</th>\n<th>默认值</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>allowCity</td>\n<td><code>boolean</code></td>\n<td><code>true</code></td>\n<td>允许选择城市</td>\n</tr>\n<tr>\n<td>allowDistrict</td>\n<td><code>boolean</code></td>\n<td><code>true</code></td>\n<td>允许选择区域</td>\n</tr>\n<tr>\n<td>searchable</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td>是否出搜索框</td>\n</tr>\n<tr>\n<td>extractValue</td>\n<td><code>boolean</code></td>\n<td><code>true</code></td>\n<td>默认 <code>true</code> 是否抽取值，如果设置成 <code>false</code> 值格式会变成对象，包含 <code>code</code>、<code>province</code>、<code>city</code> 和 <code>district</code> 文字信息。</td>\n</tr>\n</tbody></table>\n",
    "toc": {
      "label": "目录",
      "type": "toc",
      "children": [
        {
          "label": "基本用法",
          "fragment": "%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95",
          "fullPath": "#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95",
          "level": 2
        },
        {
          "label": "配置选择级别",
          "fragment": "%E9%85%8D%E7%BD%AE%E9%80%89%E6%8B%A9%E7%BA%A7%E5%88%AB",
          "fullPath": "#%E9%85%8D%E7%BD%AE%E9%80%89%E6%8B%A9%E7%BA%A7%E5%88%AB",
          "level": 2
        },
        {
          "label": "获取更多选项信息",
          "fragment": "%E8%8E%B7%E5%8F%96%E6%9B%B4%E5%A4%9A%E9%80%89%E9%A1%B9%E4%BF%A1%E6%81%AF",
          "fullPath": "#%E8%8E%B7%E5%8F%96%E6%9B%B4%E5%A4%9A%E9%80%89%E9%A1%B9%E4%BF%A1%E6%81%AF",
          "level": 2
        },
        {
          "label": "属性表",
          "fragment": "%E5%B1%9E%E6%80%A7%E8%A1%A8",
          "fullPath": "#%E5%B1%9E%E6%80%A7%E8%A1%A8",
          "level": 2
        }
      ],
      "level": 0
    }
  };

});
