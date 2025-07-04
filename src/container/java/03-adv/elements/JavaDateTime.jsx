import React from 'react'

function JavaDateTime() {
  return (
    <div>
      <h1>java.time package</h1>
  <h2>java.time, java.time.chrono, java.time.temporal, java.time.zone</h2>
<section>
  <h2>LocalDateTime</h2>
  <p>LocalDate.of(2022, 12,3); LocalTime(22, 10,20);</p>
  <p>LocalDate.ofYearDay(2000, 333); LocalTime.ofSecondOfDay(86400);</p>
  <p>LocalDate.parse("2022-12-3"); LocalTime.parse("22:30:00");</p>
  <p>LocalDate date = localDateTime.toLocalDate();</p>
  <p>LocalTime time = localDateTime.toLocalTime();</p>
</section>
<section>
  <h2>필드값 가져오기</h2>
  <h4>LocalDate</h4>
  <h5>int getYear(); int getMonthValue(); Month getMonth(); int getDayOfYear();</h5>
  <pre>int minute = now.getMinute() OR now.get(ChronoField.MINUTE_OF_HOUR);</pre>
  <h5>DayOfWeek getDayOfWeek(); int lengthOfMonth(); int lengthOfYear(); boolean isLeapYear();</h5>
  <h4>LocalTime</h4>
  <h5>int getHour(); int getMinute(); int getSecond(); int getNano();</h5>
  <h4>int get(TemporalField field); long getLong(TemporalField field);</h4>
  <h5>dateTime.get(ChronoField.ERA);</h5>
  <h5>YEAR, MONTH_OF_YEAR, HOUR_OF_DAY, MILLI_OF-DAY, MINUTE_OF_DAY, ... 많음 </h5>
</section>
  <section>
    <h2>with(), plus(), minus()</h2>
    <p>LocalDate with(TemporalField field, long newValue);</p>
    <p>LocalTime plus(TemporalAmount amountToAdd);</p>
    <p>LocalTime plus(long amountToAdd, TemporalUnit unit);</p>
    <p>LocalDate plus(TemporalAmount amountToAdd);</p>
    <p>LocalDate plus(long amountToAdd, TemporalUnit unit);</p>
    <p>LocalDate tomorrow = today.plusDays(1, ChronoUnit.DAYS);</p>
    <p>LocalDate tomorrow = today.plusDays(1);</p>
  </section>
  <section>
    <h2>date1.isAfter(date); isBefore, isEqual</h2>
    <h2>Instant : 에포크 타임부터 경과된 시간을 표현</h2>
    <h3>Instant now2 = now.getEpochSecond(); now.getNano();</h3>
    <h2>int result = date1.compareTo(date2)</h2>
  </section>
  <section>
    <h2>TemporalAdjusters</h2>
    <pre>LocalDate nextMonday = today.with(TemporalAdjusters.next(DayOfWeek.MONDAY));</pre>
    <h3>firstDayOfNexYear(); firstDAyOfNextMonth(); firstDayOfYear(); firstDayOfMonth();</h3>
    <h3>firstInMonth(DayOfWeek dayOfWeek); lastInMonth(DayOfWeek dayOfWeek);</h3>
    <h3>previous(DayOfWeek dayOfWeek); previousOrSame(DayOfWeek dayOfWeek);</h3>
    <h3>next(DayOfWeek dayOfWeek); nextOrSame(DayOfWeek dayOfWeek);</h3>
  </section>
  <section>
    <h2>ZonedDateTime</h2>
    <pre>{`ZoneId zid = ZoneId.of("Asia/Seoul");
  ZoneDateTime zdt = dateTime.atZone(zid);`}</pre>
    <h2>ZoneOffset, OffsetDateTime</h2>
    <pre>{`ZoneOffset krOffset = ZonedDateTime.now().getOffset();
    int krOffsetInSec = krOffset.get(ChronoField.OFFSET_SECONDS);`}</pre>
  </section>
  <section>
    <h2>Period, Duration</h2>
    <pre>{` Duration du = Duration.between(t1, t2);
  Period pe = today.until(myBirthDay);
  long dday = today.until(myBirthDay, ChronoUnit.DAYS);`}</pre>
  </section>
  <section>
    <h2>formatting</h2>
    <pre>LocalDate date = LocalDate.of(2024,12,3);
    String YYYYmmdd = date.format(DateTimeFormatter.ISO_LOCAL_DATE);</pre>
    <pre>LocalDate date = LocalDate.parse("2024.12.3", DateTimeFormatter.ISO_LOCAL_DATE);</pre>
  <pre>ISO_DATE_TIME, ISO_LOCAL_DATE, ISO_LOCAL_TIME, KSO_OFFSET_DATE, ISO_OFFSET_TIME
  ISO_INSTANT, BASIC_ISO_DATE, ISO_DATE, ISO_TIME, ISO_ORDINAL_DATE,ISO_WEEK_DATE
  RFC_1123_DATE_TIME</pre>
    <h3>DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss")</h3>
    <h3>LocalDateTime date = LocalDateTime.parse("2022-12-11 23:22:22", formatter)</h3>
    <pre>y;년도, M;월, Q;분기, D;일, E:요일, a;오전/오후,<br/>
      H;시간, h;시간, m;분, s;초, S;밀리초, n;나노초, z; zone name, Z;zone-offset</pre>
  </section>
  <section>
    <h2>locale에 종속된 형식화</h2>
    <pre>DateTimeFormatter formatter = DateTimeFormatter.ofLocalizedDate(FormatStyle.SHORT);</pre>
    <h3>FULL, LONG, MEDIUM, SHORT</h3>
    <pre>String shortFormat = formatter.format(LocalDate.now());</pre>
  </section>
    </div>
  )
}

export default JavaDateTime
