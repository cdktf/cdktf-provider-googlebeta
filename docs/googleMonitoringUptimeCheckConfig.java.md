# `googleMonitoringUptimeCheckConfig` Submodule <a name="`googleMonitoringUptimeCheckConfig` Submodule" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleMonitoringUptimeCheckConfig <a name="GoogleMonitoringUptimeCheckConfig" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_monitoring_uptime_check_config google_monitoring_uptime_check_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_monitoring_uptime_check_config.GoogleMonitoringUptimeCheckConfig;

GoogleMonitoringUptimeCheckConfig.Builder.create(Construct scope, java.lang.String id)
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
    .displayName(java.lang.String)
    .timeout(java.lang.String)
//  .checkerType(java.lang.String)
//  .contentMatchers(IResolvable)
//  .contentMatchers(java.util.List<GoogleMonitoringUptimeCheckConfigContentMatchers>)
//  .httpCheck(GoogleMonitoringUptimeCheckConfigHttpCheck)
//  .id(java.lang.String)
//  .monitoredResource(GoogleMonitoringUptimeCheckConfigMonitoredResource)
//  .period(java.lang.String)
//  .project(java.lang.String)
//  .resourceGroup(GoogleMonitoringUptimeCheckConfigResourceGroup)
//  .selectedRegions(java.util.List<java.lang.String>)
//  .syntheticMonitor(GoogleMonitoringUptimeCheckConfigSyntheticMonitor)
//  .tcpCheck(GoogleMonitoringUptimeCheckConfigTcpCheck)
//  .timeouts(GoogleMonitoringUptimeCheckConfigTimeouts)
//  .userLabels(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | A human-friendly name for the uptime check configuration. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.Initializer.parameter.timeout">timeout</a></code> | <code>java.lang.String</code> | The maximum amount of time to wait for the request to complete (must be between 1 and 60 seconds). |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.Initializer.parameter.checkerType">checkerType</a></code> | <code>java.lang.String</code> | The checker type to use for the check. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.Initializer.parameter.contentMatchers">contentMatchers</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchers">GoogleMonitoringUptimeCheckConfigContentMatchers</a>></code> | content_matchers block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.Initializer.parameter.httpCheck">httpCheck</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheck">GoogleMonitoringUptimeCheckConfigHttpCheck</a></code> | http_check block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_monitoring_uptime_check_config#id GoogleMonitoringUptimeCheckConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.Initializer.parameter.monitoredResource">monitoredResource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResource">GoogleMonitoringUptimeCheckConfigMonitoredResource</a></code> | monitored_resource block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.Initializer.parameter.period">period</a></code> | <code>java.lang.String</code> | How often, in seconds, the uptime check is performed. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_monitoring_uptime_check_config#project GoogleMonitoringUptimeCheckConfig#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.Initializer.parameter.resourceGroup">resourceGroup</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroup">GoogleMonitoringUptimeCheckConfigResourceGroup</a></code> | resource_group block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.Initializer.parameter.selectedRegions">selectedRegions</a></code> | <code>java.util.List<java.lang.String></code> | The list of regions from which the check will be run. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.Initializer.parameter.syntheticMonitor">syntheticMonitor</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitor">GoogleMonitoringUptimeCheckConfigSyntheticMonitor</a></code> | synthetic_monitor block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.Initializer.parameter.tcpCheck">tcpCheck</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheck">GoogleMonitoringUptimeCheckConfigTcpCheck</a></code> | tcp_check block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeouts">GoogleMonitoringUptimeCheckConfigTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.Initializer.parameter.userLabels">userLabels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | User-supplied key/value data to be used for organizing and identifying the 'UptimeCheckConfig' objects. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

A human-friendly name for the uptime check configuration.

The display name should be unique within a Stackdriver Workspace in order to make it easier to identify; however, uniqueness is not enforced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_monitoring_uptime_check_config#display_name GoogleMonitoringUptimeCheckConfig#display_name}

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.Initializer.parameter.timeout"></a>

- *Type:* java.lang.String

The maximum amount of time to wait for the request to complete (must be between 1 and 60 seconds).

[See the accepted formats](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.Duration)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_monitoring_uptime_check_config#timeout GoogleMonitoringUptimeCheckConfig#timeout}

---

##### `checkerType`<sup>Optional</sup> <a name="checkerType" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.Initializer.parameter.checkerType"></a>

- *Type:* java.lang.String

The checker type to use for the check.

