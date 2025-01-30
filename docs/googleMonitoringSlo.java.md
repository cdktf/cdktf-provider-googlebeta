# `googleMonitoringSlo` Submodule <a name="`googleMonitoringSlo` Submodule" id="@cdktf/provider-google-beta.googleMonitoringSlo"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleMonitoringSlo <a name="GoogleMonitoringSlo" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_slo google_monitoring_slo}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_monitoring_slo.GoogleMonitoringSlo;

GoogleMonitoringSlo.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .goal(java.lang.Number)
    .service(java.lang.String)
//  .basicSli(GoogleMonitoringSloBasicSli)
//  .calendarPeriod(java.lang.String)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .requestBasedSli(GoogleMonitoringSloRequestBasedSli)
//  .rollingPeriodDays(java.lang.Number)
//  .sloId(java.lang.String)
//  .timeouts(GoogleMonitoringSloTimeouts)
//  .userLabels(java.util.Map<java.lang.String, java.lang.String>)
//  .windowsBasedSli(GoogleMonitoringSloWindowsBasedSli)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.Initializer.parameter.goal">goal</a></code> | <code>java.lang.Number</code> | The fraction of service that must be good in order for this objective to be met. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.Initializer.parameter.service">service</a></code> | <code>java.lang.String</code> | ID of the service to which this SLO belongs. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.Initializer.parameter.basicSli">basicSli</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSli">GoogleMonitoringSloBasicSli</a></code> | basic_sli block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.Initializer.parameter.calendarPeriod">calendarPeriod</a></code> | <code>java.lang.String</code> | A calendar period, semantically "since the start of the current <calendarPeriod>". Possible values: ["DAY", "WEEK", "FORTNIGHT", "MONTH"]. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Name used for UI elements listing this SLO. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_slo#id GoogleMonitoringSlo#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_slo#project GoogleMonitoringSlo#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.Initializer.parameter.requestBasedSli">requestBasedSli</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSli">GoogleMonitoringSloRequestBasedSli</a></code> | request_based_sli block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.Initializer.parameter.rollingPeriodDays">rollingPeriodDays</a></code> | <code>java.lang.Number</code> | A rolling time period, semantically "in the past X days". Must be between 1 to 30 days, inclusive. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.Initializer.parameter.sloId">sloId</a></code> | <code>java.lang.String</code> | The id to use for this ServiceLevelObjective. If omitted, an id will be generated instead. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeouts">GoogleMonitoringSloTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.Initializer.parameter.userLabels">userLabels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | This field is intended to be used for organizing and identifying the AlertPolicy objects.The field can contain up to 64 entries. Each key and value is limited to 63 Unicode characters or 128 bytes, whichever is smaller. Labels and values can contain only lowercase letters, numerals, underscores, and dashes. Keys must begin with a letter. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.Initializer.parameter.windowsBasedSli">windowsBasedSli</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSli">GoogleMonitoringSloWindowsBasedSli</a></code> | windows_based_sli block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `goal`<sup>Required</sup> <a name="goal" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.Initializer.parameter.goal"></a>

- *Type:* java.lang.Number

The fraction of service that must be good in order for this objective to be met.

0 < goal <= 0.999

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_slo#goal GoogleMonitoringSlo#goal}

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.Initializer.parameter.service"></a>

- *Type:* java.lang.String

ID of the service to which this SLO belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_slo#service GoogleMonitoringSlo#service}

---

##### `basicSli`<sup>Optional</sup> <a name="basicSli" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.Initializer.parameter.basicSli"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSli">GoogleMonitoringSloBasicSli</a>

basic_sli block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_slo#basic_sli GoogleMonitoringSlo#basic_sli}

---

##### `calendarPeriod`<sup>Optional</sup> <a name="calendarPeriod" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.Initializer.parameter.calendarPeriod"></a>

- *Type:* java.lang.String

