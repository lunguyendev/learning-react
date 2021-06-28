# Note:

* Deploy auto with Vercel
* Khi chuyển đổi từ JSX sang JS thì nó sẽ dùng babel để convert. 
  (React.createElement)
* Khi làm việc với object hoặc array phải luôn tạo ra clone ra một biến mới. Dựa vào những thuộc tính cũ để thay đổi.
* Array destructoring

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

**7. Life cycles** (Chỉ áp dụng với Class Component)

  ![life-cycles](https://completejavascript.com/static/b0603dba6cc7f524cdfaf2671184a61c/7c811/react-lifecycle-diagram.png)

* Về việc sử dụng component: Khuyên sử dụng PureComponent hơn là Component (`extends`) vì nó sẽ kiểm tra sự thay đổi của props và state trước khi render lại component.

* **Constructor**
  * Khai báo state
  * Định nghĩa properties của component
  * Nhớ phải khai báo `super(props)`
  ```js
    class App extends PureComponent {
      construtor(props) {
        super(props)

        this.DEFAULT_MAX_LENGTH = 10;
        this.state = {
          productList: []
        };
      }
    }
  ```
* **componentDidMount()** (Chỉ run đúng 1 lần)
  * Được phép dùng
  * Khởi tạo dữ liệu cho component: gọi API, biến đổi dữ liệu, cập nhật state
  * Gửi tracking page view (GA, FacebookPixel,..)
  * Thứ tự chạy: `constructor()` -> `render()` -> `componentDidMount()`
* **componentWillUnmount()** (Chỉ run đúng 1 lần)
  * Được phép dùng
  * Clear timeout hoặc interval nếu có dùng.
  * Reset dữ liệu trên redux nếu cần thiết
* **componentDidUpdate** (Diễn ra từ 0 cho đến n lần)
  * Cực kì hạn chế dùng
  * ADVANCED chỉ dùng nếu muốn handle update component khi click nút back mà trên URL có query params
* Lỗi **Can't setState() on ummounted component**. Sử dụng 1 flag để check ComponentMounted hay chưa. Khởi tạo ban đầu bằng `false`, trong componentDidMount sẽ bằng `true`, trong componentWillUnmount sẽ bằng `flase`

**8. React Hook**
* Ra đời nhằm mục đích hỗ trợ cho cho functional component trở nên powerfull hơn. Làm cho FC có thể sử dụng với lifecycles và states.
* setState sử dụng `merging` còn useState sử dụng `replacing`
* **useEffect**
  * Side effects
    * Gọi API lấy dữ liệu
    * Tương tác với DOM
    * Subscriptions
    * setTimeout, setInterval
    * Có hai loại side effects: cần cleanup và không cần cleaup(API, DOM)
  * Thực thi sau mỗi lần render.
  * Là một hook cơ bản trong React hooks.
  * Mỗi hook gồm 2 phần: side effect và clean up(optinal)
  * Những lần render tiếp theo phụ thuộc vào dependencies
  ``` js
    function useEffect(callback, dependencies) {}

    function App() {
      // executed before each render
      const [color, setColor] = useState('deeppink');
      // executed after each render
      useEffect(() => {
        // do your side effect here ...
        return () => {
          // Clean up here ...
          // Executed before the next render or unmount
          };
      }, []);
      // rendering
      return <h1>Learn Frontend</h1>;
    }

    // Step
    MOUNTING
    - rendering
    - run useEffect()
    UPDATING
    - rendering
    - run `useEffect() cleanup` nêu dependencies thay đổi.
    - run `useEffect()` nếu dependencies thay đôi.
    UNMOUNTING
    - run `useEffect() cleanup`.
  ```
  * Sử dụng useEffect kèm điều kiện
  ```js
    function App() {
      const [filters, setFilters] = useState();

      useEffect(() => {
        // EVERY
        // No dependencies defined
        // Always execute after every render
        return () => {
          // Execute before the next effect or unmount.
        };
      });

      useEffect(() => {
        // ONCE
        // Empty dependencies
        // Only execute once after the FIRST RENDER
        return () => {
          // Execute once when unmount
        };
      }, []);

      useEffect(() => {
        // On demand
        // Has dependencies
        // Only execute after the first RENDER or filters state changes
        return () => {
          // Execute before the next effect or unmount.
        };
      }, [filters]);
    }
  ```
* **Custom hook**
 * Là một hook do mình tự định nghĩa ra.
 * Custom hook là một function hơi đặc biệt.
 * Cách đặt tên: bắt đầu bằng `use` (useClock, useColor,...)
 * Tách riêng biệt phần logic ra khỏi phần UI
 * Chia sẻ logic giữa các Component