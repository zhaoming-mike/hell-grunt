module.exports = function (grunt) {
  // ��Ŀ����
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.file %>.js <%= grunt.template.today("yyyy-mm-dd") %> */\n',
		//beautify:true,
		//mangle:false,
		//compress:true
      },
      /*build: {
        src: 'src/<%=pkg.file %>.js',
        dest: 'dest/<%= pkg.file %>.min.js'
      }*/
	  app_task:{
		  files:{
			  'dest/<%= pkg.file %>.min.js':['src/mike-grunt-demo-js-1.js','src/mike-grunt-demo-js-2.js']
		  }
	  }
    }
  });
  // �����ṩ"uglify"����Ĳ��
  grunt.loadNpmTasks('grunt-contrib-uglify');
  // Ĭ������
  grunt.registerTask('default', ['uglify']);
}