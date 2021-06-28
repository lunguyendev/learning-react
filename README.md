# Note:

* Deploy auto with Vercel
* Khi chuyển đổi từ JSX sang JS thì nó sẽ dùng babel để convert. 
  (React.createElement)
* Khi làm việc với object hoặc array phải luôn tạo ra clone ra một biến mới. Dựa vào những thuộc tính cũ để thay đổi.

# Contents:

**1. ReactDOM.render**
* Thường sử dụng 1 lần, dùng để render(App hoặc html) vào root trong `src/index`


**2. Component**

Component giống như chia bố cục cho một trang. VD: 1 trang web có 1 component cha là App, trong App sẽ có những component Menu, Bar, Content,.... 
* Có 2 loại component:
  
  * Class component
  * Functional component (Recommended)
  * Tìm hiểu Container và Presentational component
* Phân biệt Container component và Presentational component
  * Container component: Quan tâm đến dữ liệu, lấy dữ liệu, truyền xuống presentational component, quản lý nhiều hơn, không biết render
  * Presentational component: Không quan tâm dữ liệu đâu ra, chỉ cần render dữ liệu, quan tâm hiển thị

**3. Props**

* Props: Là dữ liệu truyền từ component cha xuống component con và dữ liệu này sẽ không thay đổi được tại component con. Nếu muốn thay đổi thì phải thay đổi ở component cha. Nhờ props mà tạo được sự đa dạng cho component
* Cách khai báo
  ```js
    //Con
    function ColorBox(props) {
      const { color } = props;
      return (
        <div className="box" style={{ backgroundColor: color }}></div>
      )
    }

    //Cha
    export default function App() {
      return (
        <section>
          <ColorBox color="red"></ColorBox>
          <ColorBox color="green"></ColorBox>
          <ColorBox color="blue"></ColorBox>
        </section>
      );
    }
  ```
* Sử dụng `propTypes` để kiểm tra đúng loại dữ liệu cho props
  ```js
    //Add package prop-type
    import PropTypes from "prop-types";

    //Declare all props used in this component
    ColorBox.propTypes = {
      color: PropTypes.string.isRequired,
      rounded: PropTypes.bool,
    };
    // Declare forget to set default value for non-required props
    ColorBox.defaultProps = {
      rounded: true
    };
  ```
**4. Folder structure**
  ```
  src
  |_ components (Share components between features)
  | |_ Loading
  |   |_ index.jsx
  |   |_ style.scss
  |
  |_ features
  | |_ Todo
  |   |_ components (component of feature Todo)
  |   |_ pases (page of feature Todo)
  |   |_ index.jsx (entry point of feature Todo)
  |
  |_ App.js
  ```
**5. State**
  
* State được tạo ra và quản lý bởi component hiện tại, dùng cho những dữ liệu có khả năng sẽ thay đổi. Nếu props hoạc state thay đổi thì component sẽ được re-render
* Khai báo
  ```js
  function Counter(props){
    const [count, setCount] = useState(0)

    return (
      <div>
        <button onClick={()=> setCount(x => x + 1)}></button> 
      </div>
    )
  }
  ```

**6. Cách sử dụng state và props**
* Truyền dữ liệu từ cha xuống con : Props
* Truyền dữ liệu giữa component ngang hàng : để state trên component cha, rồi từ cha truyền
ngược xuống component con.
* Truyền dữ liệu giữa các trang khác nhau : dùng Redux.

**7. Life cycles**

![life-cycles](https://completejavascript.com/static/b0603dba6cc7f524cdfaf2671184a61c/7c811/react-lifecycle-diagram.png)