A calendar period, semantically "since the start of the current <calendarPeriod>". Possible values: ["DAY", "WEEK", "FORTNIGHT", "MONTH"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_slo#calendar_period GoogleMonitoringSlo#calendar_period}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Name used for UI elements listing this SLO.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_slo#display_name GoogleMonitoringSlo#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_slo#id GoogleMonitoringSlo#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_slo#project GoogleMonitoringSlo#project}.

---

##### `requestBasedSli`<sup>Optional</sup> <a name="requestBasedSli" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.Initializer.parameter.requestBasedSli"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSli">GoogleMonitoringSloRequestBasedSli</a>

request_based_sli block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_slo#request_based_sli GoogleMonitoringSlo#request_based_sli}

---

##### `rollingPeriodDays`<sup>Optional</sup> <a name="rollingPeriodDays" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.Initializer.parameter.rollingPeriodDays"></a>

- *Type:* java.lang.Number

A rolling time period, semantically "in the past X days". Must be between 1 to 30 days, inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_slo#rolling_period_days GoogleMonitoringSlo#rolling_period_days}

---

##### `sloId`<sup>Optional</sup> <a name="sloId" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.Initializer.parameter.sloId"></a>

- *Type:* java.lang.String

The id to use for this ServiceLevelObjective. If omitted, an id will be generated instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_slo#slo_id GoogleMonitoringSlo#slo_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeouts">GoogleMonitoringSloTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_slo#timeouts GoogleMonitoringSlo#timeouts}

---

##### `userLabels`<sup>Optional</sup> <a name="userLabels" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.Initializer.parameter.userLabels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

This field is intended to be used for organizing and identifying the AlertPolicy objects.The field can contain up to 64 entries. Each key and value is limited to 63 Unicode characters or 128 bytes, whichever is smaller. Labels and values can contain only lowercase letters, numerals, underscores, and dashes. Keys must begin with a letter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_slo#user_labels GoogleMonitoringSlo#user_labels}

---

##### `windowsBasedSli`<sup>Optional</sup> <a name="windowsBasedSli" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.Initializer.parameter.windowsBasedSli"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSli">GoogleMonitoringSloWindowsBasedSli</a>

windows_based_sli block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_slo#windows_based_sli GoogleMonitoringSlo#windows_based_sli}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.putBasicSli">putBasicSli</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.putRequestBasedSli">putRequestBasedSli</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.putWindowsBasedSli">putWindowsBasedSli</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.resetBasicSli">resetBasicSli</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.resetCalendarPeriod">resetCalendarPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.resetRequestBasedSli">resetRequestBasedSli</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.resetRollingPeriodDays">resetRollingPeriodDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.resetSloId">resetSloId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.resetUserLabels">resetUserLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.resetWindowsBasedSli">resetWindowsBasedSli</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBasicSli` <a name="putBasicSli" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.putBasicSli"></a>

```java
public void putBasicSli(GoogleMonitoringSloBasicSli value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.putBasicSli.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSli">GoogleMonitoringSloBasicSli</a>

---

##### `putRequestBasedSli` <a name="putRequestBasedSli" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.putRequestBasedSli"></a>

```java
public void putRequestBasedSli(GoogleMonitoringSloRequestBasedSli value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.putRequestBasedSli.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSli">GoogleMonitoringSloRequestBasedSli</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.putTimeouts"></a>

```java
public void putTimeouts(GoogleMonitoringSloTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeouts">GoogleMonitoringSloTimeouts</a>

---

##### `putWindowsBasedSli` <a name="putWindowsBasedSli" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.putWindowsBasedSli"></a>

```java
public void putWindowsBasedSli(GoogleMonitoringSloWindowsBasedSli value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.putWindowsBasedSli.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSli">GoogleMonitoringSloWindowsBasedSli</a>

---

##### `resetBasicSli` <a name="resetBasicSli" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.resetBasicSli"></a>

```java
public void resetBasicSli()
```

##### `resetCalendarPeriod` <a name="resetCalendarPeriod" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.resetCalendarPeriod"></a>

```java
public void resetCalendarPeriod()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.resetProject"></a>

```java
public void resetProject()
```

##### `resetRequestBasedSli` <a name="resetRequestBasedSli" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.resetRequestBasedSli"></a>

```java
public void resetRequestBasedSli()
```

##### `resetRollingPeriodDays` <a name="resetRollingPeriodDays" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.resetRollingPeriodDays"></a>

```java
public void resetRollingPeriodDays()
```

##### `resetSloId` <a name="resetSloId" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.resetSloId"></a>

```java
public void resetSloId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetUserLabels` <a name="resetUserLabels" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.resetUserLabels"></a>

```java
public void resetUserLabels()
```

##### `resetWindowsBasedSli` <a name="resetWindowsBasedSli" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.resetWindowsBasedSli"></a>

```java
public void resetWindowsBasedSli()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleMonitoringSlo resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_monitoring_slo.GoogleMonitoringSlo;

GoogleMonitoringSlo.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_monitoring_slo.GoogleMonitoringSlo;

GoogleMonitoringSlo.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_monitoring_slo.GoogleMonitoringSlo;

GoogleMonitoringSlo.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_monitoring_slo.GoogleMonitoringSlo;

GoogleMonitoringSlo.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleMonitoringSlo.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleMonitoringSlo resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleMonitoringSlo to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleMonitoringSlo that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_slo#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleMonitoringSlo to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.basicSli">basicSli</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference">GoogleMonitoringSloBasicSliOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.requestBasedSli">requestBasedSli</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference">GoogleMonitoringSloRequestBasedSliOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference">GoogleMonitoringSloTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.windowsBasedSli">windowsBasedSli</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference">GoogleMonitoringSloWindowsBasedSliOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.basicSliInput">basicSliInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSli">GoogleMonitoringSloBasicSli</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.calendarPeriodInput">calendarPeriodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.goalInput">goalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.requestBasedSliInput">requestBasedSliInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSli">GoogleMonitoringSloRequestBasedSli</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.rollingPeriodDaysInput">rollingPeriodDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.serviceInput">serviceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.sloIdInput">sloIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeouts">GoogleMonitoringSloTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.userLabelsInput">userLabelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.windowsBasedSliInput">windowsBasedSliInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSli">GoogleMonitoringSloWindowsBasedSli</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.calendarPeriod">calendarPeriod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.goal">goal</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.rollingPeriodDays">rollingPeriodDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.service">service</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.sloId">sloId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.userLabels">userLabels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `basicSli`<sup>Required</sup> <a name="basicSli" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.basicSli"></a>

```java
public GoogleMonitoringSloBasicSliOutputReference getBasicSli();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference">GoogleMonitoringSloBasicSliOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `requestBasedSli`<sup>Required</sup> <a name="requestBasedSli" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.requestBasedSli"></a>

```java
public GoogleMonitoringSloRequestBasedSliOutputReference getRequestBasedSli();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference">GoogleMonitoringSloRequestBasedSliOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.timeouts"></a>

```java
public GoogleMonitoringSloTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference">GoogleMonitoringSloTimeoutsOutputReference</a>

---

##### `windowsBasedSli`<sup>Required</sup> <a name="windowsBasedSli" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.windowsBasedSli"></a>

```java
public GoogleMonitoringSloWindowsBasedSliOutputReference getWindowsBasedSli();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference">GoogleMonitoringSloWindowsBasedSliOutputReference</a>

---

##### `basicSliInput`<sup>Optional</sup> <a name="basicSliInput" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.basicSliInput"></a>

```java
public GoogleMonitoringSloBasicSli getBasicSliInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSli">GoogleMonitoringSloBasicSli</a>

---

##### `calendarPeriodInput`<sup>Optional</sup> <a name="calendarPeriodInput" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.calendarPeriodInput"></a>

```java
public java.lang.String getCalendarPeriodInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `goalInput`<sup>Optional</sup> <a name="goalInput" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.goalInput"></a>

```java
public java.lang.Number getGoalInput();
```

- *Type:* java.lang.Number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `requestBasedSliInput`<sup>Optional</sup> <a name="requestBasedSliInput" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.requestBasedSliInput"></a>

```java
public GoogleMonitoringSloRequestBasedSli getRequestBasedSliInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSli">GoogleMonitoringSloRequestBasedSli</a>

---

##### `rollingPeriodDaysInput`<sup>Optional</sup> <a name="rollingPeriodDaysInput" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.rollingPeriodDaysInput"></a>

```java
public java.lang.Number getRollingPeriodDaysInput();
```

- *Type:* java.lang.Number

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.serviceInput"></a>

```java
public java.lang.String getServiceInput();
```

- *Type:* java.lang.String

---

##### `sloIdInput`<sup>Optional</sup> <a name="sloIdInput" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.sloIdInput"></a>

```java
public java.lang.String getSloIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeouts">GoogleMonitoringSloTimeouts</a>

---

##### `userLabelsInput`<sup>Optional</sup> <a name="userLabelsInput" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.userLabelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getUserLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `windowsBasedSliInput`<sup>Optional</sup> <a name="windowsBasedSliInput" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.windowsBasedSliInput"></a>

```java
public GoogleMonitoringSloWindowsBasedSli getWindowsBasedSliInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSli">GoogleMonitoringSloWindowsBasedSli</a>

---

##### `calendarPeriod`<sup>Required</sup> <a name="calendarPeriod" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.calendarPeriod"></a>

```java
public java.lang.String getCalendarPeriod();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `goal`<sup>Required</sup> <a name="goal" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.goal"></a>

```java
public java.lang.Number getGoal();
```

- *Type:* java.lang.Number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `rollingPeriodDays`<sup>Required</sup> <a name="rollingPeriodDays" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.rollingPeriodDays"></a>

```java
public java.lang.Number getRollingPeriodDays();
```

- *Type:* java.lang.Number

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

---

##### `sloId`<sup>Required</sup> <a name="sloId" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.sloId"></a>

```java
public java.lang.String getSloId();
```

- *Type:* java.lang.String

---

##### `userLabels`<sup>Required</sup> <a name="userLabels" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.userLabels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getUserLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSlo.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleMonitoringSloBasicSli <a name="GoogleMonitoringSloBasicSli" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSli"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSli.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_monitoring_slo.GoogleMonitoringSloBasicSli;

GoogleMonitoringSloBasicSli.builder()
//  .availability(GoogleMonitoringSloBasicSliAvailability)
//  .latency(GoogleMonitoringSloBasicSliLatency)
//  .location(java.util.List<java.lang.String>)
//  .method(java.util.List<java.lang.String>)
//  .version(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSli.property.availability">availability</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailability">GoogleMonitoringSloBasicSliAvailability</a></code> | availability block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSli.property.latency">latency</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatency">GoogleMonitoringSloBasicSliLatency</a></code> | latency block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSli.property.location">location</a></code> | <code>java.util.List<java.lang.String></code> | An optional set of locations to which this SLI is relevant. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSli.property.method">method</a></code> | <code>java.util.List<java.lang.String></code> | An optional set of RPCs to which this SLI is relevant. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSli.property.version">version</a></code> | <code>java.util.List<java.lang.String></code> | The set of API versions to which this SLI is relevant. |

---

##### `availability`<sup>Optional</sup> <a name="availability" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSli.property.availability"></a>

```java
public GoogleMonitoringSloBasicSliAvailability getAvailability();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailability">GoogleMonitoringSloBasicSliAvailability</a>

availability block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_slo#availability GoogleMonitoringSlo#availability}

---

##### `latency`<sup>Optional</sup> <a name="latency" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSli.property.latency"></a>

```java
public GoogleMonitoringSloBasicSliLatency getLatency();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatency">GoogleMonitoringSloBasicSliLatency</a>

latency block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_slo#latency GoogleMonitoringSlo#latency}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSli.property.location"></a>

```java
public java.util.List<java.lang.String> getLocation();
```

- *Type:* java.util.List<java.lang.String>

An optional set of locations to which this SLI is relevant.

Telemetry from other locations will not be used to calculate
performance for this SLI. If omitted, this SLI applies to all
locations in which the Service has activity. For service types
that don't support breaking down by location, setting this
field will result in an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_slo#location GoogleMonitoringSlo#location}

---

##### `method`<sup>Optional</sup> <a name="method" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSli.property.method"></a>

```java
public java.util.List<java.lang.String> getMethod();
```

- *Type:* java.util.List<java.lang.String>

An optional set of RPCs to which this SLI is relevant.

Telemetry from other methods will not be used to calculate
performance for this SLI. If omitted, this SLI applies to all
the Service's methods. For service types that don't support
breaking down by method, setting this field will result in an
error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_slo#method GoogleMonitoringSlo#method}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSli.property.version"></a>

```java
public java.util.List<java.lang.String> getVersion();
```

- *Type:* java.util.List<java.lang.String>

The set of API versions to which this SLI is relevant.

Telemetry from other API versions will not be used to
calculate performance for this SLI. If omitted,
this SLI applies to all API versions. For service types
that don't support breaking down by version, setting this
field will result in an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_slo#version GoogleMonitoringSlo#version}

---

### GoogleMonitoringSloBasicSliAvailability <a name="GoogleMonitoringSloBasicSliAvailability" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailability"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailability.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_monitoring_slo.GoogleMonitoringSloBasicSliAvailability;

GoogleMonitoringSloBasicSliAvailability.builder()
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailability.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether an availability SLI is enabled or not. Must be set to true. Defaults to 'true'. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailability.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether an availability SLI is enabled or not. Must be set to true. Defaults to 'true'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_slo#enabled GoogleMonitoringSlo#enabled}

---

### GoogleMonitoringSloBasicSliLatency <a name="GoogleMonitoringSloBasicSliLatency" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatency"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatency.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_monitoring_slo.GoogleMonitoringSloBasicSliLatency;

GoogleMonitoringSloBasicSliLatency.builder()
    .threshold(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatency.property.threshold">threshold</a></code> | <code>java.lang.String</code> | A duration string, e.g. 10s. Good service is defined to be the count of requests made to this service that return in no more than threshold. |

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatency.property.threshold"></a>

```java
public java.lang.String getThreshold();
```

- *Type:* java.lang.String

A duration string, e.g. 10s. Good service is defined to be the count of requests made to this service that return in no more than threshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_slo#threshold GoogleMonitoringSlo#threshold}

---

### GoogleMonitoringSloConfig <a name="GoogleMonitoringSloConfig" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_monitoring_slo.GoogleMonitoringSloConfig;

GoogleMonitoringSloConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .goal(java.lang.Number)
    .service(java.lang.String)
//  .basicSli(GoogleMonitoringSloBasicSli)
//  .calendarPeriod(java.lang.String)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .requestBasedSli(GoogleMonitoringSloRequestBasedSli)
//  .rollingPeriodDays(java.lang.Number)
//  .sloId(java.lang.String)
//  .timeouts(GoogleMonitoringSloTimeouts)
//  .userLabels(java.util.Map<java.lang.String, java.lang.String>)
//  .windowsBasedSli(GoogleMonitoringSloWindowsBasedSli)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloConfig.property.goal">goal</a></code> | <code>java.lang.Number</code> | The fraction of service that must be good in order for this objective to be met. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloConfig.property.service">service</a></code> | <code>java.lang.String</code> | ID of the service to which this SLO belongs. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloConfig.property.basicSli">basicSli</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSli">GoogleMonitoringSloBasicSli</a></code> | basic_sli block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloConfig.property.calendarPeriod">calendarPeriod</a></code> | <code>java.lang.String</code> | A calendar period, semantically "since the start of the current <calendarPeriod>". Possible values: ["DAY", "WEEK", "FORTNIGHT", "MONTH"]. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Name used for UI elements listing this SLO. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_slo#id GoogleMonitoringSlo#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_slo#project GoogleMonitoringSlo#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloConfig.property.requestBasedSli">requestBasedSli</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSli">GoogleMonitoringSloRequestBasedSli</a></code> | request_based_sli block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloConfig.property.rollingPeriodDays">rollingPeriodDays</a></code> | <code>java.lang.Number</code> | A rolling time period, semantically "in the past X days". Must be between 1 to 30 days, inclusive. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloConfig.property.sloId">sloId</a></code> | <code>java.lang.String</code> | The id to use for this ServiceLevelObjective. If omitted, an id will be generated instead. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeouts">GoogleMonitoringSloTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloConfig.property.userLabels">userLabels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | This field is intended to be used for organizing and identifying the AlertPolicy objects.The field can contain up to 64 entries. Each key and value is limited to 63 Unicode characters or 128 bytes, whichever is smaller. Labels and values can contain only lowercase letters, numerals, underscores, and dashes. Keys must begin with a letter. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloConfig.property.windowsBasedSli">windowsBasedSli</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSli">GoogleMonitoringSloWindowsBasedSli</a></code> | windows_based_sli block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `goal`<sup>Required</sup> <a name="goal" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloConfig.property.goal"></a>

```java
public java.lang.Number getGoal();
```

- *Type:* java.lang.Number

The fraction of service that must be good in order for this objective to be met.

0 < goal <= 0.999

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_slo#goal GoogleMonitoringSlo#goal}

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloConfig.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

ID of the service to which this SLO belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_slo#service GoogleMonitoringSlo#service}

---

##### `basicSli`<sup>Optional</sup> <a name="basicSli" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloConfig.property.basicSli"></a>

```java
public GoogleMonitoringSloBasicSli getBasicSli();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSli">GoogleMonitoringSloBasicSli</a>

basic_sli block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_slo#basic_sli GoogleMonitoringSlo#basic_sli}

---

##### `calendarPeriod`<sup>Optional</sup> <a name="calendarPeriod" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloConfig.property.calendarPeriod"></a>

```java
public java.lang.String getCalendarPeriod();
```

- *Type:* java.lang.String

A calendar period, semantically "since the start of the current <calendarPeriod>". Possible values: ["DAY", "WEEK", "FORTNIGHT", "MONTH"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_slo#calendar_period GoogleMonitoringSlo#calendar_period}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Name used for UI elements listing this SLO.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_slo#display_name GoogleMonitoringSlo#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_slo#id GoogleMonitoringSlo#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_slo#project GoogleMonitoringSlo#project}.

---

##### `requestBasedSli`<sup>Optional</sup> <a name="requestBasedSli" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloConfig.property.requestBasedSli"></a>

```java
public GoogleMonitoringSloRequestBasedSli getRequestBasedSli();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSli">GoogleMonitoringSloRequestBasedSli</a>

request_based_sli block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_slo#request_based_sli GoogleMonitoringSlo#request_based_sli}

---

##### `rollingPeriodDays`<sup>Optional</sup> <a name="rollingPeriodDays" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloConfig.property.rollingPeriodDays"></a>

```java
public java.lang.Number getRollingPeriodDays();
```

- *Type:* java.lang.Number

A rolling time period, semantically "in the past X days". Must be between 1 to 30 days, inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_slo#rolling_period_days GoogleMonitoringSlo#rolling_period_days}

---

##### `sloId`<sup>Optional</sup> <a name="sloId" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloConfig.property.sloId"></a>

```java
public java.lang.String getSloId();
```

- *Type:* java.lang.String

The id to use for this ServiceLevelObjective. If omitted, an id will be generated instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_slo#slo_id GoogleMonitoringSlo#slo_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloConfig.property.timeouts"></a>

```java
public GoogleMonitoringSloTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeouts">GoogleMonitoringSloTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_slo#timeouts GoogleMonitoringSlo#timeouts}

---

##### `userLabels`<sup>Optional</sup> <a name="userLabels" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloConfig.property.userLabels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getUserLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

This field is intended to be used for organizing and identifying the AlertPolicy objects.The field can contain up to 64 entries. Each key and value is limited to 63 Unicode characters or 128 bytes, whichever is smaller. Labels and values can contain only lowercase letters, numerals, underscores, and dashes. Keys must begin with a letter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_slo#user_labels GoogleMonitoringSlo#user_labels}

---

##### `windowsBasedSli`<sup>Optional</sup> <a name="windowsBasedSli" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloConfig.property.windowsBasedSli"></a>

```java
public GoogleMonitoringSloWindowsBasedSli getWindowsBasedSli();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSli">GoogleMonitoringSloWindowsBasedSli</a>

windows_based_sli block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_slo#windows_based_sli GoogleMonitoringSlo#windows_based_sli}

---

### GoogleMonitoringSloRequestBasedSli <a name="GoogleMonitoringSloRequestBasedSli" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSli"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSli.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_monitoring_slo.GoogleMonitoringSloRequestBasedSli;

GoogleMonitoringSloRequestBasedSli.builder()
//  .distributionCut(GoogleMonitoringSloRequestBasedSliDistributionCut)
//  .goodTotalRatio(GoogleMonitoringSloRequestBasedSliGoodTotalRatio)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSli.property.distributionCut">distributionCut</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCut">GoogleMonitoringSloRequestBasedSliDistributionCut</a></code> | distribution_cut block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSli.property.goodTotalRatio">goodTotalRatio</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatio">GoogleMonitoringSloRequestBasedSliGoodTotalRatio</a></code> | good_total_ratio block. |

---

##### `distributionCut`<sup>Optional</sup> <a name="distributionCut" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSli.property.distributionCut"></a>

```java
public GoogleMonitoringSloRequestBasedSliDistributionCut getDistributionCut();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCut">GoogleMonitoringSloRequestBasedSliDistributionCut</a>

distribution_cut block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_slo#distribution_cut GoogleMonitoringSlo#distribution_cut}

---

##### `goodTotalRatio`<sup>Optional</sup> <a name="goodTotalRatio" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSli.property.goodTotalRatio"></a>

```java
public GoogleMonitoringSloRequestBasedSliGoodTotalRatio getGoodTotalRatio();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatio">GoogleMonitoringSloRequestBasedSliGoodTotalRatio</a>

good_total_ratio block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_slo#good_total_ratio GoogleMonitoringSlo#good_total_ratio}

---

### GoogleMonitoringSloRequestBasedSliDistributionCut <a name="GoogleMonitoringSloRequestBasedSliDistributionCut" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCut"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCut.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_monitoring_slo.GoogleMonitoringSloRequestBasedSliDistributionCut;

GoogleMonitoringSloRequestBasedSliDistributionCut.builder()
    .distributionFilter(java.lang.String)
    .range(GoogleMonitoringSloRequestBasedSliDistributionCutRange)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCut.property.distributionFilter">distributionFilter</a></code> | <code>java.lang.String</code> | A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) aggregating values to quantify the good service provided. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCut.property.range">range</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRange">GoogleMonitoringSloRequestBasedSliDistributionCutRange</a></code> | range block. |

---

##### `distributionFilter`<sup>Required</sup> <a name="distributionFilter" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCut.property.distributionFilter"></a>

```java
public java.lang.String getDistributionFilter();
```

- *Type:* java.lang.String

A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) aggregating values to quantify the good service provided.

Must have ValueType = DISTRIBUTION and
MetricKind = DELTA or MetricKind = CUMULATIVE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_slo#distribution_filter GoogleMonitoringSlo#distribution_filter}

---

##### `range`<sup>Required</sup> <a name="range" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCut.property.range"></a>

```java
public GoogleMonitoringSloRequestBasedSliDistributionCutRange getRange();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRange">GoogleMonitoringSloRequestBasedSliDistributionCutRange</a>

range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_slo#range GoogleMonitoringSlo#range}

---

### GoogleMonitoringSloRequestBasedSliDistributionCutRange <a name="GoogleMonitoringSloRequestBasedSliDistributionCutRange" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRange.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_monitoring_slo.GoogleMonitoringSloRequestBasedSliDistributionCutRange;

GoogleMonitoringSloRequestBasedSliDistributionCutRange.builder()
//  .max(java.lang.Number)
//  .min(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRange.property.max">max</a></code> | <code>java.lang.Number</code> | max value for the range (inclusive). If not given, will be set to 0. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRange.property.min">min</a></code> | <code>java.lang.Number</code> | Min value for the range (inclusive). If not given, will be set to 0. |

---

##### `max`<sup>Optional</sup> <a name="max" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRange.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

max value for the range (inclusive). If not given, will be set to 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_slo#max GoogleMonitoringSlo#max}

---

##### `min`<sup>Optional</sup> <a name="min" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRange.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

Min value for the range (inclusive). If not given, will be set to 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_slo#min GoogleMonitoringSlo#min}

---

### GoogleMonitoringSloRequestBasedSliGoodTotalRatio <a name="GoogleMonitoringSloRequestBasedSliGoodTotalRatio" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatio"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatio.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_monitoring_slo.GoogleMonitoringSloRequestBasedSliGoodTotalRatio;

GoogleMonitoringSloRequestBasedSliGoodTotalRatio.builder()
//  .badServiceFilter(java.lang.String)
//  .goodServiceFilter(java.lang.String)
//  .totalServiceFilter(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatio.property.badServiceFilter">badServiceFilter</a></code> | <code>java.lang.String</code> | A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) quantifying bad service provided, either demanded service that was not provided or demanded service that was of inadequate quality. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatio.property.goodServiceFilter">goodServiceFilter</a></code> | <code>java.lang.String</code> | A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) quantifying good service provided. Must have ValueType = DOUBLE or ValueType = INT64 and must have MetricKind = DELTA or MetricKind = CUMULATIVE. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatio.property.totalServiceFilter">totalServiceFilter</a></code> | <code>java.lang.String</code> | A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) quantifying total demanded service. |

---

##### `badServiceFilter`<sup>Optional</sup> <a name="badServiceFilter" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatio.property.badServiceFilter"></a>

```java
public java.lang.String getBadServiceFilter();
```

- *Type:* java.lang.String

A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) quantifying bad service provided, either demanded service that was not provided or demanded service that was of inadequate quality.

Must have ValueType = DOUBLE or ValueType = INT64 and
must have MetricKind = DELTA or MetricKind = CUMULATIVE.

Exactly two of 'good_service_filter','bad_service_filter','total_service_filter'
must be set (good + bad = total is assumed).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_slo#bad_service_filter GoogleMonitoringSlo#bad_service_filter}

---

##### `goodServiceFilter`<sup>Optional</sup> <a name="goodServiceFilter" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatio.property.goodServiceFilter"></a>

```java
public java.lang.String getGoodServiceFilter();
```

- *Type:* java.lang.String

A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) quantifying good service provided. Must have ValueType = DOUBLE or ValueType = INT64 and must have MetricKind = DELTA or MetricKind = CUMULATIVE.

Exactly two of 'good_service_filter','bad_service_filter','total_service_filter'
must be set (good + bad = total is assumed).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_slo#good_service_filter GoogleMonitoringSlo#good_service_filter}

---

##### `totalServiceFilter`<sup>Optional</sup> <a name="totalServiceFilter" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatio.property.totalServiceFilter"></a>

```java
public java.lang.String getTotalServiceFilter();
```

- *Type:* java.lang.String

A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) quantifying total demanded service.

Must have ValueType = DOUBLE or ValueType = INT64 and
must have MetricKind = DELTA or MetricKind = CUMULATIVE.

Exactly two of 'good_service_filter','bad_service_filter','total_service_filter'
must be set (good + bad = total is assumed).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_slo#total_service_filter GoogleMonitoringSlo#total_service_filter}

---

### GoogleMonitoringSloTimeouts <a name="GoogleMonitoringSloTimeouts" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_monitoring_slo.GoogleMonitoringSloTimeouts;

GoogleMonitoringSloTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_slo#create GoogleMonitoringSlo#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_slo#delete GoogleMonitoringSlo#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_slo#update GoogleMonitoringSlo#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_slo#create GoogleMonitoringSlo#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_slo#delete GoogleMonitoringSlo#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_slo#update GoogleMonitoringSlo#update}.

---

### GoogleMonitoringSloWindowsBasedSli <a name="GoogleMonitoringSloWindowsBasedSli" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSli"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSli.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_monitoring_slo.GoogleMonitoringSloWindowsBasedSli;

GoogleMonitoringSloWindowsBasedSli.builder()
//  .goodBadMetricFilter(java.lang.String)
//  .goodTotalRatioThreshold(GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThreshold)
//  .metricMeanInRange(GoogleMonitoringSloWindowsBasedSliMetricMeanInRange)
//  .metricSumInRange(GoogleMonitoringSloWindowsBasedSliMetricSumInRange)
//  .windowPeriod(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSli.property.goodBadMetricFilter">goodBadMetricFilter</a></code> | <code>java.lang.String</code> | A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) with ValueType = BOOL. The window is good if any true values appear in the window. One of 'good_bad_metric_filter', 'good_total_ratio_threshold', 'metric_mean_in_range', 'metric_sum_in_range' must be set for 'windows_based_sli'. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSli.property.goodTotalRatioThreshold">goodTotalRatioThreshold</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThreshold">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThreshold</a></code> | good_total_ratio_threshold block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSli.property.metricMeanInRange">metricMeanInRange</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRange">GoogleMonitoringSloWindowsBasedSliMetricMeanInRange</a></code> | metric_mean_in_range block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSli.property.metricSumInRange">metricSumInRange</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRange">GoogleMonitoringSloWindowsBasedSliMetricSumInRange</a></code> | metric_sum_in_range block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSli.property.windowPeriod">windowPeriod</a></code> | <code>java.lang.String</code> | Duration over which window quality is evaluated, given as a duration string "{X}s" representing X seconds. |

---

##### `goodBadMetricFilter`<sup>Optional</sup> <a name="goodBadMetricFilter" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSli.property.goodBadMetricFilter"></a>

```java
public java.lang.String getGoodBadMetricFilter();
```

- *Type:* java.lang.String

A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) with ValueType = BOOL. The window is good if any true values appear in the window. One of 'good_bad_metric_filter', 'good_total_ratio_threshold', 'metric_mean_in_range', 'metric_sum_in_range' must be set for 'windows_based_sli'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_slo#good_bad_metric_filter GoogleMonitoringSlo#good_bad_metric_filter}

---

##### `goodTotalRatioThreshold`<sup>Optional</sup> <a name="goodTotalRatioThreshold" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSli.property.goodTotalRatioThreshold"></a>

```java
public GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThreshold getGoodTotalRatioThreshold();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThreshold">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThreshold</a>

good_total_ratio_threshold block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_slo#good_total_ratio_threshold GoogleMonitoringSlo#good_total_ratio_threshold}

---

##### `metricMeanInRange`<sup>Optional</sup> <a name="metricMeanInRange" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSli.property.metricMeanInRange"></a>

```java
public GoogleMonitoringSloWindowsBasedSliMetricMeanInRange getMetricMeanInRange();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRange">GoogleMonitoringSloWindowsBasedSliMetricMeanInRange</a>

metric_mean_in_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_slo#metric_mean_in_range GoogleMonitoringSlo#metric_mean_in_range}

---

##### `metricSumInRange`<sup>Optional</sup> <a name="metricSumInRange" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSli.property.metricSumInRange"></a>

```java
public GoogleMonitoringSloWindowsBasedSliMetricSumInRange getMetricSumInRange();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRange">GoogleMonitoringSloWindowsBasedSliMetricSumInRange</a>

metric_sum_in_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_slo#metric_sum_in_range GoogleMonitoringSlo#metric_sum_in_range}

---

##### `windowPeriod`<sup>Optional</sup> <a name="windowPeriod" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSli.property.windowPeriod"></a>

```java
public java.lang.String getWindowPeriod();
```

- *Type:* java.lang.String

Duration over which window quality is evaluated, given as a duration string "{X}s" representing X seconds.

Must be an
integer fraction of a day and at least 60s.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_slo#window_period GoogleMonitoringSlo#window_period}

---

### GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThreshold <a name="GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThreshold" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThreshold"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThreshold.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_monitoring_slo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThreshold;

GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThreshold.builder()
//  .basicSliPerformance(GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance)
//  .performance(GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance)
//  .threshold(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThreshold.property.basicSliPerformance">basicSliPerformance</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance</a></code> | basic_sli_performance block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThreshold.property.performance">performance</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance</a></code> | performance block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThreshold.property.threshold">threshold</a></code> | <code>java.lang.Number</code> | If window performance >= threshold, the window is counted as good. |

---

##### `basicSliPerformance`<sup>Optional</sup> <a name="basicSliPerformance" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThreshold.property.basicSliPerformance"></a>

```java
public GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance getBasicSliPerformance();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance</a>

basic_sli_performance block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_slo#basic_sli_performance GoogleMonitoringSlo#basic_sli_performance}

---

##### `performance`<sup>Optional</sup> <a name="performance" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThreshold.property.performance"></a>

```java
public GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance getPerformance();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance</a>

performance block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_slo#performance GoogleMonitoringSlo#performance}

---

##### `threshold`<sup>Optional</sup> <a name="threshold" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThreshold.property.threshold"></a>

```java
public java.lang.Number getThreshold();
```

- *Type:* java.lang.Number

If window performance >= threshold, the window is counted as good.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_slo#threshold GoogleMonitoringSlo#threshold}

---

### GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance <a name="GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_monitoring_slo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance;

GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance.builder()
//  .availability(GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability)
//  .latency(GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency)
//  .location(java.util.List<java.lang.String>)
//  .method(java.util.List<java.lang.String>)
//  .version(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance.property.availability">availability</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability</a></code> | availability block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance.property.latency">latency</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency</a></code> | latency block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance.property.location">location</a></code> | <code>java.util.List<java.lang.String></code> | An optional set of locations to which this SLI is relevant. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance.property.method">method</a></code> | <code>java.util.List<java.lang.String></code> | An optional set of RPCs to which this SLI is relevant. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance.property.version">version</a></code> | <code>java.util.List<java.lang.String></code> | The set of API versions to which this SLI is relevant. |

---

##### `availability`<sup>Optional</sup> <a name="availability" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance.property.availability"></a>

```java
public GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability getAvailability();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability</a>

availability block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_slo#availability GoogleMonitoringSlo#availability}

---

##### `latency`<sup>Optional</sup> <a name="latency" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance.property.latency"></a>

```java
public GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency getLatency();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency</a>

latency block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_slo#latency GoogleMonitoringSlo#latency}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance.property.location"></a>

```java
public java.util.List<java.lang.String> getLocation();
```

- *Type:* java.util.List<java.lang.String>

An optional set of locations to which this SLI is relevant.

Telemetry from other locations will not be used to calculate
performance for this SLI. If omitted, this SLI applies to all
locations in which the Service has activity. For service types
that don't support breaking down by location, setting this
field will result in an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_slo#location GoogleMonitoringSlo#location}

---

##### `method`<sup>Optional</sup> <a name="method" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance.property.method"></a>

```java
public java.util.List<java.lang.String> getMethod();
```

- *Type:* java.util.List<java.lang.String>

An optional set of RPCs to which this SLI is relevant.

Telemetry from other methods will not be used to calculate
performance for this SLI. If omitted, this SLI applies to all
the Service's methods. For service types that don't support
breaking down by method, setting this field will result in an
error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_slo#method GoogleMonitoringSlo#method}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance.property.version"></a>

```java
public java.util.List<java.lang.String> getVersion();
```

- *Type:* java.util.List<java.lang.String>

The set of API versions to which this SLI is relevant.

Telemetry from other API versions will not be used to
calculate performance for this SLI. If omitted,
this SLI applies to all API versions. For service types
that don't support breaking down by version, setting this
field will result in an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_slo#version GoogleMonitoringSlo#version}

---

### GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability <a name="GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_monitoring_slo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability;

GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability.builder()
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether an availability SLI is enabled or not. Must be set to 'true. Defaults to 'true'. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether an availability SLI is enabled or not. Must be set to 'true. Defaults to 'true'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_slo#enabled GoogleMonitoringSlo#enabled}

---

### GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency <a name="GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_monitoring_slo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency;

GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency.builder()
    .threshold(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency.property.threshold">threshold</a></code> | <code>java.lang.String</code> | A duration string, e.g. 10s. Good service is defined to be the count of requests made to this service that return in no more than threshold. |

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency.property.threshold"></a>

```java
public java.lang.String getThreshold();
```

- *Type:* java.lang.String

A duration string, e.g. 10s. Good service is defined to be the count of requests made to this service that return in no more than threshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_slo#threshold GoogleMonitoringSlo#threshold}

---

### GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance <a name="GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_monitoring_slo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance;

GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance.builder()
//  .distributionCut(GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut)
//  .goodTotalRatio(GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance.property.distributionCut">distributionCut</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut</a></code> | distribution_cut block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance.property.goodTotalRatio">goodTotalRatio</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio</a></code> | good_total_ratio block. |

---

##### `distributionCut`<sup>Optional</sup> <a name="distributionCut" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance.property.distributionCut"></a>

```java
public GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut getDistributionCut();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut</a>

distribution_cut block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_slo#distribution_cut GoogleMonitoringSlo#distribution_cut}

---

##### `goodTotalRatio`<sup>Optional</sup> <a name="goodTotalRatio" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance.property.goodTotalRatio"></a>

```java
public GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio getGoodTotalRatio();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio</a>

good_total_ratio block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_slo#good_total_ratio GoogleMonitoringSlo#good_total_ratio}

---

### GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut <a name="GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_monitoring_slo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut;

GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut.builder()
    .distributionFilter(java.lang.String)
    .range(GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut.property.distributionFilter">distributionFilter</a></code> | <code>java.lang.String</code> | A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) aggregating values to quantify the good service provided. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut.property.range">range</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange</a></code> | range block. |

---

##### `distributionFilter`<sup>Required</sup> <a name="distributionFilter" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut.property.distributionFilter"></a>

```java
public java.lang.String getDistributionFilter();
```

- *Type:* java.lang.String

A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) aggregating values to quantify the good service provided.

Must have ValueType = DISTRIBUTION and
MetricKind = DELTA or MetricKind = CUMULATIVE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_slo#distribution_filter GoogleMonitoringSlo#distribution_filter}

---

##### `range`<sup>Required</sup> <a name="range" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut.property.range"></a>

```java
public GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange getRange();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange</a>

range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_slo#range GoogleMonitoringSlo#range}

---

### GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange <a name="GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_monitoring_slo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange;

GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange.builder()
//  .max(java.lang.Number)
//  .min(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange.property.max">max</a></code> | <code>java.lang.Number</code> | max value for the range (inclusive). If not given, will be set to 0. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange.property.min">min</a></code> | <code>java.lang.Number</code> | Min value for the range (inclusive). If not given, will be set to 0. |

---

##### `max`<sup>Optional</sup> <a name="max" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

max value for the range (inclusive). If not given, will be set to 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_slo#max GoogleMonitoringSlo#max}

---

##### `min`<sup>Optional</sup> <a name="min" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

Min value for the range (inclusive). If not given, will be set to 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_slo#min GoogleMonitoringSlo#min}

---

### GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio <a name="GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_monitoring_slo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio;

GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio.builder()
//  .badServiceFilter(java.lang.String)
//  .goodServiceFilter(java.lang.String)
//  .totalServiceFilter(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio.property.badServiceFilter">badServiceFilter</a></code> | <code>java.lang.String</code> | A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) quantifying bad service provided, either demanded service that was not provided or demanded service that was of inadequate quality. Exactly two of good, bad, or total service filter must be defined (where good + bad = total is assumed). |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio.property.goodServiceFilter">goodServiceFilter</a></code> | <code>java.lang.String</code> | A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) quantifying good service provided. Exactly two of good, bad, or total service filter must be defined (where good + bad = total is assumed). |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio.property.totalServiceFilter">totalServiceFilter</a></code> | <code>java.lang.String</code> | A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) quantifying total demanded service. Exactly two of good, bad, or total service filter must be defined (where good + bad = total is assumed). |

---

##### `badServiceFilter`<sup>Optional</sup> <a name="badServiceFilter" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio.property.badServiceFilter"></a>

```java
public java.lang.String getBadServiceFilter();
```

- *Type:* java.lang.String

A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) quantifying bad service provided, either demanded service that was not provided or demanded service that was of inadequate quality. Exactly two of good, bad, or total service filter must be defined (where good + bad = total is assumed).

Must have ValueType = DOUBLE or ValueType = INT64 and
must have MetricKind = DELTA or MetricKind = CUMULATIVE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_slo#bad_service_filter GoogleMonitoringSlo#bad_service_filter}

---

##### `goodServiceFilter`<sup>Optional</sup> <a name="goodServiceFilter" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio.property.goodServiceFilter"></a>

```java
public java.lang.String getGoodServiceFilter();
```

- *Type:* java.lang.String

A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) quantifying good service provided. Exactly two of good, bad, or total service filter must be defined (where good + bad = total is assumed).

Must have ValueType = DOUBLE or ValueType = INT64 and
must have MetricKind = DELTA or MetricKind = CUMULATIVE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_slo#good_service_filter GoogleMonitoringSlo#good_service_filter}

---

##### `totalServiceFilter`<sup>Optional</sup> <a name="totalServiceFilter" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio.property.totalServiceFilter"></a>

```java
public java.lang.String getTotalServiceFilter();
```

- *Type:* java.lang.String

A TimeSeries [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) quantifying total demanded service. Exactly two of good, bad, or total service filter must be defined (where good + bad = total is assumed).

Must have ValueType = DOUBLE or ValueType = INT64 and
must have MetricKind = DELTA or MetricKind = CUMULATIVE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_slo#total_service_filter GoogleMonitoringSlo#total_service_filter}

---

### GoogleMonitoringSloWindowsBasedSliMetricMeanInRange <a name="GoogleMonitoringSloWindowsBasedSliMetricMeanInRange" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRange.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_monitoring_slo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRange;

GoogleMonitoringSloWindowsBasedSliMetricMeanInRange.builder()
    .range(GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRange)
    .timeSeries(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRange.property.range">range</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRange">GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRange</a></code> | range block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRange.property.timeSeries">timeSeries</a></code> | <code>java.lang.String</code> | A [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) specifying the TimeSeries to use for evaluating window The provided TimeSeries must have ValueType = INT64 or ValueType = DOUBLE and MetricKind = GAUGE. Mean value 'X' should satisfy 'range.min <= X <= range.max' under good service. |

---

##### `range`<sup>Required</sup> <a name="range" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRange.property.range"></a>

```java
public GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRange getRange();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRange">GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRange</a>

range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_slo#range GoogleMonitoringSlo#range}

---

##### `timeSeries`<sup>Required</sup> <a name="timeSeries" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRange.property.timeSeries"></a>

```java
public java.lang.String getTimeSeries();
```

- *Type:* java.lang.String

A [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) specifying the TimeSeries to use for evaluating window The provided TimeSeries must have ValueType = INT64 or ValueType = DOUBLE and MetricKind = GAUGE. Mean value 'X' should satisfy 'range.min <= X <= range.max' under good service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_slo#time_series GoogleMonitoringSlo#time_series}

---

### GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRange <a name="GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRange" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRange.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_monitoring_slo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRange;

GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRange.builder()
//  .max(java.lang.Number)
//  .min(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRange.property.max">max</a></code> | <code>java.lang.Number</code> | max value for the range (inclusive). If not given, will be set to "infinity", defining an open range ">= range.min". |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRange.property.min">min</a></code> | <code>java.lang.Number</code> | Min value for the range (inclusive). If not given, will be set to "-infinity", defining an open range "< range.max". |

---

##### `max`<sup>Optional</sup> <a name="max" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRange.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

max value for the range (inclusive). If not given, will be set to "infinity", defining an open range ">= range.min".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_slo#max GoogleMonitoringSlo#max}

---

##### `min`<sup>Optional</sup> <a name="min" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRange.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

Min value for the range (inclusive). If not given, will be set to "-infinity", defining an open range "< range.max".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_slo#min GoogleMonitoringSlo#min}

---

### GoogleMonitoringSloWindowsBasedSliMetricSumInRange <a name="GoogleMonitoringSloWindowsBasedSliMetricSumInRange" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRange.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_monitoring_slo.GoogleMonitoringSloWindowsBasedSliMetricSumInRange;

GoogleMonitoringSloWindowsBasedSliMetricSumInRange.builder()
    .range(GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRange)
    .timeSeries(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRange.property.range">range</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRange">GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRange</a></code> | range block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRange.property.timeSeries">timeSeries</a></code> | <code>java.lang.String</code> | A [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) specifying the TimeSeries to use for evaluating window quality. The provided TimeSeries must have ValueType = INT64 or ValueType = DOUBLE and MetricKind = GAUGE. |

---

##### `range`<sup>Required</sup> <a name="range" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRange.property.range"></a>

```java
public GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRange getRange();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRange">GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRange</a>

range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_slo#range GoogleMonitoringSlo#range}

---

##### `timeSeries`<sup>Required</sup> <a name="timeSeries" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRange.property.timeSeries"></a>

```java
public java.lang.String getTimeSeries();
```

- *Type:* java.lang.String

A [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) specifying the TimeSeries to use for evaluating window quality. The provided TimeSeries must have ValueType = INT64 or ValueType = DOUBLE and MetricKind = GAUGE.

Summed value 'X' should satisfy
'range.min <= X <= range.max' for a good window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_slo#time_series GoogleMonitoringSlo#time_series}

---

### GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRange <a name="GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRange" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRange.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_monitoring_slo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRange;

GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRange.builder()
//  .max(java.lang.Number)
//  .min(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRange.property.max">max</a></code> | <code>java.lang.Number</code> | max value for the range (inclusive). If not given, will be set to "infinity", defining an open range ">= range.min". |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRange.property.min">min</a></code> | <code>java.lang.Number</code> | Min value for the range (inclusive). If not given, will be set to "-infinity", defining an open range "< range.max". |

---

##### `max`<sup>Optional</sup> <a name="max" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRange.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

max value for the range (inclusive). If not given, will be set to "infinity", defining an open range ">= range.min".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_slo#max GoogleMonitoringSlo#max}

---

##### `min`<sup>Optional</sup> <a name="min" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRange.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

Min value for the range (inclusive). If not given, will be set to "-infinity", defining an open range "< range.max".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_monitoring_slo#min GoogleMonitoringSlo#min}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleMonitoringSloBasicSliAvailabilityOutputReference <a name="GoogleMonitoringSloBasicSliAvailabilityOutputReference" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailabilityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailabilityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_monitoring_slo.GoogleMonitoringSloBasicSliAvailabilityOutputReference;

new GoogleMonitoringSloBasicSliAvailabilityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailabilityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailabilityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailabilityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailabilityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailabilityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailabilityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailabilityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailabilityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailabilityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailabilityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailabilityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailabilityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailabilityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailabilityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailabilityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailabilityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailabilityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailabilityOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailabilityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailabilityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailabilityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailabilityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailabilityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailabilityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailabilityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailabilityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailabilityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailabilityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailabilityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailabilityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailabilityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailabilityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailabilityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailabilityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailabilityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailabilityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailabilityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailabilityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailabilityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailabilityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailabilityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailabilityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailabilityOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailabilityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailabilityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailabilityOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailabilityOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailabilityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailability">GoogleMonitoringSloBasicSliAvailability</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailabilityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailabilityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailabilityOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailabilityOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailabilityOutputReference.property.internalValue"></a>

```java
public GoogleMonitoringSloBasicSliAvailability getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailability">GoogleMonitoringSloBasicSliAvailability</a>

---


### GoogleMonitoringSloBasicSliLatencyOutputReference <a name="GoogleMonitoringSloBasicSliLatencyOutputReference" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatencyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatencyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_monitoring_slo.GoogleMonitoringSloBasicSliLatencyOutputReference;

new GoogleMonitoringSloBasicSliLatencyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatencyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatencyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatencyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatencyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatencyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatencyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatencyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatencyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatencyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatencyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatencyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatencyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatencyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatencyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatencyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatencyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatencyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatencyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatencyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatencyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatencyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatencyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatencyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatencyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatencyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatencyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatencyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatencyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatencyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatencyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatencyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatencyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatencyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatencyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatencyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatencyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatencyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatencyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatencyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatencyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatencyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatencyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatencyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatencyOutputReference.property.thresholdInput">thresholdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatencyOutputReference.property.threshold">threshold</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatencyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatency">GoogleMonitoringSloBasicSliLatency</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatencyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatencyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `thresholdInput`<sup>Optional</sup> <a name="thresholdInput" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatencyOutputReference.property.thresholdInput"></a>

```java
public java.lang.String getThresholdInput();
```

- *Type:* java.lang.String

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatencyOutputReference.property.threshold"></a>

```java
public java.lang.String getThreshold();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatencyOutputReference.property.internalValue"></a>

```java
public GoogleMonitoringSloBasicSliLatency getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatency">GoogleMonitoringSloBasicSliLatency</a>

---


### GoogleMonitoringSloBasicSliOutputReference <a name="GoogleMonitoringSloBasicSliOutputReference" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_monitoring_slo.GoogleMonitoringSloBasicSliOutputReference;

new GoogleMonitoringSloBasicSliOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.putAvailability">putAvailability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.putLatency">putLatency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.resetAvailability">resetAvailability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.resetLatency">resetLatency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.resetMethod">resetMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAvailability` <a name="putAvailability" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.putAvailability"></a>

```java
public void putAvailability(GoogleMonitoringSloBasicSliAvailability value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.putAvailability.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailability">GoogleMonitoringSloBasicSliAvailability</a>

---

##### `putLatency` <a name="putLatency" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.putLatency"></a>

```java
public void putLatency(GoogleMonitoringSloBasicSliLatency value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.putLatency.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatency">GoogleMonitoringSloBasicSliLatency</a>

---

##### `resetAvailability` <a name="resetAvailability" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.resetAvailability"></a>

```java
public void resetAvailability()
```

##### `resetLatency` <a name="resetLatency" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.resetLatency"></a>

```java
public void resetLatency()
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetMethod` <a name="resetMethod" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.resetMethod"></a>

```java
public void resetMethod()
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.resetVersion"></a>

```java
public void resetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.property.availability">availability</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailabilityOutputReference">GoogleMonitoringSloBasicSliAvailabilityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.property.latency">latency</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatencyOutputReference">GoogleMonitoringSloBasicSliLatencyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.property.availabilityInput">availabilityInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailability">GoogleMonitoringSloBasicSliAvailability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.property.latencyInput">latencyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatency">GoogleMonitoringSloBasicSliLatency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.property.locationInput">locationInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.property.methodInput">methodInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.property.versionInput">versionInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.property.location">location</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.property.method">method</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.property.version">version</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSli">GoogleMonitoringSloBasicSli</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `availability`<sup>Required</sup> <a name="availability" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.property.availability"></a>

```java
public GoogleMonitoringSloBasicSliAvailabilityOutputReference getAvailability();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailabilityOutputReference">GoogleMonitoringSloBasicSliAvailabilityOutputReference</a>

---

##### `latency`<sup>Required</sup> <a name="latency" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.property.latency"></a>

```java
public GoogleMonitoringSloBasicSliLatencyOutputReference getLatency();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatencyOutputReference">GoogleMonitoringSloBasicSliLatencyOutputReference</a>

---

##### `availabilityInput`<sup>Optional</sup> <a name="availabilityInput" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.property.availabilityInput"></a>

```java
public GoogleMonitoringSloBasicSliAvailability getAvailabilityInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliAvailability">GoogleMonitoringSloBasicSliAvailability</a>

---

##### `latencyInput`<sup>Optional</sup> <a name="latencyInput" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.property.latencyInput"></a>

```java
public GoogleMonitoringSloBasicSliLatency getLatencyInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliLatency">GoogleMonitoringSloBasicSliLatency</a>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.property.locationInput"></a>

```java
public java.util.List<java.lang.String> getLocationInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `methodInput`<sup>Optional</sup> <a name="methodInput" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.property.methodInput"></a>

```java
public java.util.List<java.lang.String> getMethodInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.property.versionInput"></a>

```java
public java.util.List<java.lang.String> getVersionInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.property.location"></a>

```java
public java.util.List<java.lang.String> getLocation();
```

- *Type:* java.util.List<java.lang.String>

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.property.method"></a>

```java
public java.util.List<java.lang.String> getMethod();
```

- *Type:* java.util.List<java.lang.String>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.property.version"></a>

```java
public java.util.List<java.lang.String> getVersion();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSliOutputReference.property.internalValue"></a>

```java
public GoogleMonitoringSloBasicSli getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloBasicSli">GoogleMonitoringSloBasicSli</a>

---


### GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference <a name="GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_monitoring_slo.GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference;

new GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference.putRange">putRange</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRange` <a name="putRange" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference.putRange"></a>

```java
public void putRange(GoogleMonitoringSloRequestBasedSliDistributionCutRange value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference.putRange.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRange">GoogleMonitoringSloRequestBasedSliDistributionCutRange</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference.property.range">range</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference">GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference.property.distributionFilterInput">distributionFilterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference.property.rangeInput">rangeInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRange">GoogleMonitoringSloRequestBasedSliDistributionCutRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference.property.distributionFilter">distributionFilter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCut">GoogleMonitoringSloRequestBasedSliDistributionCut</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `range`<sup>Required</sup> <a name="range" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference.property.range"></a>

```java
public GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference getRange();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference">GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference</a>

---

##### `distributionFilterInput`<sup>Optional</sup> <a name="distributionFilterInput" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference.property.distributionFilterInput"></a>

```java
public java.lang.String getDistributionFilterInput();
```

- *Type:* java.lang.String

---

##### `rangeInput`<sup>Optional</sup> <a name="rangeInput" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference.property.rangeInput"></a>

```java
public GoogleMonitoringSloRequestBasedSliDistributionCutRange getRangeInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRange">GoogleMonitoringSloRequestBasedSliDistributionCutRange</a>

---

##### `distributionFilter`<sup>Required</sup> <a name="distributionFilter" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference.property.distributionFilter"></a>

```java
public java.lang.String getDistributionFilter();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference.property.internalValue"></a>

```java
public GoogleMonitoringSloRequestBasedSliDistributionCut getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCut">GoogleMonitoringSloRequestBasedSliDistributionCut</a>

---


### GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference <a name="GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_monitoring_slo.GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference;

new GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference.resetMax">resetMax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference.resetMin">resetMin</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMax` <a name="resetMax" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference.resetMax"></a>

```java
public void resetMax()
```

##### `resetMin` <a name="resetMin" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference.resetMin"></a>

```java
public void resetMin()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference.property.maxInput">maxInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference.property.minInput">minInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference.property.max">max</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference.property.min">min</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRange">GoogleMonitoringSloRequestBasedSliDistributionCutRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxInput`<sup>Optional</sup> <a name="maxInput" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference.property.maxInput"></a>

```java
public java.lang.Number getMaxInput();
```

- *Type:* java.lang.Number

---

##### `minInput`<sup>Optional</sup> <a name="minInput" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference.property.minInput"></a>

```java
public java.lang.Number getMinInput();
```

- *Type:* java.lang.Number

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRangeOutputReference.property.internalValue"></a>

```java
public GoogleMonitoringSloRequestBasedSliDistributionCutRange getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutRange">GoogleMonitoringSloRequestBasedSliDistributionCutRange</a>

---


### GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference <a name="GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_monitoring_slo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference;

new GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.resetBadServiceFilter">resetBadServiceFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.resetGoodServiceFilter">resetGoodServiceFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.resetTotalServiceFilter">resetTotalServiceFilter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBadServiceFilter` <a name="resetBadServiceFilter" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.resetBadServiceFilter"></a>

```java
public void resetBadServiceFilter()
```

##### `resetGoodServiceFilter` <a name="resetGoodServiceFilter" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.resetGoodServiceFilter"></a>

```java
public void resetGoodServiceFilter()
```

##### `resetTotalServiceFilter` <a name="resetTotalServiceFilter" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.resetTotalServiceFilter"></a>

```java
public void resetTotalServiceFilter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.property.badServiceFilterInput">badServiceFilterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.property.goodServiceFilterInput">goodServiceFilterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.property.totalServiceFilterInput">totalServiceFilterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.property.badServiceFilter">badServiceFilter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.property.goodServiceFilter">goodServiceFilter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.property.totalServiceFilter">totalServiceFilter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatio">GoogleMonitoringSloRequestBasedSliGoodTotalRatio</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `badServiceFilterInput`<sup>Optional</sup> <a name="badServiceFilterInput" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.property.badServiceFilterInput"></a>

```java
public java.lang.String getBadServiceFilterInput();
```

- *Type:* java.lang.String

---

##### `goodServiceFilterInput`<sup>Optional</sup> <a name="goodServiceFilterInput" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.property.goodServiceFilterInput"></a>

```java
public java.lang.String getGoodServiceFilterInput();
```

- *Type:* java.lang.String

---

##### `totalServiceFilterInput`<sup>Optional</sup> <a name="totalServiceFilterInput" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.property.totalServiceFilterInput"></a>

```java
public java.lang.String getTotalServiceFilterInput();
```

- *Type:* java.lang.String

---

##### `badServiceFilter`<sup>Required</sup> <a name="badServiceFilter" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.property.badServiceFilter"></a>

```java
public java.lang.String getBadServiceFilter();
```

- *Type:* java.lang.String

---

##### `goodServiceFilter`<sup>Required</sup> <a name="goodServiceFilter" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.property.goodServiceFilter"></a>

```java
public java.lang.String getGoodServiceFilter();
```

- *Type:* java.lang.String

---

##### `totalServiceFilter`<sup>Required</sup> <a name="totalServiceFilter" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.property.totalServiceFilter"></a>

```java
public java.lang.String getTotalServiceFilter();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference.property.internalValue"></a>

```java
public GoogleMonitoringSloRequestBasedSliGoodTotalRatio getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatio">GoogleMonitoringSloRequestBasedSliGoodTotalRatio</a>

---


### GoogleMonitoringSloRequestBasedSliOutputReference <a name="GoogleMonitoringSloRequestBasedSliOutputReference" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_monitoring_slo.GoogleMonitoringSloRequestBasedSliOutputReference;

new GoogleMonitoringSloRequestBasedSliOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.putDistributionCut">putDistributionCut</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.putGoodTotalRatio">putGoodTotalRatio</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.resetDistributionCut">resetDistributionCut</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.resetGoodTotalRatio">resetGoodTotalRatio</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDistributionCut` <a name="putDistributionCut" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.putDistributionCut"></a>

```java
public void putDistributionCut(GoogleMonitoringSloRequestBasedSliDistributionCut value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.putDistributionCut.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCut">GoogleMonitoringSloRequestBasedSliDistributionCut</a>

---

##### `putGoodTotalRatio` <a name="putGoodTotalRatio" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.putGoodTotalRatio"></a>

```java
public void putGoodTotalRatio(GoogleMonitoringSloRequestBasedSliGoodTotalRatio value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.putGoodTotalRatio.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatio">GoogleMonitoringSloRequestBasedSliGoodTotalRatio</a>

---

##### `resetDistributionCut` <a name="resetDistributionCut" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.resetDistributionCut"></a>

```java
public void resetDistributionCut()
```

##### `resetGoodTotalRatio` <a name="resetGoodTotalRatio" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.resetGoodTotalRatio"></a>

```java
public void resetGoodTotalRatio()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.property.distributionCut">distributionCut</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference">GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.property.goodTotalRatio">goodTotalRatio</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference">GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.property.distributionCutInput">distributionCutInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCut">GoogleMonitoringSloRequestBasedSliDistributionCut</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.property.goodTotalRatioInput">goodTotalRatioInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatio">GoogleMonitoringSloRequestBasedSliGoodTotalRatio</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSli">GoogleMonitoringSloRequestBasedSli</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `distributionCut`<sup>Required</sup> <a name="distributionCut" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.property.distributionCut"></a>

```java
public GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference getDistributionCut();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference">GoogleMonitoringSloRequestBasedSliDistributionCutOutputReference</a>

---

##### `goodTotalRatio`<sup>Required</sup> <a name="goodTotalRatio" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.property.goodTotalRatio"></a>

```java
public GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference getGoodTotalRatio();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference">GoogleMonitoringSloRequestBasedSliGoodTotalRatioOutputReference</a>

---

##### `distributionCutInput`<sup>Optional</sup> <a name="distributionCutInput" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.property.distributionCutInput"></a>

```java
public GoogleMonitoringSloRequestBasedSliDistributionCut getDistributionCutInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliDistributionCut">GoogleMonitoringSloRequestBasedSliDistributionCut</a>

---

##### `goodTotalRatioInput`<sup>Optional</sup> <a name="goodTotalRatioInput" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.property.goodTotalRatioInput"></a>

```java
public GoogleMonitoringSloRequestBasedSliGoodTotalRatio getGoodTotalRatioInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliGoodTotalRatio">GoogleMonitoringSloRequestBasedSliGoodTotalRatio</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSliOutputReference.property.internalValue"></a>

```java
public GoogleMonitoringSloRequestBasedSli getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloRequestBasedSli">GoogleMonitoringSloRequestBasedSli</a>

---


### GoogleMonitoringSloTimeoutsOutputReference <a name="GoogleMonitoringSloTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_monitoring_slo.GoogleMonitoringSloTimeoutsOutputReference;

new GoogleMonitoringSloTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeouts">GoogleMonitoringSloTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloTimeouts">GoogleMonitoringSloTimeouts</a>

---


### GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference <a name="GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_monitoring_slo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference;

new GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference.property.internalValue"></a>

```java
public GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability</a>

---


### GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference <a name="GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_monitoring_slo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference;

new GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.property.thresholdInput">thresholdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.property.threshold">threshold</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `thresholdInput`<sup>Optional</sup> <a name="thresholdInput" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.property.thresholdInput"></a>

```java
public java.lang.String getThresholdInput();
```

- *Type:* java.lang.String

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.property.threshold"></a>

```java
public java.lang.String getThreshold();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference.property.internalValue"></a>

```java
public GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency</a>

---


### GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference <a name="GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_monitoring_slo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference;

new GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.putAvailability">putAvailability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.putLatency">putLatency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.resetAvailability">resetAvailability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.resetLatency">resetLatency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.resetMethod">resetMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAvailability` <a name="putAvailability" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.putAvailability"></a>

```java
public void putAvailability(GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.putAvailability.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability</a>

---

##### `putLatency` <a name="putLatency" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.putLatency"></a>

```java
public void putLatency(GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.putLatency.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency</a>

---

##### `resetAvailability` <a name="resetAvailability" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.resetAvailability"></a>

```java
public void resetAvailability()
```

##### `resetLatency` <a name="resetLatency" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.resetLatency"></a>

```java
public void resetLatency()
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetMethod` <a name="resetMethod" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.resetMethod"></a>

```java
public void resetMethod()
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.resetVersion"></a>

```java
public void resetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.property.availability">availability</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.property.latency">latency</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.property.availabilityInput">availabilityInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.property.latencyInput">latencyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.property.locationInput">locationInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.property.methodInput">methodInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.property.versionInput">versionInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.property.location">location</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.property.method">method</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.property.version">version</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `availability`<sup>Required</sup> <a name="availability" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.property.availability"></a>

```java
public GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference getAvailability();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailabilityOutputReference</a>

---

##### `latency`<sup>Required</sup> <a name="latency" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.property.latency"></a>

```java
public GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference getLatency();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatencyOutputReference</a>

---

##### `availabilityInput`<sup>Optional</sup> <a name="availabilityInput" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.property.availabilityInput"></a>

```java
public GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability getAvailabilityInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability</a>

---

##### `latencyInput`<sup>Optional</sup> <a name="latencyInput" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.property.latencyInput"></a>

```java
public GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency getLatencyInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency</a>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.property.locationInput"></a>

```java
public java.util.List<java.lang.String> getLocationInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `methodInput`<sup>Optional</sup> <a name="methodInput" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.property.methodInput"></a>

```java
public java.util.List<java.lang.String> getMethodInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.property.versionInput"></a>

```java
public java.util.List<java.lang.String> getVersionInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.property.location"></a>

```java
public java.util.List<java.lang.String> getLocation();
```

- *Type:* java.util.List<java.lang.String>

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.property.method"></a>

```java
public java.util.List<java.lang.String> getMethod();
```

- *Type:* java.util.List<java.lang.String>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.property.version"></a>

```java
public java.util.List<java.lang.String> getVersion();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference.property.internalValue"></a>

```java
public GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance</a>

---


### GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference <a name="GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_monitoring_slo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference;

new GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.putBasicSliPerformance">putBasicSliPerformance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.putPerformance">putPerformance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.resetBasicSliPerformance">resetBasicSliPerformance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.resetPerformance">resetPerformance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.resetThreshold">resetThreshold</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBasicSliPerformance` <a name="putBasicSliPerformance" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.putBasicSliPerformance"></a>

```java
public void putBasicSliPerformance(GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.putBasicSliPerformance.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance</a>

---

##### `putPerformance` <a name="putPerformance" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.putPerformance"></a>

```java
public void putPerformance(GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.putPerformance.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance</a>

---

##### `resetBasicSliPerformance` <a name="resetBasicSliPerformance" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.resetBasicSliPerformance"></a>

```java
public void resetBasicSliPerformance()
```

##### `resetPerformance` <a name="resetPerformance" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.resetPerformance"></a>

```java
public void resetPerformance()
```

##### `resetThreshold` <a name="resetThreshold" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.resetThreshold"></a>

```java
public void resetThreshold()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.property.basicSliPerformance">basicSliPerformance</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.property.performance">performance</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.property.basicSliPerformanceInput">basicSliPerformanceInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.property.performanceInput">performanceInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.property.thresholdInput">thresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.property.threshold">threshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThreshold">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThreshold</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `basicSliPerformance`<sup>Required</sup> <a name="basicSliPerformance" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.property.basicSliPerformance"></a>

```java
public GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference getBasicSliPerformance();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceOutputReference</a>

---

##### `performance`<sup>Required</sup> <a name="performance" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.property.performance"></a>

```java
public GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference getPerformance();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference</a>

---

##### `basicSliPerformanceInput`<sup>Optional</sup> <a name="basicSliPerformanceInput" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.property.basicSliPerformanceInput"></a>

```java
public GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance getBasicSliPerformanceInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance</a>

---

##### `performanceInput`<sup>Optional</sup> <a name="performanceInput" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.property.performanceInput"></a>

```java
public GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance getPerformanceInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance</a>

---

##### `thresholdInput`<sup>Optional</sup> <a name="thresholdInput" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.property.thresholdInput"></a>

```java
public java.lang.Number getThresholdInput();
```

- *Type:* java.lang.Number

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.property.threshold"></a>

```java
public java.lang.Number getThreshold();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference.property.internalValue"></a>

```java
public GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThreshold getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThreshold">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThreshold</a>

---


### GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference <a name="GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_monitoring_slo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference;

new GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.putRange">putRange</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRange` <a name="putRange" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.putRange"></a>

```java
public void putRange(GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.putRange.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.property.range">range</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.property.distributionFilterInput">distributionFilterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.property.rangeInput">rangeInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.property.distributionFilter">distributionFilter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `range`<sup>Required</sup> <a name="range" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.property.range"></a>

```java
public GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference getRange();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference</a>

---

##### `distributionFilterInput`<sup>Optional</sup> <a name="distributionFilterInput" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.property.distributionFilterInput"></a>

```java
public java.lang.String getDistributionFilterInput();
```

- *Type:* java.lang.String

---

##### `rangeInput`<sup>Optional</sup> <a name="rangeInput" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.property.rangeInput"></a>

```java
public GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange getRangeInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange</a>

---

##### `distributionFilter`<sup>Required</sup> <a name="distributionFilter" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.property.distributionFilter"></a>

```java
public java.lang.String getDistributionFilter();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference.property.internalValue"></a>

```java
public GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut</a>

---


### GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference <a name="GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_monitoring_slo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference;

new GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.resetMax">resetMax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.resetMin">resetMin</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMax` <a name="resetMax" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.resetMax"></a>

```java
public void resetMax()
```

##### `resetMin` <a name="resetMin" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.resetMin"></a>

```java
public void resetMin()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.property.maxInput">maxInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.property.minInput">minInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.property.max">max</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.property.min">min</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxInput`<sup>Optional</sup> <a name="maxInput" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.property.maxInput"></a>

```java
public java.lang.Number getMaxInput();
```

- *Type:* java.lang.Number

---

##### `minInput`<sup>Optional</sup> <a name="minInput" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.property.minInput"></a>

```java
public java.lang.Number getMinInput();
```

- *Type:* java.lang.Number

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRangeOutputReference.property.internalValue"></a>

```java
public GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange</a>

---


### GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference <a name="GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_monitoring_slo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference;

new GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.resetBadServiceFilter">resetBadServiceFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.resetGoodServiceFilter">resetGoodServiceFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.resetTotalServiceFilter">resetTotalServiceFilter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBadServiceFilter` <a name="resetBadServiceFilter" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.resetBadServiceFilter"></a>

```java
public void resetBadServiceFilter()
```

##### `resetGoodServiceFilter` <a name="resetGoodServiceFilter" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.resetGoodServiceFilter"></a>

```java
public void resetGoodServiceFilter()
```

##### `resetTotalServiceFilter` <a name="resetTotalServiceFilter" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.resetTotalServiceFilter"></a>

```java
public void resetTotalServiceFilter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.property.badServiceFilterInput">badServiceFilterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.property.goodServiceFilterInput">goodServiceFilterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.property.totalServiceFilterInput">totalServiceFilterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.property.badServiceFilter">badServiceFilter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.property.goodServiceFilter">goodServiceFilter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.property.totalServiceFilter">totalServiceFilter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `badServiceFilterInput`<sup>Optional</sup> <a name="badServiceFilterInput" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.property.badServiceFilterInput"></a>

```java
public java.lang.String getBadServiceFilterInput();
```

- *Type:* java.lang.String

---

##### `goodServiceFilterInput`<sup>Optional</sup> <a name="goodServiceFilterInput" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.property.goodServiceFilterInput"></a>

```java
public java.lang.String getGoodServiceFilterInput();
```

- *Type:* java.lang.String

---

##### `totalServiceFilterInput`<sup>Optional</sup> <a name="totalServiceFilterInput" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.property.totalServiceFilterInput"></a>

```java
public java.lang.String getTotalServiceFilterInput();
```

- *Type:* java.lang.String

---

##### `badServiceFilter`<sup>Required</sup> <a name="badServiceFilter" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.property.badServiceFilter"></a>

```java
public java.lang.String getBadServiceFilter();
```

- *Type:* java.lang.String

---

##### `goodServiceFilter`<sup>Required</sup> <a name="goodServiceFilter" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.property.goodServiceFilter"></a>

```java
public java.lang.String getGoodServiceFilter();
```

- *Type:* java.lang.String

---

##### `totalServiceFilter`<sup>Required</sup> <a name="totalServiceFilter" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.property.totalServiceFilter"></a>

```java
public java.lang.String getTotalServiceFilter();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference.property.internalValue"></a>

```java
public GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio</a>

---


### GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference <a name="GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_monitoring_slo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference;

new GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.putDistributionCut">putDistributionCut</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.putGoodTotalRatio">putGoodTotalRatio</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.resetDistributionCut">resetDistributionCut</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.resetGoodTotalRatio">resetGoodTotalRatio</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDistributionCut` <a name="putDistributionCut" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.putDistributionCut"></a>

```java
public void putDistributionCut(GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.putDistributionCut.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut</a>

---

##### `putGoodTotalRatio` <a name="putGoodTotalRatio" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.putGoodTotalRatio"></a>

```java
public void putGoodTotalRatio(GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.putGoodTotalRatio.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio</a>

---

##### `resetDistributionCut` <a name="resetDistributionCut" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.resetDistributionCut"></a>

```java
public void resetDistributionCut()
```

##### `resetGoodTotalRatio` <a name="resetGoodTotalRatio" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.resetGoodTotalRatio"></a>

```java
public void resetGoodTotalRatio()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.property.distributionCut">distributionCut</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.property.goodTotalRatio">goodTotalRatio</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.property.distributionCutInput">distributionCutInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.property.goodTotalRatioInput">goodTotalRatioInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `distributionCut`<sup>Required</sup> <a name="distributionCut" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.property.distributionCut"></a>

```java
public GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference getDistributionCut();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutOutputReference</a>

---

##### `goodTotalRatio`<sup>Required</sup> <a name="goodTotalRatio" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.property.goodTotalRatio"></a>

```java
public GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference getGoodTotalRatio();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatioOutputReference</a>

---

##### `distributionCutInput`<sup>Optional</sup> <a name="distributionCutInput" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.property.distributionCutInput"></a>

```java
public GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut getDistributionCutInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCut</a>

---

##### `goodTotalRatioInput`<sup>Optional</sup> <a name="goodTotalRatioInput" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.property.goodTotalRatioInput"></a>

```java
public GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio getGoodTotalRatioInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceGoodTotalRatio</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformanceOutputReference.property.internalValue"></a>

```java
public GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdPerformance</a>

---


### GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference <a name="GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_monitoring_slo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference;

new GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.putRange">putRange</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRange` <a name="putRange" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.putRange"></a>

```java
public void putRange(GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRange value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.putRange.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRange">GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRange</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.property.range">range</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference">GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.property.rangeInput">rangeInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRange">GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.property.timeSeriesInput">timeSeriesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.property.timeSeries">timeSeries</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRange">GoogleMonitoringSloWindowsBasedSliMetricMeanInRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `range`<sup>Required</sup> <a name="range" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.property.range"></a>

```java
public GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference getRange();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference">GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference</a>

---

##### `rangeInput`<sup>Optional</sup> <a name="rangeInput" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.property.rangeInput"></a>

```java
public GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRange getRangeInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRange">GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRange</a>

---

##### `timeSeriesInput`<sup>Optional</sup> <a name="timeSeriesInput" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.property.timeSeriesInput"></a>

```java
public java.lang.String getTimeSeriesInput();
```

- *Type:* java.lang.String

---

##### `timeSeries`<sup>Required</sup> <a name="timeSeries" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.property.timeSeries"></a>

```java
public java.lang.String getTimeSeries();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference.property.internalValue"></a>

```java
public GoogleMonitoringSloWindowsBasedSliMetricMeanInRange getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRange">GoogleMonitoringSloWindowsBasedSliMetricMeanInRange</a>

---


### GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference <a name="GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_monitoring_slo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference;

new GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.resetMax">resetMax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.resetMin">resetMin</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMax` <a name="resetMax" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.resetMax"></a>

```java
public void resetMax()
```

##### `resetMin` <a name="resetMin" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.resetMin"></a>

```java
public void resetMin()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.property.maxInput">maxInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.property.minInput">minInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.property.max">max</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.property.min">min</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRange">GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxInput`<sup>Optional</sup> <a name="maxInput" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.property.maxInput"></a>

```java
public java.lang.Number getMaxInput();
```

- *Type:* java.lang.Number

---

##### `minInput`<sup>Optional</sup> <a name="minInput" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.property.minInput"></a>

```java
public java.lang.Number getMinInput();
```

- *Type:* java.lang.Number

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRangeOutputReference.property.internalValue"></a>

```java
public GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRange getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRange">GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeRange</a>

---


### GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference <a name="GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_monitoring_slo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference;

new GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.putRange">putRange</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRange` <a name="putRange" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.putRange"></a>

```java
public void putRange(GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRange value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.putRange.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRange">GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRange</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.property.range">range</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference">GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.property.rangeInput">rangeInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRange">GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.property.timeSeriesInput">timeSeriesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.property.timeSeries">timeSeries</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRange">GoogleMonitoringSloWindowsBasedSliMetricSumInRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `range`<sup>Required</sup> <a name="range" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.property.range"></a>

```java
public GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference getRange();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference">GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference</a>

---

##### `rangeInput`<sup>Optional</sup> <a name="rangeInput" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.property.rangeInput"></a>

```java
public GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRange getRangeInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRange">GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRange</a>

---

##### `timeSeriesInput`<sup>Optional</sup> <a name="timeSeriesInput" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.property.timeSeriesInput"></a>

```java
public java.lang.String getTimeSeriesInput();
```

- *Type:* java.lang.String

---

##### `timeSeries`<sup>Required</sup> <a name="timeSeries" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.property.timeSeries"></a>

```java
public java.lang.String getTimeSeries();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference.property.internalValue"></a>

```java
public GoogleMonitoringSloWindowsBasedSliMetricSumInRange getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRange">GoogleMonitoringSloWindowsBasedSliMetricSumInRange</a>

---


### GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference <a name="GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_monitoring_slo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference;

new GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.resetMax">resetMax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.resetMin">resetMin</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMax` <a name="resetMax" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.resetMax"></a>

```java
public void resetMax()
```

##### `resetMin` <a name="resetMin" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.resetMin"></a>

```java
public void resetMin()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.property.maxInput">maxInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.property.minInput">minInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.property.max">max</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.property.min">min</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRange">GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxInput`<sup>Optional</sup> <a name="maxInput" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.property.maxInput"></a>

```java
public java.lang.Number getMaxInput();
```

- *Type:* java.lang.Number

---

##### `minInput`<sup>Optional</sup> <a name="minInput" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.property.minInput"></a>

```java
public java.lang.Number getMinInput();
```

- *Type:* java.lang.Number

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRangeOutputReference.property.internalValue"></a>

```java
public GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRange getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRange">GoogleMonitoringSloWindowsBasedSliMetricSumInRangeRange</a>

---


### GoogleMonitoringSloWindowsBasedSliOutputReference <a name="GoogleMonitoringSloWindowsBasedSliOutputReference" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_monitoring_slo.GoogleMonitoringSloWindowsBasedSliOutputReference;

new GoogleMonitoringSloWindowsBasedSliOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.putGoodTotalRatioThreshold">putGoodTotalRatioThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.putMetricMeanInRange">putMetricMeanInRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.putMetricSumInRange">putMetricSumInRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.resetGoodBadMetricFilter">resetGoodBadMetricFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.resetGoodTotalRatioThreshold">resetGoodTotalRatioThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.resetMetricMeanInRange">resetMetricMeanInRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.resetMetricSumInRange">resetMetricSumInRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.resetWindowPeriod">resetWindowPeriod</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGoodTotalRatioThreshold` <a name="putGoodTotalRatioThreshold" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.putGoodTotalRatioThreshold"></a>

```java
public void putGoodTotalRatioThreshold(GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThreshold value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.putGoodTotalRatioThreshold.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThreshold">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThreshold</a>

---

##### `putMetricMeanInRange` <a name="putMetricMeanInRange" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.putMetricMeanInRange"></a>

```java
public void putMetricMeanInRange(GoogleMonitoringSloWindowsBasedSliMetricMeanInRange value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.putMetricMeanInRange.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRange">GoogleMonitoringSloWindowsBasedSliMetricMeanInRange</a>

---

##### `putMetricSumInRange` <a name="putMetricSumInRange" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.putMetricSumInRange"></a>

```java
public void putMetricSumInRange(GoogleMonitoringSloWindowsBasedSliMetricSumInRange value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.putMetricSumInRange.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRange">GoogleMonitoringSloWindowsBasedSliMetricSumInRange</a>

---

##### `resetGoodBadMetricFilter` <a name="resetGoodBadMetricFilter" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.resetGoodBadMetricFilter"></a>

```java
public void resetGoodBadMetricFilter()
```

##### `resetGoodTotalRatioThreshold` <a name="resetGoodTotalRatioThreshold" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.resetGoodTotalRatioThreshold"></a>

```java
public void resetGoodTotalRatioThreshold()
```

##### `resetMetricMeanInRange` <a name="resetMetricMeanInRange" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.resetMetricMeanInRange"></a>

```java
public void resetMetricMeanInRange()
```

##### `resetMetricSumInRange` <a name="resetMetricSumInRange" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.resetMetricSumInRange"></a>

```java
public void resetMetricSumInRange()
```

##### `resetWindowPeriod` <a name="resetWindowPeriod" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.resetWindowPeriod"></a>

```java
public void resetWindowPeriod()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.property.goodTotalRatioThreshold">goodTotalRatioThreshold</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.property.metricMeanInRange">metricMeanInRange</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference">GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.property.metricSumInRange">metricSumInRange</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference">GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.property.goodBadMetricFilterInput">goodBadMetricFilterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.property.goodTotalRatioThresholdInput">goodTotalRatioThresholdInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThreshold">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.property.metricMeanInRangeInput">metricMeanInRangeInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRange">GoogleMonitoringSloWindowsBasedSliMetricMeanInRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.property.metricSumInRangeInput">metricSumInRangeInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRange">GoogleMonitoringSloWindowsBasedSliMetricSumInRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.property.windowPeriodInput">windowPeriodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.property.goodBadMetricFilter">goodBadMetricFilter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.property.windowPeriod">windowPeriod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSli">GoogleMonitoringSloWindowsBasedSli</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `goodTotalRatioThreshold`<sup>Required</sup> <a name="goodTotalRatioThreshold" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.property.goodTotalRatioThreshold"></a>

```java
public GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference getGoodTotalRatioThreshold();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThresholdOutputReference</a>

---

##### `metricMeanInRange`<sup>Required</sup> <a name="metricMeanInRange" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.property.metricMeanInRange"></a>

```java
public GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference getMetricMeanInRange();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference">GoogleMonitoringSloWindowsBasedSliMetricMeanInRangeOutputReference</a>

---

##### `metricSumInRange`<sup>Required</sup> <a name="metricSumInRange" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.property.metricSumInRange"></a>

```java
public GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference getMetricSumInRange();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference">GoogleMonitoringSloWindowsBasedSliMetricSumInRangeOutputReference</a>

---

##### `goodBadMetricFilterInput`<sup>Optional</sup> <a name="goodBadMetricFilterInput" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.property.goodBadMetricFilterInput"></a>

```java
public java.lang.String getGoodBadMetricFilterInput();
```

- *Type:* java.lang.String

---

##### `goodTotalRatioThresholdInput`<sup>Optional</sup> <a name="goodTotalRatioThresholdInput" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.property.goodTotalRatioThresholdInput"></a>

```java
public GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThreshold getGoodTotalRatioThresholdInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThreshold">GoogleMonitoringSloWindowsBasedSliGoodTotalRatioThreshold</a>

---

##### `metricMeanInRangeInput`<sup>Optional</sup> <a name="metricMeanInRangeInput" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.property.metricMeanInRangeInput"></a>

```java
public GoogleMonitoringSloWindowsBasedSliMetricMeanInRange getMetricMeanInRangeInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricMeanInRange">GoogleMonitoringSloWindowsBasedSliMetricMeanInRange</a>

---

##### `metricSumInRangeInput`<sup>Optional</sup> <a name="metricSumInRangeInput" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.property.metricSumInRangeInput"></a>

```java
public GoogleMonitoringSloWindowsBasedSliMetricSumInRange getMetricSumInRangeInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliMetricSumInRange">GoogleMonitoringSloWindowsBasedSliMetricSumInRange</a>

---

##### `windowPeriodInput`<sup>Optional</sup> <a name="windowPeriodInput" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.property.windowPeriodInput"></a>

```java
public java.lang.String getWindowPeriodInput();
```

- *Type:* java.lang.String

---

##### `goodBadMetricFilter`<sup>Required</sup> <a name="goodBadMetricFilter" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.property.goodBadMetricFilter"></a>

```java
public java.lang.String getGoodBadMetricFilter();
```

- *Type:* java.lang.String

---

##### `windowPeriod`<sup>Required</sup> <a name="windowPeriod" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.property.windowPeriod"></a>

```java
public java.lang.String getWindowPeriod();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSliOutputReference.property.internalValue"></a>

```java
public GoogleMonitoringSloWindowsBasedSli getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringSlo.GoogleMonitoringSloWindowsBasedSli">GoogleMonitoringSloWindowsBasedSli</a>

---



