Tư duy khi mà xây dựng component trong react: https://react.dev/learn/thinking-in-react
Các kiến thức cơ bản trong react: https://react.dev/learn#components


BTVN buổi 4: 
1. Tìm hiểu state, condition rendering
2. Làm sao để chỉ dùng thẻ Card 1 lần duy nhất trong file App.jsx

BTVN buổi 5: 
Tạo 1 ứng dụng tìm kiếm số điện thoại trong danh bạ với các yêu cầu chứa ít nhất các component sau
1. SearchBar: Một thẻ input dùng để nhập số liệu muốn tìm kiếm và 1 nút bấm để thực hiện tìm kiếm
2. CardContainer: Dùng để chứa các Card 
3. Card: Chứa thông tin, số điện thoại 
4. SummaryContact: Hiển thị tổng số liên lạc hiện có
* Yêu cầu: 
    Cần tạo 1 danh sách số điện thoại trước (gợi ý dùng mang)
    Có chức năng xóa 1 liên hệ
    Khi load lại trang k bị mất dữ liệu
    Có thể thêm 1 liên hệ mới vào danh sách* (có thể sử dụng modal của thư viện)

Giao diện tham khảo:, em chỉnh sửa để phù hợp đề bài nhé
https://www.figma.com/file/bViv9Qm5cpB3VmW1Sf9wd4/Contacts-Search-Template-(Community)-(Community)-(Community)?type=design&node-id=10-216&mode=design&t=NdCi6EOCz8o33M7N-0




/*
1. Phân chia ứng dụng thành các component nào
    1.1. Component nào được sử dụng nhiều lần ở nhiều nơi
    1.2. Component nào chứa các chức năng phức tạp
2. Xác định state cho component
    2.1. State riêng biệt cho các component 
    2.2. State được sử dụng chung bởi nhiều component (đẩy dữ liệu dùng chung lên cho thằng cha)
    2.3. Dữ liệu dùng toàn hệ thống có thể đẩy lên App
3. Xác định props cần truyền
    3.1. Component con cần dữ liệu nào từ thằng cha 
*/