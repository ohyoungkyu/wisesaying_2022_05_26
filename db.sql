#db생성
DROP DATABASE IF EXISTS wise_saying;
CREATE DATABASE wise_saying;
USE wise_saying;

#테이블 생성
CREATE TABLE wise_saying (
    id INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
    reg_date DATETIME NOT NULL,
    content VARCHAR(200) NOT NULL,
    author VARCHAR(50) NOT NULL,
    hit_Count INT UNSIGNED NOT NULL DEFAULT 0,
    goodLikeCount INT UNSIGNED NOT NULL DEFAULT 0,
    badLikeCount INT UNSIGNED NOT NULL DEFAULT 0
);

# 데이터 생성
INSERT INTO wise_saying
SET reg_date = NOW(),
content = '나는 산적이다.',
author = '키게로';

INSERT INTO wise_saying
SET reg_date = NOW(),
content = '산다는것 그것은 치열한 전투이다.',
author = '로망로랑';

INSERT INTO wise_saying
SET reg_date = NOW(),
content = '성공의 비결은 단 한 가지, 잘할 수 있는 일에 광적으로 집중하는 것이다.',
author = '톰 모나건';

INSERT INTO wise_saying
SET reg_date = NOW(),
content = '하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다.',
author = '사무엘존슨';

INSERT INTO wise_saying
SET reg_date = NOW(),
content = '좋은 성과를 얻으려면 한 걸음 한 걸음이 힘차고 충실하지 않으면 안 된다.',
author = '단테';

INSERT INTO wise_saying
SET reg_date = NOW(),
content = '언제나 현재에 집중할수 있다면 행복할것이다.',
author = '파울로 코엘료';

INSERT INTO wise_saying
SET reg_date = NOW(),
content = '피할수 없으면 즐겨라.',
author = '로버트 엘리엇';

INSERT INTO wise_saying
SET reg_date = NOW(),
content = '진정으로 웃으려면 고통을 참아야하며 , 나아가 고통을 즐길 줄 알아야 해',
author = '찰리 채플린';

INSERT INTO wise_saying
SET reg_date = NOW(),
content = '직업에서 행복을 찾아라. 아니면 행복이 무엇인지 절대 모를 것이다.',
author = '엘버트 허버드';

INSERT INTO wise_saying
SET reg_date = NOW(),
content = '신은 용기있는자를 결코 버리지 않는다.',
author = '켄러';


SELECT * FROM wise_saying;