const { Namespace } = require('socket.io');
const NameSpace = require('../classes/Namespace')
const Room = require('../classes/Room');

const swadpiaDepartment = ['전체','IT연구소','개발1팀','개발2팀','개발3팀','인프라운영팀','경영지원팀','인사총무파트','회계파트','시설관리파트','VIP관리팀','VMD팀','홍보팀','고객지원팀','고객지원파트','CS파트','고객지원파트','접수파트','디자인파트','영업파트','구매팀','출고팀','출고(성수)','출고(충무로)','출고(인현동)','출고(배송)','품질관리팀','MD팀','생산관리본부','디지털팀','출력팀','옵셋인쇄팀','후가공1팀','후가공2팀','제작관리팀','프로젝트팀','감사']
const adpiamallDepartment = ['전체' , '운영관리본부' , '생산관리팀' , '구매지원파트' , '접수파트' , '보드파트' , '실사출력A파트' , '실사출력B파트' , '아크릴파트']
const foodmallDepartment = ['전체' , '조리팀' , '딜리버리' , 'F&B' , '뷔페' , '식음서비스' , '아뜰리에' , '성원정' , '성원레스토랑' , '프론트' , '지원팀' , '스시노칸도' , '컨시어지' , '총괄']

// 네임스페이스 - 룸
// 성원애드피아 - (전체 / IT연구소 / 개발1팀 / 개발2팀 / 개발3팀 / 인프라운영팀 / 경영지원팀 / 인사총무파트 / 회계파트/ 시설관리파트 / VIP관리팀 / VMD팀 / 홍보팀 / 고객지원팀 / 고객지원파트 / CS파트 / 고객지원파트 / 접수파트 / 디자인파트 / 영업파트 / 구매팀 / 출고팀 / 출고(성수) / 출고(충무로) / 출고(인현동) / 출고(배송) / 품질관리팀 / MD팀 / 생산관리본부 / 디지털팀 / 출력팀 / 옵셋인쇄팀 / 후가공1팀 / 후가공2팀 / 제작관리팀 / 프로젝트팀 / 감사)
// 애드피아몰 - (전체 / 운영관리본부 / 생산관리팀 / 구매지원파트 / 접수파트 / 보드파트 / 실사출력A파트 / 실사출력B파트 / 아크릴파트)
// 성원푸드몰 - (전체 / 조리팀 / 딜리버리 / F&B / 뷔페 / 식음서비스 / 아뜰리에 / 성원정 / 성원레스토랑 / 프론트 / 지원팀 / 스시노칸도 / 컨시어지 / 총괄)

const sungwonNs = new NameSpace(0,'성원애드피아','https://velog.velcdn.com/images/tchaikovsky/post/90751e3c-c24b-4ad6-bd32-488c00b943ce/image.png','/swadpia');
const adpiamallNs = new NameSpace(0,'애드피아몰','https://velog.velcdn.com/images/tchaikovsky/post/53357d16-6df0-4b50-adff-587edd958aee/image.png','/adpiamall');
const foodmallNs = new NameSpace(0,'푸드몰','https://velog.velcdn.com/images/tchaikovsky/post/746858b0-9db3-46c6-af21-1665ff38f167/image.png','/foodmall');

swadpiaDepartment.forEach((department,index) => sungwonNs.addRoom(new Room(index,department,0,0)));
adpiamallDepartment.forEach((department,index) => adpiamallNs.addRoom(new Room(index,department,1,0)));
foodmallDepartment.forEach((department,index) => foodmallNs.addRoom(new Room(index,department,2,0)));

const namespaces = [sungwonNs,adpiamallNs,foodmallNs];



module.exports = namespaces;