import { Table, Input, Button, Space, Typography } from 'antd';
import React, { Component } from 'react';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
const { Text } = Typography;

class Tabels extends React.Component {
  state = {
    searchText: '',
    searchedColumn: '',
  };
  getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              this.setState({
                searchText: selectedKeys[0],
                searchedColumn: dataIndex,
              });
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
        : '',
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => this.searchInput.select(), 100);
      }
    },
    render: text => {
      this.state.searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: 'blue', padding: 0 }}
          searchWords={[this.state.searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      )
    }
  });

  handleSearch = (selectedKeys, confirm, dataIndex) => {
    console.log(dataIndex)
    confirm();
    this.setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    });
    console.log(selectedKeys[0])
  };

  handleReset = clearFilters => {
    clearFilters();
    this.setState({ searchText: null });
  };

  render() {
    const columns = [
      {
        title: 'Class Name',
        dataIndex: 'name',
        key: 'name',
        width: '35%',
        fixed: 'left',
        ...this.getColumnSearchProps('name'),

        render: (text, record, dataIndex) => (
          <span key={record.token.toString()}>
            {
              this.state.searchedColumn === dataIndex ? (
                <Highlighter
                  highlightStyle={{ backgroundColor: 'blue', padding: 0 }}
                  searchWords={[this.state.searchText]}
                  autoEscape
                  textToHighlight={text ? text.toString() : ''}
                />
              ) : (
                text
              )
            }
            <br />
            <Text className='d-sm-none d-md-block d-none p-0 m-0 text-muted' >{record.meetingId}</Text>
          </span>
        )
      },
      {
        title: 'Start Date',
        dataIndex: 'createdOn',
        key: 'createdOn',
        sorter: (a, b) => new Date(b.createdOn) - new Date(a.createdOn),
        sortDirections: ['descend'],
        render: (text) => (
          <Space size="middle" key={text.toString()}>
            {new Date(text).toLocaleString()}
          </Space>
        )
      },
      {
        title: 'End Date',
        dataIndex: 'endedOn',
        key: 'endedOn',
        render: (text) => (
          <Space size="middle" key={text.toString()}>
            {new Date(text).toLocaleString()}
          </Space>
        )
      },
      {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
          <Space size="middle" key={record.token.toString()}>
            <a href={`/learning-analytics-dashboard/?meeting=${record.meetingId}&report=${record.token}`}>Analytics</a>
            <a href={`/playback/presentation/2.3/${record.meetingId}`}>Recording</a>
          </Space>
        )
      },
    ];
    return <Table rowKey="token" columns={columns} dataSource={this.props.data} scroll={{ y: 500 }} />;
  }
}

export default Tabels