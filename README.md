# expressDemo
����һ������nodeƽ̨�µ�express��ܵ�demo����������pm2��Ϊ�������Ƶģ�����jade��ģ��������ʵ�֣�����ѧϰ�У���������ָ����зз��

## ����
�״�����
```
ʹ��pm2 start config/pm2/mabingbing.json����
```

## �ṹ
```
build -- ��̬��Դ��ַ
    www
        static
config -- ��Ŀ�����ļ�
    env
    pm2
        mabingbing.json -- ʹ��pm2����Ӧ�õļ�����
logs -- ��־����Ŀ¼
public -- ��̬��ԴĿ¼
server -- �������
run.js -- �����ļ�
app.js
package.json --- ������������
```

### app.js
����initģ�飬����������

### init.js
����expressʵ��;
����jadeģ������;
���þ�̬��Դ��ַbuild;
�����м�����������index��ִ��testģ��;
��󷵻�appʵ����

### server/index.js
ʹ��express·�ɣ�
����index���߷���/getname ���������д�������Ⱦjadeģ�����档

### public/view/index.jade
title��name��Ϊ��Ҫע������ݱ���





