import React from "react";

class ErrorBoundry extends React.Component{
    static getDerivedStateFromError(err) {
        return {hasError: true}
        
      }
      // componentDidCatch(error, errorInfo) {
    
      // }

      render(){
        return <h1>Error</h1>
      }
}

export default ErrorBoundry;