If the monitored resource type is 'servicedirectory_service', 'checker_type' must be set to 'VPC_CHECKERS'. Possible values: ["STATIC_IP_CHECKERS", "VPC_CHECKERS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_monitoring_uptime_check_config#checker_type GoogleMonitoringUptimeCheckConfig#checker_type}

---

##### `contentMatchers`<sup>Optional</sup> <a name="contentMatchers" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.Initializer.parameter.contentMatchers"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchers">GoogleMonitoringUptimeCheckConfigContentMatchers</a>>

content_matchers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_monitoring_uptime_check_config#content_matchers GoogleMonitoringUptimeCheckConfig#content_matchers}

---

##### `httpCheck`<sup>Optional</sup> <a name="httpCheck" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.Initializer.parameter.httpCheck"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheck">GoogleMonitoringUptimeCheckConfigHttpCheck</a>

http_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_monitoring_uptime_check_config#http_check GoogleMonitoringUptimeCheckConfig#http_check}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_monitoring_uptime_check_config#id GoogleMonitoringUptimeCheckConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `monitoredResource`<sup>Optional</sup> <a name="monitoredResource" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.Initializer.parameter.monitoredResource"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResource">GoogleMonitoringUptimeCheckConfigMonitoredResource</a>

monitored_resource block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_monitoring_uptime_check_config#monitored_resource GoogleMonitoringUptimeCheckConfig#monitored_resource}

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.Initializer.parameter.period"></a>

- *Type:* java.lang.String

How often, in seconds, the uptime check is performed.

Currently, the only supported values are 60s (1 minute), 300s (5 minutes), 600s (10 minutes), and 900s (15 minutes). Optional, defaults to 300s.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_monitoring_uptime_check_config#period GoogleMonitoringUptimeCheckConfig#period}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_monitoring_uptime_check_config#project GoogleMonitoringUptimeCheckConfig#project}.

---

##### `resourceGroup`<sup>Optional</sup> <a name="resourceGroup" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.Initializer.parameter.resourceGroup"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroup">GoogleMonitoringUptimeCheckConfigResourceGroup</a>

resource_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_monitoring_uptime_check_config#resource_group GoogleMonitoringUptimeCheckConfig#resource_group}

---

##### `selectedRegions`<sup>Optional</sup> <a name="selectedRegions" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.Initializer.parameter.selectedRegions"></a>

- *Type:* java.util.List<java.lang.String>

The list of regions from which the check will be run.

Some regions contain one location, and others contain more than one. If this field is specified, enough regions to include a minimum of 3 locations must be provided, or an error message is returned. Not specifying this field will result in uptime checks running from all regions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_monitoring_uptime_check_config#selected_regions GoogleMonitoringUptimeCheckConfig#selected_regions}

---

##### `syntheticMonitor`<sup>Optional</sup> <a name="syntheticMonitor" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.Initializer.parameter.syntheticMonitor"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitor">GoogleMonitoringUptimeCheckConfigSyntheticMonitor</a>

synthetic_monitor block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_monitoring_uptime_check_config#synthetic_monitor GoogleMonitoringUptimeCheckConfig#synthetic_monitor}

---

##### `tcpCheck`<sup>Optional</sup> <a name="tcpCheck" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.Initializer.parameter.tcpCheck"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheck">GoogleMonitoringUptimeCheckConfigTcpCheck</a>

tcp_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_monitoring_uptime_check_config#tcp_check GoogleMonitoringUptimeCheckConfig#tcp_check}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeouts">GoogleMonitoringUptimeCheckConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_monitoring_uptime_check_config#timeouts GoogleMonitoringUptimeCheckConfig#timeouts}

---

##### `userLabels`<sup>Optional</sup> <a name="userLabels" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.Initializer.parameter.userLabels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

User-supplied key/value data to be used for organizing and identifying the 'UptimeCheckConfig' objects.

The field can contain up to 64 entries. Each key and value is limited to 63 Unicode characters or 128 bytes, whichever is smaller. Labels and values can contain only lowercase letters, numerals, underscores, and dashes. Keys must begin with a letter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_monitoring_uptime_check_config#user_labels GoogleMonitoringUptimeCheckConfig#user_labels}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.putContentMatchers">putContentMatchers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.putHttpCheck">putHttpCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.putMonitoredResource">putMonitoredResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.putResourceGroup">putResourceGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.putSyntheticMonitor">putSyntheticMonitor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.putTcpCheck">putTcpCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.resetCheckerType">resetCheckerType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.resetContentMatchers">resetContentMatchers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.resetHttpCheck">resetHttpCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.resetMonitoredResource">resetMonitoredResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.resetPeriod">resetPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.resetResourceGroup">resetResourceGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.resetSelectedRegions">resetSelectedRegions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.resetSyntheticMonitor">resetSyntheticMonitor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.resetTcpCheck">resetTcpCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.resetUserLabels">resetUserLabels</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putContentMatchers` <a name="putContentMatchers" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.putContentMatchers"></a>

```java
public void putContentMatchers(IResolvable OR java.util.List<GoogleMonitoringUptimeCheckConfigContentMatchers> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.putContentMatchers.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchers">GoogleMonitoringUptimeCheckConfigContentMatchers</a>>

---

##### `putHttpCheck` <a name="putHttpCheck" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.putHttpCheck"></a>

```java
public void putHttpCheck(GoogleMonitoringUptimeCheckConfigHttpCheck value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.putHttpCheck.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheck">GoogleMonitoringUptimeCheckConfigHttpCheck</a>

---

##### `putMonitoredResource` <a name="putMonitoredResource" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.putMonitoredResource"></a>

```java
public void putMonitoredResource(GoogleMonitoringUptimeCheckConfigMonitoredResource value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.putMonitoredResource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResource">GoogleMonitoringUptimeCheckConfigMonitoredResource</a>

---

##### `putResourceGroup` <a name="putResourceGroup" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.putResourceGroup"></a>

```java
public void putResourceGroup(GoogleMonitoringUptimeCheckConfigResourceGroup value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.putResourceGroup.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroup">GoogleMonitoringUptimeCheckConfigResourceGroup</a>

---

##### `putSyntheticMonitor` <a name="putSyntheticMonitor" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.putSyntheticMonitor"></a>

```java
public void putSyntheticMonitor(GoogleMonitoringUptimeCheckConfigSyntheticMonitor value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.putSyntheticMonitor.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitor">GoogleMonitoringUptimeCheckConfigSyntheticMonitor</a>

---

##### `putTcpCheck` <a name="putTcpCheck" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.putTcpCheck"></a>

```java
public void putTcpCheck(GoogleMonitoringUptimeCheckConfigTcpCheck value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.putTcpCheck.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheck">GoogleMonitoringUptimeCheckConfigTcpCheck</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.putTimeouts"></a>

```java
public void putTimeouts(GoogleMonitoringUptimeCheckConfigTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeouts">GoogleMonitoringUptimeCheckConfigTimeouts</a>

---

##### `resetCheckerType` <a name="resetCheckerType" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.resetCheckerType"></a>

```java
public void resetCheckerType()
```

##### `resetContentMatchers` <a name="resetContentMatchers" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.resetContentMatchers"></a>

```java
public void resetContentMatchers()
```

##### `resetHttpCheck` <a name="resetHttpCheck" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.resetHttpCheck"></a>

```java
public void resetHttpCheck()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.resetId"></a>

```java
public void resetId()
```

##### `resetMonitoredResource` <a name="resetMonitoredResource" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.resetMonitoredResource"></a>

```java
public void resetMonitoredResource()
```

##### `resetPeriod` <a name="resetPeriod" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.resetPeriod"></a>

```java
public void resetPeriod()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.resetProject"></a>

```java
public void resetProject()
```

##### `resetResourceGroup` <a name="resetResourceGroup" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.resetResourceGroup"></a>

```java
public void resetResourceGroup()
```

##### `resetSelectedRegions` <a name="resetSelectedRegions" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.resetSelectedRegions"></a>

```java
public void resetSelectedRegions()
```

##### `resetSyntheticMonitor` <a name="resetSyntheticMonitor" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.resetSyntheticMonitor"></a>

```java
public void resetSyntheticMonitor()
```

##### `resetTcpCheck` <a name="resetTcpCheck" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.resetTcpCheck"></a>

```java
public void resetTcpCheck()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetUserLabels` <a name="resetUserLabels" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.resetUserLabels"></a>

```java
public void resetUserLabels()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleMonitoringUptimeCheckConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_monitoring_uptime_check_config.GoogleMonitoringUptimeCheckConfig;

GoogleMonitoringUptimeCheckConfig.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_monitoring_uptime_check_config.GoogleMonitoringUptimeCheckConfig;

GoogleMonitoringUptimeCheckConfig.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_monitoring_uptime_check_config.GoogleMonitoringUptimeCheckConfig;

GoogleMonitoringUptimeCheckConfig.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_monitoring_uptime_check_config.GoogleMonitoringUptimeCheckConfig;

GoogleMonitoringUptimeCheckConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleMonitoringUptimeCheckConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleMonitoringUptimeCheckConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleMonitoringUptimeCheckConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleMonitoringUptimeCheckConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_monitoring_uptime_check_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleMonitoringUptimeCheckConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.contentMatchers">contentMatchers</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersList">GoogleMonitoringUptimeCheckConfigContentMatchersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.httpCheck">httpCheck</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference">GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.monitoredResource">monitoredResource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference">GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.resourceGroup">resourceGroup</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference">GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.syntheticMonitor">syntheticMonitor</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference">GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.tcpCheck">tcpCheck</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference">GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference">GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.uptimeCheckId">uptimeCheckId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.checkerTypeInput">checkerTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.contentMatchersInput">contentMatchersInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchers">GoogleMonitoringUptimeCheckConfigContentMatchers</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.httpCheckInput">httpCheckInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheck">GoogleMonitoringUptimeCheckConfigHttpCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.monitoredResourceInput">monitoredResourceInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResource">GoogleMonitoringUptimeCheckConfigMonitoredResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.periodInput">periodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.resourceGroupInput">resourceGroupInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroup">GoogleMonitoringUptimeCheckConfigResourceGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.selectedRegionsInput">selectedRegionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.syntheticMonitorInput">syntheticMonitorInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitor">GoogleMonitoringUptimeCheckConfigSyntheticMonitor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.tcpCheckInput">tcpCheckInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheck">GoogleMonitoringUptimeCheckConfigTcpCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.timeoutInput">timeoutInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeouts">GoogleMonitoringUptimeCheckConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.userLabelsInput">userLabelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.checkerType">checkerType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.period">period</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.selectedRegions">selectedRegions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.timeout">timeout</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.userLabels">userLabels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `contentMatchers`<sup>Required</sup> <a name="contentMatchers" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.contentMatchers"></a>

```java
public GoogleMonitoringUptimeCheckConfigContentMatchersList getContentMatchers();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersList">GoogleMonitoringUptimeCheckConfigContentMatchersList</a>

---

##### `httpCheck`<sup>Required</sup> <a name="httpCheck" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.httpCheck"></a>

```java
public GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference getHttpCheck();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference">GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference</a>

---

##### `monitoredResource`<sup>Required</sup> <a name="monitoredResource" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.monitoredResource"></a>

```java
public GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference getMonitoredResource();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference">GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resourceGroup`<sup>Required</sup> <a name="resourceGroup" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.resourceGroup"></a>

```java
public GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference getResourceGroup();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference">GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference</a>

---

##### `syntheticMonitor`<sup>Required</sup> <a name="syntheticMonitor" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.syntheticMonitor"></a>

```java
public GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference getSyntheticMonitor();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference">GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference</a>

---

##### `tcpCheck`<sup>Required</sup> <a name="tcpCheck" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.tcpCheck"></a>

```java
public GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference getTcpCheck();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference">GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.timeouts"></a>

```java
public GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference">GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference</a>

---

##### `uptimeCheckId`<sup>Required</sup> <a name="uptimeCheckId" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.uptimeCheckId"></a>

```java
public java.lang.String getUptimeCheckId();
```

- *Type:* java.lang.String

---

##### `checkerTypeInput`<sup>Optional</sup> <a name="checkerTypeInput" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.checkerTypeInput"></a>

```java
public java.lang.String getCheckerTypeInput();
```

- *Type:* java.lang.String

---

##### `contentMatchersInput`<sup>Optional</sup> <a name="contentMatchersInput" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.contentMatchersInput"></a>

```java
public java.lang.Object getContentMatchersInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchers">GoogleMonitoringUptimeCheckConfigContentMatchers</a>>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `httpCheckInput`<sup>Optional</sup> <a name="httpCheckInput" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.httpCheckInput"></a>

```java
public GoogleMonitoringUptimeCheckConfigHttpCheck getHttpCheckInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheck">GoogleMonitoringUptimeCheckConfigHttpCheck</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `monitoredResourceInput`<sup>Optional</sup> <a name="monitoredResourceInput" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.monitoredResourceInput"></a>

```java
public GoogleMonitoringUptimeCheckConfigMonitoredResource getMonitoredResourceInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResource">GoogleMonitoringUptimeCheckConfigMonitoredResource</a>

---

##### `periodInput`<sup>Optional</sup> <a name="periodInput" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.periodInput"></a>

```java
public java.lang.String getPeriodInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupInput`<sup>Optional</sup> <a name="resourceGroupInput" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.resourceGroupInput"></a>

```java
public GoogleMonitoringUptimeCheckConfigResourceGroup getResourceGroupInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroup">GoogleMonitoringUptimeCheckConfigResourceGroup</a>

---

##### `selectedRegionsInput`<sup>Optional</sup> <a name="selectedRegionsInput" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.selectedRegionsInput"></a>

```java
public java.util.List<java.lang.String> getSelectedRegionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `syntheticMonitorInput`<sup>Optional</sup> <a name="syntheticMonitorInput" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.syntheticMonitorInput"></a>

```java
public GoogleMonitoringUptimeCheckConfigSyntheticMonitor getSyntheticMonitorInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitor">GoogleMonitoringUptimeCheckConfigSyntheticMonitor</a>

---

##### `tcpCheckInput`<sup>Optional</sup> <a name="tcpCheckInput" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.tcpCheckInput"></a>

```java
public GoogleMonitoringUptimeCheckConfigTcpCheck getTcpCheckInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheck">GoogleMonitoringUptimeCheckConfigTcpCheck</a>

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.timeoutInput"></a>

```java
public java.lang.String getTimeoutInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeouts">GoogleMonitoringUptimeCheckConfigTimeouts</a>

---

##### `userLabelsInput`<sup>Optional</sup> <a name="userLabelsInput" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.userLabelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getUserLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `checkerType`<sup>Required</sup> <a name="checkerType" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.checkerType"></a>

```java
public java.lang.String getCheckerType();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.period"></a>

```java
public java.lang.String getPeriod();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `selectedRegions`<sup>Required</sup> <a name="selectedRegions" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.selectedRegions"></a>

```java
public java.util.List<java.lang.String> getSelectedRegions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.timeout"></a>

```java
public java.lang.String getTimeout();
```

- *Type:* java.lang.String

---

##### `userLabels`<sup>Required</sup> <a name="userLabels" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.userLabels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getUserLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleMonitoringUptimeCheckConfigConfig <a name="GoogleMonitoringUptimeCheckConfigConfig" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_monitoring_uptime_check_config.GoogleMonitoringUptimeCheckConfigConfig;

GoogleMonitoringUptimeCheckConfigConfig.builder()
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
    .displayName(java.lang.String)
    .timeout(java.lang.String)
//  .checkerType(java.lang.String)
//  .contentMatchers(IResolvable)
//  .contentMatchers(java.util.List<GoogleMonitoringUptimeCheckConfigContentMatchers>)
//  .httpCheck(GoogleMonitoringUptimeCheckConfigHttpCheck)
//  .id(java.lang.String)
//  .monitoredResource(GoogleMonitoringUptimeCheckConfigMonitoredResource)
//  .period(java.lang.String)
//  .project(java.lang.String)
//  .resourceGroup(GoogleMonitoringUptimeCheckConfigResourceGroup)
//  .selectedRegions(java.util.List<java.lang.String>)
//  .syntheticMonitor(GoogleMonitoringUptimeCheckConfigSyntheticMonitor)
//  .tcpCheck(GoogleMonitoringUptimeCheckConfigTcpCheck)
//  .timeouts(GoogleMonitoringUptimeCheckConfigTimeouts)
//  .userLabels(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | A human-friendly name for the uptime check configuration. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.property.timeout">timeout</a></code> | <code>java.lang.String</code> | The maximum amount of time to wait for the request to complete (must be between 1 and 60 seconds). |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.property.checkerType">checkerType</a></code> | <code>java.lang.String</code> | The checker type to use for the check. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.property.contentMatchers">contentMatchers</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchers">GoogleMonitoringUptimeCheckConfigContentMatchers</a>></code> | content_matchers block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.property.httpCheck">httpCheck</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheck">GoogleMonitoringUptimeCheckConfigHttpCheck</a></code> | http_check block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_monitoring_uptime_check_config#id GoogleMonitoringUptimeCheckConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.property.monitoredResource">monitoredResource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResource">GoogleMonitoringUptimeCheckConfigMonitoredResource</a></code> | monitored_resource block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.property.period">period</a></code> | <code>java.lang.String</code> | How often, in seconds, the uptime check is performed. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_monitoring_uptime_check_config#project GoogleMonitoringUptimeCheckConfig#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.property.resourceGroup">resourceGroup</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroup">GoogleMonitoringUptimeCheckConfigResourceGroup</a></code> | resource_group block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.property.selectedRegions">selectedRegions</a></code> | <code>java.util.List<java.lang.String></code> | The list of regions from which the check will be run. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.property.syntheticMonitor">syntheticMonitor</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitor">GoogleMonitoringUptimeCheckConfigSyntheticMonitor</a></code> | synthetic_monitor block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.property.tcpCheck">tcpCheck</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheck">GoogleMonitoringUptimeCheckConfigTcpCheck</a></code> | tcp_check block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeouts">GoogleMonitoringUptimeCheckConfigTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.property.userLabels">userLabels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | User-supplied key/value data to be used for organizing and identifying the 'UptimeCheckConfig' objects. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

A human-friendly name for the uptime check configuration.

The display name should be unique within a Stackdriver Workspace in order to make it easier to identify; however, uniqueness is not enforced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_monitoring_uptime_check_config#display_name GoogleMonitoringUptimeCheckConfig#display_name}

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.property.timeout"></a>

```java
public java.lang.String getTimeout();
```

- *Type:* java.lang.String

The maximum amount of time to wait for the request to complete (must be between 1 and 60 seconds).

[See the accepted formats](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.Duration)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_monitoring_uptime_check_config#timeout GoogleMonitoringUptimeCheckConfig#timeout}

---

##### `checkerType`<sup>Optional</sup> <a name="checkerType" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.property.checkerType"></a>

```java
public java.lang.String getCheckerType();
```

- *Type:* java.lang.String

The checker type to use for the check.

If the monitored resource type is 'servicedirectory_service', 'checker_type' must be set to 'VPC_CHECKERS'. Possible values: ["STATIC_IP_CHECKERS", "VPC_CHECKERS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_monitoring_uptime_check_config#checker_type GoogleMonitoringUptimeCheckConfig#checker_type}

---

##### `contentMatchers`<sup>Optional</sup> <a name="contentMatchers" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.property.contentMatchers"></a>

```java
public java.lang.Object getContentMatchers();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchers">GoogleMonitoringUptimeCheckConfigContentMatchers</a>>

content_matchers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_monitoring_uptime_check_config#content_matchers GoogleMonitoringUptimeCheckConfig#content_matchers}

---

##### `httpCheck`<sup>Optional</sup> <a name="httpCheck" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.property.httpCheck"></a>

```java
public GoogleMonitoringUptimeCheckConfigHttpCheck getHttpCheck();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheck">GoogleMonitoringUptimeCheckConfigHttpCheck</a>

http_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_monitoring_uptime_check_config#http_check GoogleMonitoringUptimeCheckConfig#http_check}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_monitoring_uptime_check_config#id GoogleMonitoringUptimeCheckConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `monitoredResource`<sup>Optional</sup> <a name="monitoredResource" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.property.monitoredResource"></a>

```java
public GoogleMonitoringUptimeCheckConfigMonitoredResource getMonitoredResource();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResource">GoogleMonitoringUptimeCheckConfigMonitoredResource</a>

monitored_resource block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_monitoring_uptime_check_config#monitored_resource GoogleMonitoringUptimeCheckConfig#monitored_resource}

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.property.period"></a>

```java
public java.lang.String getPeriod();
```

- *Type:* java.lang.String

How often, in seconds, the uptime check is performed.

Currently, the only supported values are 60s (1 minute), 300s (5 minutes), 600s (10 minutes), and 900s (15 minutes). Optional, defaults to 300s.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_monitoring_uptime_check_config#period GoogleMonitoringUptimeCheckConfig#period}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_monitoring_uptime_check_config#project GoogleMonitoringUptimeCheckConfig#project}.

---

##### `resourceGroup`<sup>Optional</sup> <a name="resourceGroup" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.property.resourceGroup"></a>

```java
public GoogleMonitoringUptimeCheckConfigResourceGroup getResourceGroup();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroup">GoogleMonitoringUptimeCheckConfigResourceGroup</a>

resource_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_monitoring_uptime_check_config#resource_group GoogleMonitoringUptimeCheckConfig#resource_group}

---

##### `selectedRegions`<sup>Optional</sup> <a name="selectedRegions" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.property.selectedRegions"></a>

```java
public java.util.List<java.lang.String> getSelectedRegions();
```

- *Type:* java.util.List<java.lang.String>

The list of regions from which the check will be run.

Some regions contain one location, and others contain more than one. If this field is specified, enough regions to include a minimum of 3 locations must be provided, or an error message is returned. Not specifying this field will result in uptime checks running from all regions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_monitoring_uptime_check_config#selected_regions GoogleMonitoringUptimeCheckConfig#selected_regions}

---

##### `syntheticMonitor`<sup>Optional</sup> <a name="syntheticMonitor" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.property.syntheticMonitor"></a>

```java
public GoogleMonitoringUptimeCheckConfigSyntheticMonitor getSyntheticMonitor();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitor">GoogleMonitoringUptimeCheckConfigSyntheticMonitor</a>

synthetic_monitor block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_monitoring_uptime_check_config#synthetic_monitor GoogleMonitoringUptimeCheckConfig#synthetic_monitor}

---

##### `tcpCheck`<sup>Optional</sup> <a name="tcpCheck" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.property.tcpCheck"></a>

```java
public GoogleMonitoringUptimeCheckConfigTcpCheck getTcpCheck();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheck">GoogleMonitoringUptimeCheckConfigTcpCheck</a>

tcp_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_monitoring_uptime_check_config#tcp_check GoogleMonitoringUptimeCheckConfig#tcp_check}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.property.timeouts"></a>

```java
public GoogleMonitoringUptimeCheckConfigTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeouts">GoogleMonitoringUptimeCheckConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_monitoring_uptime_check_config#timeouts GoogleMonitoringUptimeCheckConfig#timeouts}

---

##### `userLabels`<sup>Optional</sup> <a name="userLabels" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.property.userLabels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getUserLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

User-supplied key/value data to be used for organizing and identifying the 'UptimeCheckConfig' objects.

The field can contain up to 64 entries. Each key and value is limited to 63 Unicode characters or 128 bytes, whichever is smaller. Labels and values can contain only lowercase letters, numerals, underscores, and dashes. Keys must begin with a letter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_monitoring_uptime_check_config#user_labels GoogleMonitoringUptimeCheckConfig#user_labels}

---

### GoogleMonitoringUptimeCheckConfigContentMatchers <a name="GoogleMonitoringUptimeCheckConfigContentMatchers" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchers.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_monitoring_uptime_check_config.GoogleMonitoringUptimeCheckConfigContentMatchers;

GoogleMonitoringUptimeCheckConfigContentMatchers.builder()
    .content(java.lang.String)
//  .jsonPathMatcher(GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcher)
//  .matcher(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchers.property.content">content</a></code> | <code>java.lang.String</code> | String or regex content to match (max 1024 bytes). |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchers.property.jsonPathMatcher">jsonPathMatcher</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcher">GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcher</a></code> | json_path_matcher block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchers.property.matcher">matcher</a></code> | <code>java.lang.String</code> | The type of content matcher that will be applied to the server output, compared to the content string when the check is run. |

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchers.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

String or regex content to match (max 1024 bytes).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_monitoring_uptime_check_config#content GoogleMonitoringUptimeCheckConfig#content}

---

##### `jsonPathMatcher`<sup>Optional</sup> <a name="jsonPathMatcher" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchers.property.jsonPathMatcher"></a>

```java
public GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcher getJsonPathMatcher();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcher">GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcher</a>

json_path_matcher block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_monitoring_uptime_check_config#json_path_matcher GoogleMonitoringUptimeCheckConfig#json_path_matcher}

---

##### `matcher`<sup>Optional</sup> <a name="matcher" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchers.property.matcher"></a>

```java
public java.lang.String getMatcher();
```

- *Type:* java.lang.String

The type of content matcher that will be applied to the server output, compared to the content string when the check is run.

Default value: "CONTAINS_STRING" Possible values: ["CONTAINS_STRING", "NOT_CONTAINS_STRING", "MATCHES_REGEX", "NOT_MATCHES_REGEX", "MATCHES_JSON_PATH", "NOT_MATCHES_JSON_PATH"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_monitoring_uptime_check_config#matcher GoogleMonitoringUptimeCheckConfig#matcher}

---

### GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcher <a name="GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcher" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcher"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcher.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_monitoring_uptime_check_config.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcher;

GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcher.builder()
    .jsonPath(java.lang.String)
//  .jsonMatcher(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcher.property.jsonPath">jsonPath</a></code> | <code>java.lang.String</code> | JSONPath within the response output pointing to the expected 'ContentMatcher::content' to match against. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcher.property.jsonMatcher">jsonMatcher</a></code> | <code>java.lang.String</code> | Options to perform JSONPath content matching. Default value: "EXACT_MATCH" Possible values: ["EXACT_MATCH", "REGEX_MATCH"]. |

---

##### `jsonPath`<sup>Required</sup> <a name="jsonPath" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcher.property.jsonPath"></a>

```java
public java.lang.String getJsonPath();
```

- *Type:* java.lang.String

JSONPath within the response output pointing to the expected 'ContentMatcher::content' to match against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_monitoring_uptime_check_config#json_path GoogleMonitoringUptimeCheckConfig#json_path}

---

##### `jsonMatcher`<sup>Optional</sup> <a name="jsonMatcher" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcher.property.jsonMatcher"></a>

```java
public java.lang.String getJsonMatcher();
```

- *Type:* java.lang.String

Options to perform JSONPath content matching. Default value: "EXACT_MATCH" Possible values: ["EXACT_MATCH", "REGEX_MATCH"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_monitoring_uptime_check_config#json_matcher GoogleMonitoringUptimeCheckConfig#json_matcher}

---

### GoogleMonitoringUptimeCheckConfigHttpCheck <a name="GoogleMonitoringUptimeCheckConfigHttpCheck" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheck.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_monitoring_uptime_check_config.GoogleMonitoringUptimeCheckConfigHttpCheck;

GoogleMonitoringUptimeCheckConfigHttpCheck.builder()
//  .acceptedResponseStatusCodes(IResolvable)
//  .acceptedResponseStatusCodes(java.util.List<GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodes>)
//  .authInfo(GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfo)
//  .body(java.lang.String)
//  .contentType(java.lang.String)
//  .customContentType(java.lang.String)
//  .headers(java.util.Map<java.lang.String, java.lang.String>)
//  .maskHeaders(java.lang.Boolean)
//  .maskHeaders(IResolvable)
//  .path(java.lang.String)
//  .pingConfig(GoogleMonitoringUptimeCheckConfigHttpCheckPingConfig)
//  .port(java.lang.Number)
//  .requestMethod(java.lang.String)
//  .serviceAgentAuthentication(GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthentication)
//  .useSsl(java.lang.Boolean)
//  .useSsl(IResolvable)
//  .validateSsl(java.lang.Boolean)
//  .validateSsl(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheck.property.acceptedResponseStatusCodes">acceptedResponseStatusCodes</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodes">GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodes</a>></code> | accepted_response_status_codes block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheck.property.authInfo">authInfo</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfo">GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfo</a></code> | auth_info block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheck.property.body">body</a></code> | <code>java.lang.String</code> | The request body associated with the HTTP POST request. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheck.property.contentType">contentType</a></code> | <code>java.lang.String</code> | The content type to use for the check. Possible values: ["TYPE_UNSPECIFIED", "URL_ENCODED", "USER_PROVIDED"]. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheck.property.customContentType">customContentType</a></code> | <code>java.lang.String</code> | A user provided content type header to use for the check. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheck.property.headers">headers</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The list of headers to send as part of the uptime check request. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheck.property.maskHeaders">maskHeaders</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Boolean specifying whether to encrypt the header information. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheck.property.path">path</a></code> | <code>java.lang.String</code> | The path to the page to run the check against. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheck.property.pingConfig">pingConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfig">GoogleMonitoringUptimeCheckConfigHttpCheckPingConfig</a></code> | ping_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheck.property.port">port</a></code> | <code>java.lang.Number</code> | The port to the page to run the check against. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheck.property.requestMethod">requestMethod</a></code> | <code>java.lang.String</code> | The HTTP request method to use for the check. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheck.property.serviceAgentAuthentication">serviceAgentAuthentication</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthentication">GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthentication</a></code> | service_agent_authentication block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheck.property.useSsl">useSsl</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, use HTTPS instead of HTTP to run the check. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheck.property.validateSsl">validateSsl</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Boolean specifying whether to include SSL certificate validation as a part of the Uptime check. |

---

##### `acceptedResponseStatusCodes`<sup>Optional</sup> <a name="acceptedResponseStatusCodes" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheck.property.acceptedResponseStatusCodes"></a>

```java
public java.lang.Object getAcceptedResponseStatusCodes();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodes">GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodes</a>>

accepted_response_status_codes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_monitoring_uptime_check_config#accepted_response_status_codes GoogleMonitoringUptimeCheckConfig#accepted_response_status_codes}

---

##### `authInfo`<sup>Optional</sup> <a name="authInfo" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheck.property.authInfo"></a>

```java
public GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfo getAuthInfo();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfo">GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfo</a>

auth_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_monitoring_uptime_check_config#auth_info GoogleMonitoringUptimeCheckConfig#auth_info}

---

##### `body`<sup>Optional</sup> <a name="body" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheck.property.body"></a>

```java
public java.lang.String getBody();
```

- *Type:* java.lang.String

The request body associated with the HTTP POST request.

If 'content_type' is 'URL_ENCODED', the body passed in must be URL-encoded. Users can provide a 'Content-Length' header via the 'headers' field or the API will do so. If the 'request_method' is 'GET' and 'body' is not empty, the API will return an error. The maximum byte size is 1 megabyte. Note - As with all bytes fields JSON representations are base64 encoded. e.g. 'foo=bar' in URL-encoded form is 'foo%3Dbar' and in base64 encoding is 'Zm9vJTI1M0RiYXI='.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_monitoring_uptime_check_config#body GoogleMonitoringUptimeCheckConfig#body}

---

##### `contentType`<sup>Optional</sup> <a name="contentType" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheck.property.contentType"></a>

```java
public java.lang.String getContentType();
```

- *Type:* java.lang.String

The content type to use for the check. Possible values: ["TYPE_UNSPECIFIED", "URL_ENCODED", "USER_PROVIDED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_monitoring_uptime_check_config#content_type GoogleMonitoringUptimeCheckConfig#content_type}

---

##### `customContentType`<sup>Optional</sup> <a name="customContentType" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheck.property.customContentType"></a>

```java
public java.lang.String getCustomContentType();
```

- *Type:* java.lang.String

A user provided content type header to use for the check.

The invalid configurations outlined in the 'content_type' field apply to custom_content_type', as well as the following 1. 'content_type' is 'URL_ENCODED' and 'custom_content_type' is set. 2. 'content_type' is 'USER_PROVIDED' and 'custom_content_type' is not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_monitoring_uptime_check_config#custom_content_type GoogleMonitoringUptimeCheckConfig#custom_content_type}

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheck.property.headers"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getHeaders();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The list of headers to send as part of the uptime check request.

If two headers have the same key and different values, they should be entered as a single header, with the value being a comma-separated list of all the desired values as described in [RFC 2616 (page 31)](https://www.w3.org/Protocols/rfc2616/rfc2616.txt). Entering two separate headers with the same key in a Create call will cause the first to be overwritten by the second. The maximum number of headers allowed is 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_monitoring_uptime_check_config#headers GoogleMonitoringUptimeCheckConfig#headers}

---

##### `maskHeaders`<sup>Optional</sup> <a name="maskHeaders" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheck.property.maskHeaders"></a>

```java
public java.lang.Object getMaskHeaders();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Boolean specifying whether to encrypt the header information.

Encryption should be specified for any headers related to authentication that you do not wish to be seen when retrieving the configuration. The server will be responsible for encrypting the headers. On Get/List calls, if 'mask_headers' is set to 'true' then the headers will be obscured with '******'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_monitoring_uptime_check_config#mask_headers GoogleMonitoringUptimeCheckConfig#mask_headers}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheck.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

The path to the page to run the check against.

Will be combined with the host (specified within the MonitoredResource) and port to construct the full URL. If the provided path does not begin with '/', a '/' will be prepended automatically. Optional (defaults to '/').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_monitoring_uptime_check_config#path GoogleMonitoringUptimeCheckConfig#path}

---

##### `pingConfig`<sup>Optional</sup> <a name="pingConfig" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheck.property.pingConfig"></a>

```java
public GoogleMonitoringUptimeCheckConfigHttpCheckPingConfig getPingConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfig">GoogleMonitoringUptimeCheckConfigHttpCheckPingConfig</a>

ping_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_monitoring_uptime_check_config#ping_config GoogleMonitoringUptimeCheckConfig#ping_config}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheck.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

The port to the page to run the check against.

Will be combined with 'host' (specified within the ['monitored_resource'](#nested_monitored_resource)) and path to construct the full URL. Optional (defaults to 80 without SSL, or 443 with SSL).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_monitoring_uptime_check_config#port GoogleMonitoringUptimeCheckConfig#port}

---

##### `requestMethod`<sup>Optional</sup> <a name="requestMethod" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheck.property.requestMethod"></a>

```java
public java.lang.String getRequestMethod();
```

- *Type:* java.lang.String

The HTTP request method to use for the check.

If set to 'METHOD_UNSPECIFIED' then 'request_method' defaults to 'GET'. Default value: "GET" Possible values: ["METHOD_UNSPECIFIED", "GET", "POST"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_monitoring_uptime_check_config#request_method GoogleMonitoringUptimeCheckConfig#request_method}

---

##### `serviceAgentAuthentication`<sup>Optional</sup> <a name="serviceAgentAuthentication" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheck.property.serviceAgentAuthentication"></a>

```java
public GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthentication getServiceAgentAuthentication();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthentication">GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthentication</a>

service_agent_authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_monitoring_uptime_check_config#service_agent_authentication GoogleMonitoringUptimeCheckConfig#service_agent_authentication}

---

##### `useSsl`<sup>Optional</sup> <a name="useSsl" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheck.property.useSsl"></a>

```java
public java.lang.Object getUseSsl();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, use HTTPS instead of HTTP to run the check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_monitoring_uptime_check_config#use_ssl GoogleMonitoringUptimeCheckConfig#use_ssl}

---

##### `validateSsl`<sup>Optional</sup> <a name="validateSsl" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheck.property.validateSsl"></a>

```java
public java.lang.Object getValidateSsl();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Boolean specifying whether to include SSL certificate validation as a part of the Uptime check.

Only applies to checks where 'monitored_resource' is set to 'uptime_url'. If 'use_ssl' is 'false', setting 'validate_ssl' to 'true' has no effect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_monitoring_uptime_check_config#validate_ssl GoogleMonitoringUptimeCheckConfig#validate_ssl}

---

### GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodes <a name="GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodes" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_monitoring_uptime_check_config.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodes;

GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodes.builder()
//  .statusClass(java.lang.String)
//  .statusValue(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodes.property.statusClass">statusClass</a></code> | <code>java.lang.String</code> | A class of status codes to accept. Possible values: ["STATUS_CLASS_1XX", "STATUS_CLASS_2XX", "STATUS_CLASS_3XX", "STATUS_CLASS_4XX", "STATUS_CLASS_5XX", "STATUS_CLASS_ANY"]. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodes.property.statusValue">statusValue</a></code> | <code>java.lang.Number</code> | A status code to accept. |

---

##### `statusClass`<sup>Optional</sup> <a name="statusClass" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodes.property.statusClass"></a>

```java
public java.lang.String getStatusClass();
```

- *Type:* java.lang.String

A class of status codes to accept. Possible values: ["STATUS_CLASS_1XX", "STATUS_CLASS_2XX", "STATUS_CLASS_3XX", "STATUS_CLASS_4XX", "STATUS_CLASS_5XX", "STATUS_CLASS_ANY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_monitoring_uptime_check_config#status_class GoogleMonitoringUptimeCheckConfig#status_class}

---

##### `statusValue`<sup>Optional</sup> <a name="statusValue" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodes.property.statusValue"></a>

```java
public java.lang.Number getStatusValue();
```

- *Type:* java.lang.Number

A status code to accept.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_monitoring_uptime_check_config#status_value GoogleMonitoringUptimeCheckConfig#status_value}

---

### GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfo <a name="GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfo" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfo.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_monitoring_uptime_check_config.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfo;

GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfo.builder()
    .password(java.lang.String)
    .username(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfo.property.password">password</a></code> | <code>java.lang.String</code> | The password to authenticate. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfo.property.username">username</a></code> | <code>java.lang.String</code> | The username to authenticate. |

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfo.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

The password to authenticate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_monitoring_uptime_check_config#password GoogleMonitoringUptimeCheckConfig#password}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfo.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

The username to authenticate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_monitoring_uptime_check_config#username GoogleMonitoringUptimeCheckConfig#username}

---

### GoogleMonitoringUptimeCheckConfigHttpCheckPingConfig <a name="GoogleMonitoringUptimeCheckConfigHttpCheckPingConfig" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_monitoring_uptime_check_config.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfig;

GoogleMonitoringUptimeCheckConfigHttpCheckPingConfig.builder()
    .pingsCount(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfig.property.pingsCount">pingsCount</a></code> | <code>java.lang.Number</code> | Number of ICMP pings. A maximum of 3 ICMP pings is currently supported. |

---

##### `pingsCount`<sup>Required</sup> <a name="pingsCount" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfig.property.pingsCount"></a>

```java
public java.lang.Number getPingsCount();
```

- *Type:* java.lang.Number

Number of ICMP pings. A maximum of 3 ICMP pings is currently supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_monitoring_uptime_check_config#pings_count GoogleMonitoringUptimeCheckConfig#pings_count}

---

### GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthentication <a name="GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthentication" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthentication.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_monitoring_uptime_check_config.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthentication;

GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthentication.builder()
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthentication.property.type">type</a></code> | <code>java.lang.String</code> | The type of authentication to use. Possible values: ["SERVICE_AGENT_AUTHENTICATION_TYPE_UNSPECIFIED", "OIDC_TOKEN"]. |

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthentication.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of authentication to use. Possible values: ["SERVICE_AGENT_AUTHENTICATION_TYPE_UNSPECIFIED", "OIDC_TOKEN"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_monitoring_uptime_check_config#type GoogleMonitoringUptimeCheckConfig#type}

---

### GoogleMonitoringUptimeCheckConfigMonitoredResource <a name="GoogleMonitoringUptimeCheckConfigMonitoredResource" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResource.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_monitoring_uptime_check_config.GoogleMonitoringUptimeCheckConfigMonitoredResource;

GoogleMonitoringUptimeCheckConfigMonitoredResource.builder()
    .labels(java.util.Map<java.lang.String, java.lang.String>)
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResource.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Values for all of the labels listed in the associated monitored resource descriptor. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResource.property.type">type</a></code> | <code>java.lang.String</code> | The monitored resource type. |

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResource.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Values for all of the labels listed in the associated monitored resource descriptor.

For example, Compute Engine VM instances use the labels 'project_id', 'instance_id', and 'zone'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_monitoring_uptime_check_config#labels GoogleMonitoringUptimeCheckConfig#labels}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResource.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The monitored resource type.

This field must match the type field of a ['MonitoredResourceDescriptor'](https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.monitoredResourceDescriptors#MonitoredResourceDescriptor) object. For example, the type of a Compute Engine VM instance is 'gce_instance'. For a list of types, see [Monitoring resource types](https://cloud.google.com/monitoring/api/resources) and [Logging resource types](https://cloud.google.com/logging/docs/api/v2/resource-list).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_monitoring_uptime_check_config#type GoogleMonitoringUptimeCheckConfig#type}

---

### GoogleMonitoringUptimeCheckConfigResourceGroup <a name="GoogleMonitoringUptimeCheckConfigResourceGroup" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroup.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_monitoring_uptime_check_config.GoogleMonitoringUptimeCheckConfigResourceGroup;

GoogleMonitoringUptimeCheckConfigResourceGroup.builder()
//  .groupId(java.lang.String)
//  .resourceType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroup.property.groupId">groupId</a></code> | <code>java.lang.String</code> | The group of resources being monitored. Should be the 'name' of a group. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroup.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | The resource type of the group members. Possible values: ["RESOURCE_TYPE_UNSPECIFIED", "INSTANCE", "AWS_ELB_LOAD_BALANCER"]. |

---

##### `groupId`<sup>Optional</sup> <a name="groupId" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroup.property.groupId"></a>

```java
public java.lang.String getGroupId();
```

- *Type:* java.lang.String

The group of resources being monitored. Should be the 'name' of a group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_monitoring_uptime_check_config#group_id GoogleMonitoringUptimeCheckConfig#group_id}

---

##### `resourceType`<sup>Optional</sup> <a name="resourceType" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroup.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

The resource type of the group members. Possible values: ["RESOURCE_TYPE_UNSPECIFIED", "INSTANCE", "AWS_ELB_LOAD_BALANCER"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_monitoring_uptime_check_config#resource_type GoogleMonitoringUptimeCheckConfig#resource_type}

---

### GoogleMonitoringUptimeCheckConfigSyntheticMonitor <a name="GoogleMonitoringUptimeCheckConfigSyntheticMonitor" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitor"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitor.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_monitoring_uptime_check_config.GoogleMonitoringUptimeCheckConfigSyntheticMonitor;

GoogleMonitoringUptimeCheckConfigSyntheticMonitor.builder()
    .cloudFunctionV2(GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitor.property.cloudFunctionV2">cloudFunctionV2</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2">GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2</a></code> | cloud_function_v2 block. |

---

##### `cloudFunctionV2`<sup>Required</sup> <a name="cloudFunctionV2" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitor.property.cloudFunctionV2"></a>

```java
public GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2 getCloudFunctionV2();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2">GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2</a>

cloud_function_v2 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_monitoring_uptime_check_config#cloud_function_v2 GoogleMonitoringUptimeCheckConfig#cloud_function_v2}

---

### GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2 <a name="GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_monitoring_uptime_check_config.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2;

GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2.builder()
    .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2.property.name">name</a></code> | <code>java.lang.String</code> | The fully qualified name of the cloud function resource. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The fully qualified name of the cloud function resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_monitoring_uptime_check_config#name GoogleMonitoringUptimeCheckConfig#name}

---

### GoogleMonitoringUptimeCheckConfigTcpCheck <a name="GoogleMonitoringUptimeCheckConfigTcpCheck" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheck.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_monitoring_uptime_check_config.GoogleMonitoringUptimeCheckConfigTcpCheck;

GoogleMonitoringUptimeCheckConfigTcpCheck.builder()
    .port(java.lang.Number)
//  .pingConfig(GoogleMonitoringUptimeCheckConfigTcpCheckPingConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheck.property.port">port</a></code> | <code>java.lang.Number</code> | The port to the page to run the check against. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheck.property.pingConfig">pingConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfig">GoogleMonitoringUptimeCheckConfigTcpCheckPingConfig</a></code> | ping_config block. |

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheck.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

The port to the page to run the check against.

Will be combined with host (specified within the 'monitored_resource') to construct the full URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_monitoring_uptime_check_config#port GoogleMonitoringUptimeCheckConfig#port}

---

##### `pingConfig`<sup>Optional</sup> <a name="pingConfig" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheck.property.pingConfig"></a>

```java
public GoogleMonitoringUptimeCheckConfigTcpCheckPingConfig getPingConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfig">GoogleMonitoringUptimeCheckConfigTcpCheckPingConfig</a>

ping_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_monitoring_uptime_check_config#ping_config GoogleMonitoringUptimeCheckConfig#ping_config}

---

### GoogleMonitoringUptimeCheckConfigTcpCheckPingConfig <a name="GoogleMonitoringUptimeCheckConfigTcpCheckPingConfig" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_monitoring_uptime_check_config.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfig;

GoogleMonitoringUptimeCheckConfigTcpCheckPingConfig.builder()
    .pingsCount(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfig.property.pingsCount">pingsCount</a></code> | <code>java.lang.Number</code> | Number of ICMP pings. A maximum of 3 ICMP pings is currently supported. |

---

##### `pingsCount`<sup>Required</sup> <a name="pingsCount" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfig.property.pingsCount"></a>

```java
public java.lang.Number getPingsCount();
```

- *Type:* java.lang.Number

Number of ICMP pings. A maximum of 3 ICMP pings is currently supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_monitoring_uptime_check_config#pings_count GoogleMonitoringUptimeCheckConfig#pings_count}

---

### GoogleMonitoringUptimeCheckConfigTimeouts <a name="GoogleMonitoringUptimeCheckConfigTimeouts" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_monitoring_uptime_check_config.GoogleMonitoringUptimeCheckConfigTimeouts;

GoogleMonitoringUptimeCheckConfigTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_monitoring_uptime_check_config#create GoogleMonitoringUptimeCheckConfig#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_monitoring_uptime_check_config#delete GoogleMonitoringUptimeCheckConfig#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_monitoring_uptime_check_config#update GoogleMonitoringUptimeCheckConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_monitoring_uptime_check_config#create GoogleMonitoringUptimeCheckConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_monitoring_uptime_check_config#delete GoogleMonitoringUptimeCheckConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_monitoring_uptime_check_config#update GoogleMonitoringUptimeCheckConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference <a name="GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_monitoring_uptime_check_config.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference;

new GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.resetJsonMatcher">resetJsonMatcher</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetJsonMatcher` <a name="resetJsonMatcher" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.resetJsonMatcher"></a>

```java
public void resetJsonMatcher()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.property.jsonMatcherInput">jsonMatcherInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.property.jsonPathInput">jsonPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.property.jsonMatcher">jsonMatcher</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.property.jsonPath">jsonPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcher">GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcher</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `jsonMatcherInput`<sup>Optional</sup> <a name="jsonMatcherInput" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.property.jsonMatcherInput"></a>

```java
public java.lang.String getJsonMatcherInput();
```

- *Type:* java.lang.String

---

##### `jsonPathInput`<sup>Optional</sup> <a name="jsonPathInput" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.property.jsonPathInput"></a>

```java
public java.lang.String getJsonPathInput();
```

- *Type:* java.lang.String

---

##### `jsonMatcher`<sup>Required</sup> <a name="jsonMatcher" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.property.jsonMatcher"></a>

```java
public java.lang.String getJsonMatcher();
```

- *Type:* java.lang.String

---

##### `jsonPath`<sup>Required</sup> <a name="jsonPath" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.property.jsonPath"></a>

```java
public java.lang.String getJsonPath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.property.internalValue"></a>

```java
public GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcher getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcher">GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcher</a>

---


### GoogleMonitoringUptimeCheckConfigContentMatchersList <a name="GoogleMonitoringUptimeCheckConfigContentMatchersList" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_monitoring_uptime_check_config.GoogleMonitoringUptimeCheckConfigContentMatchersList;

new GoogleMonitoringUptimeCheckConfigContentMatchersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersList.get"></a>

```java
public GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchers">GoogleMonitoringUptimeCheckConfigContentMatchers</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchers">GoogleMonitoringUptimeCheckConfigContentMatchers</a>>

---


### GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference <a name="GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_monitoring_uptime_check_config.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference;

new GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.putJsonPathMatcher">putJsonPathMatcher</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.resetJsonPathMatcher">resetJsonPathMatcher</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.resetMatcher">resetMatcher</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putJsonPathMatcher` <a name="putJsonPathMatcher" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.putJsonPathMatcher"></a>

```java
public void putJsonPathMatcher(GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcher value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.putJsonPathMatcher.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcher">GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcher</a>

---

##### `resetJsonPathMatcher` <a name="resetJsonPathMatcher" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.resetJsonPathMatcher"></a>

```java
public void resetJsonPathMatcher()
```

##### `resetMatcher` <a name="resetMatcher" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.resetMatcher"></a>

```java
public void resetMatcher()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.property.jsonPathMatcher">jsonPathMatcher</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference">GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.property.contentInput">contentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.property.jsonPathMatcherInput">jsonPathMatcherInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcher">GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcher</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.property.matcherInput">matcherInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.property.content">content</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.property.matcher">matcher</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchers">GoogleMonitoringUptimeCheckConfigContentMatchers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `jsonPathMatcher`<sup>Required</sup> <a name="jsonPathMatcher" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.property.jsonPathMatcher"></a>

```java
public GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference getJsonPathMatcher();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference">GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference</a>

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.property.contentInput"></a>

```java
public java.lang.String getContentInput();
```

- *Type:* java.lang.String

---

##### `jsonPathMatcherInput`<sup>Optional</sup> <a name="jsonPathMatcherInput" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.property.jsonPathMatcherInput"></a>

```java
public GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcher getJsonPathMatcherInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcher">GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcher</a>

---

##### `matcherInput`<sup>Optional</sup> <a name="matcherInput" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.property.matcherInput"></a>

```java
public java.lang.String getMatcherInput();
```

- *Type:* java.lang.String

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

---

##### `matcher`<sup>Required</sup> <a name="matcher" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.property.matcher"></a>

```java
public java.lang.String getMatcher();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchers">GoogleMonitoringUptimeCheckConfigContentMatchers</a>

---


### GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList <a name="GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_monitoring_uptime_check_config.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList;

new GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList.get"></a>

```java
public GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodes">GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodes</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodes">GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodes</a>>

---


### GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference <a name="GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_monitoring_uptime_check_config.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference;

new GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.resetStatusClass">resetStatusClass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.resetStatusValue">resetStatusValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetStatusClass` <a name="resetStatusClass" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.resetStatusClass"></a>

```java
public void resetStatusClass()
```

##### `resetStatusValue` <a name="resetStatusValue" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.resetStatusValue"></a>

```java
public void resetStatusValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.property.statusClassInput">statusClassInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.property.statusValueInput">statusValueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.property.statusClass">statusClass</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.property.statusValue">statusValue</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodes">GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `statusClassInput`<sup>Optional</sup> <a name="statusClassInput" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.property.statusClassInput"></a>

```java
public java.lang.String getStatusClassInput();
```

- *Type:* java.lang.String

---

##### `statusValueInput`<sup>Optional</sup> <a name="statusValueInput" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.property.statusValueInput"></a>

```java
public java.lang.Number getStatusValueInput();
```

- *Type:* java.lang.Number

---

##### `statusClass`<sup>Required</sup> <a name="statusClass" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.property.statusClass"></a>

```java
public java.lang.String getStatusClass();
```

- *Type:* java.lang.String

---

##### `statusValue`<sup>Required</sup> <a name="statusValue" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.property.statusValue"></a>

```java
public java.lang.Number getStatusValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodes">GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodes</a>

---


### GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference <a name="GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_monitoring_uptime_check_config.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference;

new GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfo">GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.property.internalValue"></a>

```java
public GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfo getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfo">GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfo</a>

---


### GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference <a name="GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_monitoring_uptime_check_config.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference;

new GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.putAcceptedResponseStatusCodes">putAcceptedResponseStatusCodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.putAuthInfo">putAuthInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.putPingConfig">putPingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.putServiceAgentAuthentication">putServiceAgentAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.resetAcceptedResponseStatusCodes">resetAcceptedResponseStatusCodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.resetAuthInfo">resetAuthInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.resetBody">resetBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.resetContentType">resetContentType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.resetCustomContentType">resetCustomContentType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.resetHeaders">resetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.resetMaskHeaders">resetMaskHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.resetPingConfig">resetPingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.resetRequestMethod">resetRequestMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.resetServiceAgentAuthentication">resetServiceAgentAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.resetUseSsl">resetUseSsl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.resetValidateSsl">resetValidateSsl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAcceptedResponseStatusCodes` <a name="putAcceptedResponseStatusCodes" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.putAcceptedResponseStatusCodes"></a>

```java
public void putAcceptedResponseStatusCodes(IResolvable OR java.util.List<GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodes> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.putAcceptedResponseStatusCodes.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodes">GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodes</a>>

---

##### `putAuthInfo` <a name="putAuthInfo" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.putAuthInfo"></a>

```java
public void putAuthInfo(GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfo value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.putAuthInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfo">GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfo</a>

---

##### `putPingConfig` <a name="putPingConfig" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.putPingConfig"></a>

```java
public void putPingConfig(GoogleMonitoringUptimeCheckConfigHttpCheckPingConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.putPingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfig">GoogleMonitoringUptimeCheckConfigHttpCheckPingConfig</a>

---

##### `putServiceAgentAuthentication` <a name="putServiceAgentAuthentication" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.putServiceAgentAuthentication"></a>

```java
public void putServiceAgentAuthentication(GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthentication value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.putServiceAgentAuthentication.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthentication">GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthentication</a>

---

##### `resetAcceptedResponseStatusCodes` <a name="resetAcceptedResponseStatusCodes" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.resetAcceptedResponseStatusCodes"></a>

```java
public void resetAcceptedResponseStatusCodes()
```

##### `resetAuthInfo` <a name="resetAuthInfo" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.resetAuthInfo"></a>

```java
public void resetAuthInfo()
```

##### `resetBody` <a name="resetBody" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.resetBody"></a>

```java
public void resetBody()
```

##### `resetContentType` <a name="resetContentType" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.resetContentType"></a>

```java
public void resetContentType()
```

##### `resetCustomContentType` <a name="resetCustomContentType" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.resetCustomContentType"></a>

```java
public void resetCustomContentType()
```

##### `resetHeaders` <a name="resetHeaders" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.resetHeaders"></a>

```java
public void resetHeaders()
```

##### `resetMaskHeaders` <a name="resetMaskHeaders" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.resetMaskHeaders"></a>

```java
public void resetMaskHeaders()
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.resetPath"></a>

```java
public void resetPath()
```

##### `resetPingConfig` <a name="resetPingConfig" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.resetPingConfig"></a>

```java
public void resetPingConfig()
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.resetPort"></a>

```java
public void resetPort()
```

##### `resetRequestMethod` <a name="resetRequestMethod" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.resetRequestMethod"></a>

```java
public void resetRequestMethod()
```

##### `resetServiceAgentAuthentication` <a name="resetServiceAgentAuthentication" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.resetServiceAgentAuthentication"></a>

```java
public void resetServiceAgentAuthentication()
```

##### `resetUseSsl` <a name="resetUseSsl" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.resetUseSsl"></a>

```java
public void resetUseSsl()
```

##### `resetValidateSsl` <a name="resetValidateSsl" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.resetValidateSsl"></a>

```java
public void resetValidateSsl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.acceptedResponseStatusCodes">acceptedResponseStatusCodes</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList">GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.authInfo">authInfo</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference">GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.pingConfig">pingConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference">GoogleMonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.serviceAgentAuthentication">serviceAgentAuthentication</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference">GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.acceptedResponseStatusCodesInput">acceptedResponseStatusCodesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodes">GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodes</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.authInfoInput">authInfoInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfo">GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.bodyInput">bodyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.contentTypeInput">contentTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.customContentTypeInput">customContentTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.headersInput">headersInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.maskHeadersInput">maskHeadersInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.pingConfigInput">pingConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfig">GoogleMonitoringUptimeCheckConfigHttpCheckPingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.requestMethodInput">requestMethodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.serviceAgentAuthenticationInput">serviceAgentAuthenticationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthentication">GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.useSslInput">useSslInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.validateSslInput">validateSslInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.body">body</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.contentType">contentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.customContentType">customContentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.headers">headers</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.maskHeaders">maskHeaders</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.requestMethod">requestMethod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.useSsl">useSsl</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.validateSsl">validateSsl</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheck">GoogleMonitoringUptimeCheckConfigHttpCheck</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `acceptedResponseStatusCodes`<sup>Required</sup> <a name="acceptedResponseStatusCodes" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.acceptedResponseStatusCodes"></a>

```java
public GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList getAcceptedResponseStatusCodes();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList">GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList</a>

---

##### `authInfo`<sup>Required</sup> <a name="authInfo" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.authInfo"></a>

```java
public GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference getAuthInfo();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference">GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference</a>

---

##### `pingConfig`<sup>Required</sup> <a name="pingConfig" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.pingConfig"></a>

```java
public GoogleMonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference getPingConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference">GoogleMonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference</a>

---

##### `serviceAgentAuthentication`<sup>Required</sup> <a name="serviceAgentAuthentication" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.serviceAgentAuthentication"></a>

```java
public GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference getServiceAgentAuthentication();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference">GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference</a>

---

##### `acceptedResponseStatusCodesInput`<sup>Optional</sup> <a name="acceptedResponseStatusCodesInput" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.acceptedResponseStatusCodesInput"></a>

```java
public java.lang.Object getAcceptedResponseStatusCodesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodes">GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodes</a>>

---

##### `authInfoInput`<sup>Optional</sup> <a name="authInfoInput" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.authInfoInput"></a>

```java
public GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfo getAuthInfoInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfo">GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfo</a>

---

##### `bodyInput`<sup>Optional</sup> <a name="bodyInput" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.bodyInput"></a>

```java
public java.lang.String getBodyInput();
```

- *Type:* java.lang.String

---

##### `contentTypeInput`<sup>Optional</sup> <a name="contentTypeInput" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.contentTypeInput"></a>

```java
public java.lang.String getContentTypeInput();
```

- *Type:* java.lang.String

---

##### `customContentTypeInput`<sup>Optional</sup> <a name="customContentTypeInput" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.customContentTypeInput"></a>

```java
public java.lang.String getCustomContentTypeInput();
```

- *Type:* java.lang.String

---

##### `headersInput`<sup>Optional</sup> <a name="headersInput" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.headersInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getHeadersInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `maskHeadersInput`<sup>Optional</sup> <a name="maskHeadersInput" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.maskHeadersInput"></a>

```java
public java.lang.Object getMaskHeadersInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `pingConfigInput`<sup>Optional</sup> <a name="pingConfigInput" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.pingConfigInput"></a>

```java
public GoogleMonitoringUptimeCheckConfigHttpCheckPingConfig getPingConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfig">GoogleMonitoringUptimeCheckConfigHttpCheckPingConfig</a>

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `requestMethodInput`<sup>Optional</sup> <a name="requestMethodInput" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.requestMethodInput"></a>

```java
public java.lang.String getRequestMethodInput();
```

- *Type:* java.lang.String

---

##### `serviceAgentAuthenticationInput`<sup>Optional</sup> <a name="serviceAgentAuthenticationInput" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.serviceAgentAuthenticationInput"></a>

```java
public GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthentication getServiceAgentAuthenticationInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthentication">GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthentication</a>

---

##### `useSslInput`<sup>Optional</sup> <a name="useSslInput" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.useSslInput"></a>

```java
public java.lang.Object getUseSslInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `validateSslInput`<sup>Optional</sup> <a name="validateSslInput" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.validateSslInput"></a>

```java
public java.lang.Object getValidateSslInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.body"></a>

```java
public java.lang.String getBody();
```

- *Type:* java.lang.String

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.contentType"></a>

```java
public java.lang.String getContentType();
```

- *Type:* java.lang.String

---

##### `customContentType`<sup>Required</sup> <a name="customContentType" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.customContentType"></a>

```java
public java.lang.String getCustomContentType();
```

- *Type:* java.lang.String

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.headers"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getHeaders();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `maskHeaders`<sup>Required</sup> <a name="maskHeaders" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.maskHeaders"></a>

```java
public java.lang.Object getMaskHeaders();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `requestMethod`<sup>Required</sup> <a name="requestMethod" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.requestMethod"></a>

```java
public java.lang.String getRequestMethod();
```

- *Type:* java.lang.String

---

##### `useSsl`<sup>Required</sup> <a name="useSsl" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.useSsl"></a>

```java
public java.lang.Object getUseSsl();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `validateSsl`<sup>Required</sup> <a name="validateSsl" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.validateSsl"></a>

```java
public java.lang.Object getValidateSsl();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.internalValue"></a>

```java
public GoogleMonitoringUptimeCheckConfigHttpCheck getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheck">GoogleMonitoringUptimeCheckConfigHttpCheck</a>

---


### GoogleMonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference <a name="GoogleMonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_monitoring_uptime_check_config.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference;

new GoogleMonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.property.pingsCountInput">pingsCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.property.pingsCount">pingsCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfig">GoogleMonitoringUptimeCheckConfigHttpCheckPingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `pingsCountInput`<sup>Optional</sup> <a name="pingsCountInput" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.property.pingsCountInput"></a>

```java
public java.lang.Number getPingsCountInput();
```

- *Type:* java.lang.Number

---

##### `pingsCount`<sup>Required</sup> <a name="pingsCount" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.property.pingsCount"></a>

```java
public java.lang.Number getPingsCount();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.property.internalValue"></a>

```java
public GoogleMonitoringUptimeCheckConfigHttpCheckPingConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckPingConfig">GoogleMonitoringUptimeCheckConfigHttpCheckPingConfig</a>

---


### GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference <a name="GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_monitoring_uptime_check_config.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference;

new GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetType` <a name="resetType" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthentication">GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthentication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.property.internalValue"></a>

```java
public GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthentication getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthentication">GoogleMonitoringUptimeCheckConfigHttpCheckServiceAgentAuthentication</a>

---


### GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference <a name="GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_monitoring_uptime_check_config.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference;

new GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResource">GoogleMonitoringUptimeCheckConfigMonitoredResource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.property.internalValue"></a>

```java
public GoogleMonitoringUptimeCheckConfigMonitoredResource getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResource">GoogleMonitoringUptimeCheckConfigMonitoredResource</a>

---


### GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference <a name="GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_monitoring_uptime_check_config.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference;

new GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.resetGroupId">resetGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.resetResourceType">resetResourceType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGroupId` <a name="resetGroupId" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.resetGroupId"></a>

```java
public void resetGroupId()
```

##### `resetResourceType` <a name="resetResourceType" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.resetResourceType"></a>

```java
public void resetResourceType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.property.groupIdInput">groupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.property.resourceTypeInput">resourceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.property.groupId">groupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroup">GoogleMonitoringUptimeCheckConfigResourceGroup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `groupIdInput`<sup>Optional</sup> <a name="groupIdInput" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.property.groupIdInput"></a>

```java
public java.lang.String getGroupIdInput();
```

- *Type:* java.lang.String

---

##### `resourceTypeInput`<sup>Optional</sup> <a name="resourceTypeInput" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.property.resourceTypeInput"></a>

```java
public java.lang.String getResourceTypeInput();
```

- *Type:* java.lang.String

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.property.groupId"></a>

```java
public java.lang.String getGroupId();
```

- *Type:* java.lang.String

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.property.internalValue"></a>

```java
public GoogleMonitoringUptimeCheckConfigResourceGroup getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroup">GoogleMonitoringUptimeCheckConfigResourceGroup</a>

---


### GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference <a name="GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_monitoring_uptime_check_config.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference;

new GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2">GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.property.internalValue"></a>

```java
public GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2 getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2">GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2</a>

---


### GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference <a name="GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_monitoring_uptime_check_config.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference;

new GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.putCloudFunctionV2">putCloudFunctionV2</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCloudFunctionV2` <a name="putCloudFunctionV2" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.putCloudFunctionV2"></a>

```java
public void putCloudFunctionV2(GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2 value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.putCloudFunctionV2.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2">GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.property.cloudFunctionV2">cloudFunctionV2</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference">GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.property.cloudFunctionV2Input">cloudFunctionV2Input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2">GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitor">GoogleMonitoringUptimeCheckConfigSyntheticMonitor</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cloudFunctionV2`<sup>Required</sup> <a name="cloudFunctionV2" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.property.cloudFunctionV2"></a>

```java
public GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference getCloudFunctionV2();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference">GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference</a>

---

##### `cloudFunctionV2Input`<sup>Optional</sup> <a name="cloudFunctionV2Input" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.property.cloudFunctionV2Input"></a>

```java
public GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2 getCloudFunctionV2Input();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2">GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.property.internalValue"></a>

```java
public GoogleMonitoringUptimeCheckConfigSyntheticMonitor getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitor">GoogleMonitoringUptimeCheckConfigSyntheticMonitor</a>

---


### GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference <a name="GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_monitoring_uptime_check_config.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference;

new GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.putPingConfig">putPingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.resetPingConfig">resetPingConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPingConfig` <a name="putPingConfig" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.putPingConfig"></a>

```java
public void putPingConfig(GoogleMonitoringUptimeCheckConfigTcpCheckPingConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.putPingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfig">GoogleMonitoringUptimeCheckConfigTcpCheckPingConfig</a>

---

##### `resetPingConfig` <a name="resetPingConfig" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.resetPingConfig"></a>

```java
public void resetPingConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.property.pingConfig">pingConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference">GoogleMonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.property.pingConfigInput">pingConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfig">GoogleMonitoringUptimeCheckConfigTcpCheckPingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheck">GoogleMonitoringUptimeCheckConfigTcpCheck</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `pingConfig`<sup>Required</sup> <a name="pingConfig" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.property.pingConfig"></a>

```java
public GoogleMonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference getPingConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference">GoogleMonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference</a>

---

##### `pingConfigInput`<sup>Optional</sup> <a name="pingConfigInput" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.property.pingConfigInput"></a>

```java
public GoogleMonitoringUptimeCheckConfigTcpCheckPingConfig getPingConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfig">GoogleMonitoringUptimeCheckConfigTcpCheckPingConfig</a>

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.property.internalValue"></a>

```java
public GoogleMonitoringUptimeCheckConfigTcpCheck getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheck">GoogleMonitoringUptimeCheckConfigTcpCheck</a>

---


### GoogleMonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference <a name="GoogleMonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_monitoring_uptime_check_config.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference;

new GoogleMonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.property.pingsCountInput">pingsCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.property.pingsCount">pingsCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfig">GoogleMonitoringUptimeCheckConfigTcpCheckPingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `pingsCountInput`<sup>Optional</sup> <a name="pingsCountInput" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.property.pingsCountInput"></a>

```java
public java.lang.Number getPingsCountInput();
```

- *Type:* java.lang.Number

---

##### `pingsCount`<sup>Required</sup> <a name="pingsCount" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.property.pingsCount"></a>

```java
public java.lang.Number getPingsCount();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.property.internalValue"></a>

```java
public GoogleMonitoringUptimeCheckConfigTcpCheckPingConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckPingConfig">GoogleMonitoringUptimeCheckConfigTcpCheckPingConfig</a>

---


### GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference <a name="GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_monitoring_uptime_check_config.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference;

new GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeouts">GoogleMonitoringUptimeCheckConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeouts">GoogleMonitoringUptimeCheckConfigTimeouts</a>

---



