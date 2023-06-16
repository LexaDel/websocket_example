import { getExcludedTime } from "../../../utils/dates";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, DatePicker, Select, TimePicker } from "antd";
import { PureComponent } from "react";
import { PropTypes } from 'prop-types';
import memoize from 'memoize-one';
import dayjs from 'dayjs';
import localeData from 'dayjs/plugin/localeData';
import weekday from 'dayjs/plugin/weekday';


dayjs.extend(weekday);
dayjs.extend(localeData);

class WorktimeItem extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            selectDates: [
                dayjs().hour(0).minute(0).second(0),
                dayjs().hour(0).minute(0).second(0),
            ],
        };
    }

    handleRemove = () => {
        const { handleRemove, item } = this.props;

        handleRemove(item.id);
    }
    
    disableWorktime = () => {
        const workTime = [8,20];
        return getExcludedTime(workTime);
    }

    disabledMinutes = () => {
        const result = [];
        for (let i = 0; i < 60; i++) {
            if (i % 10 !== 0) {
                result.push(i);
            }
        }
        
        return result;
    }

    getIntervalOptions = memoize((intervals) => intervals.map((interval) => ({
        label: interval,
        value: interval,
    })));

    handleTimePickerChange = (time) => {
        const { item, handleChange } = this.props;

        handleChange(item.id, {
            startTime: time[0],
            endTime: time[1]
        });

        this.setState({
            selectDates: time
        })
    }

    handleDatePickerChange = (date) => {
        this.setState({
            selectDates: [date, date],
        })
   
    }

    handleSelectChange = (value) => {
        const { item, handleChange } = this.props;

        handleChange(item.id, {
            interval: value,
        });     
    }

    render() {
        const { 
            handleAdd,
            isLastItem,
            intervals,
        } = this.props;
        const { selectDates } = this.state;

        const intervalOptions = this.getIntervalOptions(intervals);

        return (
            <>
                <DatePicker
                    format="YYYY-MM-DD"
                    value={selectDates[0]}
                    onChange={this.handleDatePickerChange}
                />
                <TimePicker.RangePicker
                    format="HH:mm"
                    value={selectDates}
                    disabledTime={() => ({
                        disabledHours: this.disableWorktime,
                        disabledMinutes: this.disabledMinutes,
                    })}
                    showTime={{
                        hideDisabledOptions: true,
                    }}
                    onCalendarChange={this.handleTimePickerChange}
                />
                <Select 
                    options={intervalOptions}
                    style={{ width: 70 }}
                    onChange={this.handleSelectChange}
                />        
                {isLastItem 
                    ? <Button onClick={handleAdd} icon={<PlusOutlined />} />
                    : <Button onClick={this.handleRemove} icon={<MinusOutlined />} />
                }
            </>

        );
    }
}

WorktimeItem.propTypes = {
    item: PropTypes.shape().isRequired,
    isLastItem: PropTypes.bool,
    handleAdd: PropTypes.func.isRequired,
    handleRemove: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    intervals: PropTypes.arrayOf(PropTypes.number),
};

WorktimeItem.defaultProps = {
    isLastItem: false,
};

export default WorktimeItem;
