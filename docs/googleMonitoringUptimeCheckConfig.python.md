# `google_monitoring_uptime_check_config`

Refer to the Terraform Registory for docs: [`google_monitoring_uptime_check_config`](https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_monitoring_uptime_check_config).

# `googleMonitoringUptimeCheckConfig` Submodule <a name="`googleMonitoringUptimeCheckConfig` Submodule" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleMonitoringUptimeCheckConfig <a name="GoogleMonitoringUptimeCheckConfig" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_monitoring_uptime_check_config google_monitoring_uptime_check_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_uptime_check_config

googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  display_name: str,
  timeout: str,
  checker_type: str = None,
  content_matchers: typing.Union[IResolvable, typing.List[GoogleMonitoringUptimeCheckConfigContentMatchers]] = None,
  http_check: GoogleMonitoringUptimeCheckConfigHttpCheck = None,
  id: str = None,
  monitored_resource: GoogleMonitoringUptimeCheckConfigMonitoredResource = None,
  period: str = None,
  project: str = None,
  resource_group: GoogleMonitoringUptimeCheckConfigResourceGroup = None,
  selected_regions: typing.List[str] = None,
  synthetic_monitor: GoogleMonitoringUptimeCheckConfigSyntheticMonitor = None,
  tcp_check: GoogleMonitoringUptimeCheckConfigTcpCheck = None,
  timeouts: GoogleMonitoringUptimeCheckConfigTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | A human-friendly name for the uptime check configuration. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.Initializer.parameter.timeout">timeout</a></code> | <code>str</code> | The maximum amount of time to wait for the request to complete (must be between 1 and 60 seconds). |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.Initializer.parameter.checkerType">checker_type</a></code> | <code>str</code> | The checker type to use for the check. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.Initializer.parameter.contentMatchers">content_matchers</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchers">GoogleMonitoringUptimeCheckConfigContentMatchers</a>]]</code> | content_matchers block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.Initializer.parameter.httpCheck">http_check</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheck">GoogleMonitoringUptimeCheckConfigHttpCheck</a></code> | http_check block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_monitoring_uptime_check_config#id GoogleMonitoringUptimeCheckConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.Initializer.parameter.monitoredResource">monitored_resource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResource">GoogleMonitoringUptimeCheckConfigMonitoredResource</a></code> | monitored_resource block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.Initializer.parameter.period">period</a></code> | <code>str</code> | How often, in seconds, the uptime check is performed. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_monitoring_uptime_check_config#project GoogleMonitoringUptimeCheckConfig#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.Initializer.parameter.resourceGroup">resource_group</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroup">GoogleMonitoringUptimeCheckConfigResourceGroup</a></code> | resource_group block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.Initializer.parameter.selectedRegions">selected_regions</a></code> | <code>typing.List[str]</code> | The list of regions from which the check will be run. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.Initializer.parameter.syntheticMonitor">synthetic_monitor</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitor">GoogleMonitoringUptimeCheckConfigSyntheticMonitor</a></code> | synthetic_monitor block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.Initializer.parameter.tcpCheck">tcp_check</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheck">GoogleMonitoringUptimeCheckConfigTcpCheck</a></code> | tcp_check block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeouts">GoogleMonitoringUptimeCheckConfigTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.Initializer.parameter.displayName"></a>

- *Type:* str

A human-friendly name for the uptime check configuration.

The display name should be unique within a Stackdriver Workspace in order to make it easier to identify; however, uniqueness is not enforced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_monitoring_uptime_check_config#display_name GoogleMonitoringUptimeCheckConfig#display_name}

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.Initializer.parameter.timeout"></a>

- *Type:* str

The maximum amount of time to wait for the request to complete (must be between 1 and 60 seconds).

Accepted formats https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.Duration

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_monitoring_uptime_check_config#timeout GoogleMonitoringUptimeCheckConfig#timeout}

---

##### `checker_type`<sup>Optional</sup> <a name="checker_type" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.Initializer.parameter.checkerType"></a>

- *Type:* str

The checker type to use for the check.

If the monitored resource type is servicedirectory_service, checkerType must be set to VPC_CHECKERS. Possible values: ["STATIC_IP_CHECKERS", "VPC_CHECKERS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_monitoring_uptime_check_config#checker_type GoogleMonitoringUptimeCheckConfig#checker_type}

---

##### `content_matchers`<sup>Optional</sup> <a name="content_matchers" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.Initializer.parameter.contentMatchers"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchers">GoogleMonitoringUptimeCheckConfigContentMatchers</a>]]

content_matchers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_monitoring_uptime_check_config#content_matchers GoogleMonitoringUptimeCheckConfig#content_matchers}

---

##### `http_check`<sup>Optional</sup> <a name="http_check" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.Initializer.parameter.httpCheck"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheck">GoogleMonitoringUptimeCheckConfigHttpCheck</a>

http_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_monitoring_uptime_check_config#http_check GoogleMonitoringUptimeCheckConfig#http_check}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_monitoring_uptime_check_config#id GoogleMonitoringUptimeCheckConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `monitored_resource`<sup>Optional</sup> <a name="monitored_resource" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.Initializer.parameter.monitoredResource"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResource">GoogleMonitoringUptimeCheckConfigMonitoredResource</a>

monitored_resource block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_monitoring_uptime_check_config#monitored_resource GoogleMonitoringUptimeCheckConfig#monitored_resource}

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.Initializer.parameter.period"></a>

- *Type:* str

How often, in seconds, the uptime check is performed.

Currently, the only supported values are 60s (1 minute), 300s (5 minutes), 600s (10 minutes), and 900s (15 minutes). Optional, defaults to 300s.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_monitoring_uptime_check_config#period GoogleMonitoringUptimeCheckConfig#period}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_monitoring_uptime_check_config#project GoogleMonitoringUptimeCheckConfig#project}.

---

##### `resource_group`<sup>Optional</sup> <a name="resource_group" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.Initializer.parameter.resourceGroup"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroup">GoogleMonitoringUptimeCheckConfigResourceGroup</a>

resource_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_monitoring_uptime_check_config#resource_group GoogleMonitoringUptimeCheckConfig#resource_group}

---

##### `selected_regions`<sup>Optional</sup> <a name="selected_regions" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.Initializer.parameter.selectedRegions"></a>

- *Type:* typing.List[str]

The list of regions from which the check will be run.

Some regions contain one location, and others contain more than one. If this field is specified, enough regions to include a minimum of 3 locations must be provided, or an error message is returned. Not specifying this field will result in uptime checks running from all regions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_monitoring_uptime_check_config#selected_regions GoogleMonitoringUptimeCheckConfig#selected_regions}

---

##### `synthetic_monitor`<sup>Optional</sup> <a name="synthetic_monitor" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.Initializer.parameter.syntheticMonitor"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitor">GoogleMonitoringUptimeCheckConfigSyntheticMonitor</a>

synthetic_monitor block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_monitoring_uptime_check_config#synthetic_monitor GoogleMonitoringUptimeCheckConfig#synthetic_monitor}

---

##### `tcp_check`<sup>Optional</sup> <a name="tcp_check" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.Initializer.parameter.tcpCheck"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheck">GoogleMonitoringUptimeCheckConfigTcpCheck</a>

tcp_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_monitoring_uptime_check_config#tcp_check GoogleMonitoringUptimeCheckConfig#tcp_check}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeouts">GoogleMonitoringUptimeCheckConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_monitoring_uptime_check_config#timeouts GoogleMonitoringUptimeCheckConfig#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.putContentMatchers">put_content_matchers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.putHttpCheck">put_http_check</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.putMonitoredResource">put_monitored_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.putResourceGroup">put_resource_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.putSyntheticMonitor">put_synthetic_monitor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.putTcpCheck">put_tcp_check</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.resetCheckerType">reset_checker_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.resetContentMatchers">reset_content_matchers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.resetHttpCheck">reset_http_check</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.resetMonitoredResource">reset_monitored_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.resetPeriod">reset_period</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.resetResourceGroup">reset_resource_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.resetSelectedRegions">reset_selected_regions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.resetSyntheticMonitor">reset_synthetic_monitor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.resetTcpCheck">reset_tcp_check</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_content_matchers` <a name="put_content_matchers" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.putContentMatchers"></a>

```python
def put_content_matchers(
  value: typing.Union[IResolvable, typing.List[GoogleMonitoringUptimeCheckConfigContentMatchers]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.putContentMatchers.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchers">GoogleMonitoringUptimeCheckConfigContentMatchers</a>]]

---

##### `put_http_check` <a name="put_http_check" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.putHttpCheck"></a>

```python
def put_http_check(
  accepted_response_status_codes: typing.Union[IResolvable, typing.List[GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodes]] = None,
  auth_info: GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfo = None,
  body: str = None,
  content_type: str = None,
  headers: typing.Mapping[str] = None,
  mask_headers: typing.Union[bool, IResolvable] = None,
  path: str = None,
  port: typing.Union[int, float] = None,
  request_method: str = None,
  use_ssl: typing.Union[bool, IResolvable] = None,
  validate_ssl: typing.Union[bool, IResolvable] = None
) -> None
```

###### `accepted_response_status_codes`<sup>Optional</sup> <a name="accepted_response_status_codes" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.putHttpCheck.parameter.acceptedResponseStatusCodes"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodes">GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodes</a>]]

accepted_response_status_codes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_monitoring_uptime_check_config#accepted_response_status_codes GoogleMonitoringUptimeCheckConfig#accepted_response_status_codes}

---

###### `auth_info`<sup>Optional</sup> <a name="auth_info" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.putHttpCheck.parameter.authInfo"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfo">GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfo</a>

auth_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_monitoring_uptime_check_config#auth_info GoogleMonitoringUptimeCheckConfig#auth_info}

---

###### `body`<sup>Optional</sup> <a name="body" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.putHttpCheck.parameter.body"></a>

- *Type:* str

The request body associated with the HTTP POST request.

If contentType is URL_ENCODED, the body passed in must be URL-encoded. Users can provide a Content-Length header via the headers field or the API will do so. If the requestMethod is GET and body is not empty, the API will return an error. The maximum byte size is 1 megabyte. Note - As with all bytes fields JSON representations are base64 encoded. e.g. "foo=bar" in URL-encoded form is "foo%3Dbar" and in base64 encoding is "Zm9vJTI1M0RiYXI=".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_monitoring_uptime_check_config#body GoogleMonitoringUptimeCheckConfig#body}

---

###### `content_type`<sup>Optional</sup> <a name="content_type" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.putHttpCheck.parameter.contentType"></a>

- *Type:* str

The content type to use for the check. Possible values: ["TYPE_UNSPECIFIED", "URL_ENCODED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_monitoring_uptime_check_config#content_type GoogleMonitoringUptimeCheckConfig#content_type}

---

###### `headers`<sup>Optional</sup> <a name="headers" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.putHttpCheck.parameter.headers"></a>

- *Type:* typing.Mapping[str]

The list of headers to send as part of the uptime check request.

If two headers have the same key and different values, they should be entered as a single header, with the value being a comma-separated list of all the desired values as described at https://www.w3.org/Protocols/rfc2616/rfc2616.txt (page 31). Entering two separate headers with the same key in a Create call will cause the first to be overwritten by the second. The maximum number of headers allowed is 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_monitoring_uptime_check_config#headers GoogleMonitoringUptimeCheckConfig#headers}

---

###### `mask_headers`<sup>Optional</sup> <a name="mask_headers" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.putHttpCheck.parameter.maskHeaders"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Boolean specifying whether to encrypt the header information.

Encryption should be specified for any headers related to authentication that you do not wish to be seen when retrieving the configuration. The server will be responsible for encrypting the headers. On Get/List calls, if mask_headers is set to True then the headers will be obscured with ******.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_monitoring_uptime_check_config#mask_headers GoogleMonitoringUptimeCheckConfig#mask_headers}

---

###### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.putHttpCheck.parameter.path"></a>

- *Type:* str

The path to the page to run the check against.

Will be combined with the host (specified within the MonitoredResource) and port to construct the full URL. If the provided path does not begin with "/", a "/" will be prepended automatically. Optional (defaults to "/").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_monitoring_uptime_check_config#path GoogleMonitoringUptimeCheckConfig#path}

---

###### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.putHttpCheck.parameter.port"></a>

- *Type:* typing.Union[int, float]

The port to the page to run the check against.

Will be combined with host (specified within the MonitoredResource) and path to construct the full URL. Optional (defaults to 80 without SSL, or 443 with SSL).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_monitoring_uptime_check_config#port GoogleMonitoringUptimeCheckConfig#port}

---

###### `request_method`<sup>Optional</sup> <a name="request_method" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.putHttpCheck.parameter.requestMethod"></a>

- *Type:* str

The HTTP request method to use for the check.

If set to METHOD_UNSPECIFIED then requestMethod defaults to GET. Default value: "GET" Possible values: ["METHOD_UNSPECIFIED", "GET", "POST"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_monitoring_uptime_check_config#request_method GoogleMonitoringUptimeCheckConfig#request_method}

---

###### `use_ssl`<sup>Optional</sup> <a name="use_ssl" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.putHttpCheck.parameter.useSsl"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, use HTTPS instead of HTTP to run the check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_monitoring_uptime_check_config#use_ssl GoogleMonitoringUptimeCheckConfig#use_ssl}

---

###### `validate_ssl`<sup>Optional</sup> <a name="validate_ssl" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.putHttpCheck.parameter.validateSsl"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Boolean specifying whether to include SSL certificate validation as a part of the Uptime check.

Only applies to checks where monitoredResource is set to uptime_url. If useSsl is false, setting validateSsl to true has no effect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_monitoring_uptime_check_config#validate_ssl GoogleMonitoringUptimeCheckConfig#validate_ssl}

---

##### `put_monitored_resource` <a name="put_monitored_resource" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.putMonitoredResource"></a>

```python
def put_monitored_resource(
  labels: typing.Mapping[str],
  type: str
) -> None
```

###### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.putMonitoredResource.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Values for all of the labels listed in the associated monitored resource descriptor.

For example, Compute Engine VM instances use the labels "project_id", "instance_id", and "zone".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_monitoring_uptime_check_config#labels GoogleMonitoringUptimeCheckConfig#labels}

---

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.putMonitoredResource.parameter.type"></a>

- *Type:* str

The monitored resource type.

This field must match the type field of a MonitoredResourceDescriptor (https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.monitoredResourceDescriptors#MonitoredResourceDescriptor) object. For example, the type of a Compute Engine VM instance is gce_instance. For a list of types, see Monitoring resource types (https://cloud.google.com/monitoring/api/resources) and Logging resource types (https://cloud.google.com/logging/docs/api/v2/resource-list).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_monitoring_uptime_check_config#type GoogleMonitoringUptimeCheckConfig#type}

---

##### `put_resource_group` <a name="put_resource_group" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.putResourceGroup"></a>

```python
def put_resource_group(
  group_id: str = None,
  resource_type: str = None
) -> None
```

###### `group_id`<sup>Optional</sup> <a name="group_id" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.putResourceGroup.parameter.groupId"></a>

- *Type:* str

The group of resources being monitored. Should be the 'name' of a group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_monitoring_uptime_check_config#group_id GoogleMonitoringUptimeCheckConfig#group_id}

---

###### `resource_type`<sup>Optional</sup> <a name="resource_type" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.putResourceGroup.parameter.resourceType"></a>

- *Type:* str

The resource type of the group members. Possible values: ["RESOURCE_TYPE_UNSPECIFIED", "INSTANCE", "AWS_ELB_LOAD_BALANCER"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_monitoring_uptime_check_config#resource_type GoogleMonitoringUptimeCheckConfig#resource_type}

---

##### `put_synthetic_monitor` <a name="put_synthetic_monitor" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.putSyntheticMonitor"></a>

```python
def put_synthetic_monitor(
  cloud_function_v2: GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2
) -> None
```

###### `cloud_function_v2`<sup>Required</sup> <a name="cloud_function_v2" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.putSyntheticMonitor.parameter.cloudFunctionV2"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2">GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2</a>

cloud_function_v2 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_monitoring_uptime_check_config#cloud_function_v2 GoogleMonitoringUptimeCheckConfig#cloud_function_v2}

---

##### `put_tcp_check` <a name="put_tcp_check" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.putTcpCheck"></a>

```python
def put_tcp_check(
  port: typing.Union[int, float]
) -> None
```

###### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.putTcpCheck.parameter.port"></a>

- *Type:* typing.Union[int, float]

The port to the page to run the check against.

Will be combined with host (specified within the MonitoredResource) to construct the full URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_monitoring_uptime_check_config#port GoogleMonitoringUptimeCheckConfig#port}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_monitoring_uptime_check_config#create GoogleMonitoringUptimeCheckConfig#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_monitoring_uptime_check_config#delete GoogleMonitoringUptimeCheckConfig#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_monitoring_uptime_check_config#update GoogleMonitoringUptimeCheckConfig#update}.

---

##### `reset_checker_type` <a name="reset_checker_type" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.resetCheckerType"></a>

```python
def reset_checker_type() -> None
```

##### `reset_content_matchers` <a name="reset_content_matchers" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.resetContentMatchers"></a>

```python
def reset_content_matchers() -> None
```

##### `reset_http_check` <a name="reset_http_check" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.resetHttpCheck"></a>

```python
def reset_http_check() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_monitored_resource` <a name="reset_monitored_resource" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.resetMonitoredResource"></a>

```python
def reset_monitored_resource() -> None
```

##### `reset_period` <a name="reset_period" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.resetPeriod"></a>

```python
def reset_period() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_resource_group` <a name="reset_resource_group" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.resetResourceGroup"></a>

```python
def reset_resource_group() -> None
```

##### `reset_selected_regions` <a name="reset_selected_regions" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.resetSelectedRegions"></a>

```python
def reset_selected_regions() -> None
```

##### `reset_synthetic_monitor` <a name="reset_synthetic_monitor" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.resetSyntheticMonitor"></a>

```python
def reset_synthetic_monitor() -> None
```

##### `reset_tcp_check` <a name="reset_tcp_check" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.resetTcpCheck"></a>

```python
def reset_tcp_check() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_uptime_check_config

googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_uptime_check_config

googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_uptime_check_config

googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.contentMatchers">content_matchers</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersList">GoogleMonitoringUptimeCheckConfigContentMatchersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.httpCheck">http_check</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference">GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.monitoredResource">monitored_resource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference">GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.resourceGroup">resource_group</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference">GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.syntheticMonitor">synthetic_monitor</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference">GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.tcpCheck">tcp_check</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference">GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference">GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.uptimeCheckId">uptime_check_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.checkerTypeInput">checker_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.contentMatchersInput">content_matchers_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchers">GoogleMonitoringUptimeCheckConfigContentMatchers</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.httpCheckInput">http_check_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheck">GoogleMonitoringUptimeCheckConfigHttpCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.monitoredResourceInput">monitored_resource_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResource">GoogleMonitoringUptimeCheckConfigMonitoredResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.periodInput">period_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.resourceGroupInput">resource_group_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroup">GoogleMonitoringUptimeCheckConfigResourceGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.selectedRegionsInput">selected_regions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.syntheticMonitorInput">synthetic_monitor_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitor">GoogleMonitoringUptimeCheckConfigSyntheticMonitor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.tcpCheckInput">tcp_check_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheck">GoogleMonitoringUptimeCheckConfigTcpCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.timeoutInput">timeout_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeouts">GoogleMonitoringUptimeCheckConfigTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.checkerType">checker_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.period">period</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.selectedRegions">selected_regions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.timeout">timeout</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `content_matchers`<sup>Required</sup> <a name="content_matchers" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.contentMatchers"></a>

```python
content_matchers: GoogleMonitoringUptimeCheckConfigContentMatchersList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersList">GoogleMonitoringUptimeCheckConfigContentMatchersList</a>

---

##### `http_check`<sup>Required</sup> <a name="http_check" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.httpCheck"></a>

```python
http_check: GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference">GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference</a>

---

##### `monitored_resource`<sup>Required</sup> <a name="monitored_resource" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.monitoredResource"></a>

```python
monitored_resource: GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference">GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group`<sup>Required</sup> <a name="resource_group" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.resourceGroup"></a>

```python
resource_group: GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference">GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference</a>

---

##### `synthetic_monitor`<sup>Required</sup> <a name="synthetic_monitor" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.syntheticMonitor"></a>

```python
synthetic_monitor: GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference">GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference</a>

---

##### `tcp_check`<sup>Required</sup> <a name="tcp_check" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.tcpCheck"></a>

```python
tcp_check: GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference">GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.timeouts"></a>

```python
timeouts: GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference">GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference</a>

---

##### `uptime_check_id`<sup>Required</sup> <a name="uptime_check_id" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.uptimeCheckId"></a>

```python
uptime_check_id: str
```

- *Type:* str

---

##### `checker_type_input`<sup>Optional</sup> <a name="checker_type_input" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.checkerTypeInput"></a>

```python
checker_type_input: str
```

- *Type:* str

---

##### `content_matchers_input`<sup>Optional</sup> <a name="content_matchers_input" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.contentMatchersInput"></a>

```python
content_matchers_input: typing.Union[IResolvable, typing.List[GoogleMonitoringUptimeCheckConfigContentMatchers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchers">GoogleMonitoringUptimeCheckConfigContentMatchers</a>]]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `http_check_input`<sup>Optional</sup> <a name="http_check_input" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.httpCheckInput"></a>

```python
http_check_input: GoogleMonitoringUptimeCheckConfigHttpCheck
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheck">GoogleMonitoringUptimeCheckConfigHttpCheck</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `monitored_resource_input`<sup>Optional</sup> <a name="monitored_resource_input" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.monitoredResourceInput"></a>

```python
monitored_resource_input: GoogleMonitoringUptimeCheckConfigMonitoredResource
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResource">GoogleMonitoringUptimeCheckConfigMonitoredResource</a>

---

##### `period_input`<sup>Optional</sup> <a name="period_input" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.periodInput"></a>

```python
period_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `resource_group_input`<sup>Optional</sup> <a name="resource_group_input" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.resourceGroupInput"></a>

```python
resource_group_input: GoogleMonitoringUptimeCheckConfigResourceGroup
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroup">GoogleMonitoringUptimeCheckConfigResourceGroup</a>

---

##### `selected_regions_input`<sup>Optional</sup> <a name="selected_regions_input" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.selectedRegionsInput"></a>

```python
selected_regions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `synthetic_monitor_input`<sup>Optional</sup> <a name="synthetic_monitor_input" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.syntheticMonitorInput"></a>

```python
synthetic_monitor_input: GoogleMonitoringUptimeCheckConfigSyntheticMonitor
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitor">GoogleMonitoringUptimeCheckConfigSyntheticMonitor</a>

---

##### `tcp_check_input`<sup>Optional</sup> <a name="tcp_check_input" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.tcpCheckInput"></a>

```python
tcp_check_input: GoogleMonitoringUptimeCheckConfigTcpCheck
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheck">GoogleMonitoringUptimeCheckConfigTcpCheck</a>

---

##### `timeout_input`<sup>Optional</sup> <a name="timeout_input" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.timeoutInput"></a>

```python
timeout_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleMonitoringUptimeCheckConfigTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeouts">GoogleMonitoringUptimeCheckConfigTimeouts</a>]

---

##### `checker_type`<sup>Required</sup> <a name="checker_type" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.checkerType"></a>

```python
checker_type: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.period"></a>

```python
period: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `selected_regions`<sup>Required</sup> <a name="selected_regions" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.selectedRegions"></a>

```python
selected_regions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.timeout"></a>

```python
timeout: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleMonitoringUptimeCheckConfigConfig <a name="GoogleMonitoringUptimeCheckConfigConfig" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_uptime_check_config

googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  display_name: str,
  timeout: str,
  checker_type: str = None,
  content_matchers: typing.Union[IResolvable, typing.List[GoogleMonitoringUptimeCheckConfigContentMatchers]] = None,
  http_check: GoogleMonitoringUptimeCheckConfigHttpCheck = None,
  id: str = None,
  monitored_resource: GoogleMonitoringUptimeCheckConfigMonitoredResource = None,
  period: str = None,
  project: str = None,
  resource_group: GoogleMonitoringUptimeCheckConfigResourceGroup = None,
  selected_regions: typing.List[str] = None,
  synthetic_monitor: GoogleMonitoringUptimeCheckConfigSyntheticMonitor = None,
  tcp_check: GoogleMonitoringUptimeCheckConfigTcpCheck = None,
  timeouts: GoogleMonitoringUptimeCheckConfigTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.property.displayName">display_name</a></code> | <code>str</code> | A human-friendly name for the uptime check configuration. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.property.timeout">timeout</a></code> | <code>str</code> | The maximum amount of time to wait for the request to complete (must be between 1 and 60 seconds). |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.property.checkerType">checker_type</a></code> | <code>str</code> | The checker type to use for the check. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.property.contentMatchers">content_matchers</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchers">GoogleMonitoringUptimeCheckConfigContentMatchers</a>]]</code> | content_matchers block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.property.httpCheck">http_check</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheck">GoogleMonitoringUptimeCheckConfigHttpCheck</a></code> | http_check block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_monitoring_uptime_check_config#id GoogleMonitoringUptimeCheckConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.property.monitoredResource">monitored_resource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResource">GoogleMonitoringUptimeCheckConfigMonitoredResource</a></code> | monitored_resource block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.property.period">period</a></code> | <code>str</code> | How often, in seconds, the uptime check is performed. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_monitoring_uptime_check_config#project GoogleMonitoringUptimeCheckConfig#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.property.resourceGroup">resource_group</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroup">GoogleMonitoringUptimeCheckConfigResourceGroup</a></code> | resource_group block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.property.selectedRegions">selected_regions</a></code> | <code>typing.List[str]</code> | The list of regions from which the check will be run. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.property.syntheticMonitor">synthetic_monitor</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitor">GoogleMonitoringUptimeCheckConfigSyntheticMonitor</a></code> | synthetic_monitor block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.property.tcpCheck">tcp_check</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheck">GoogleMonitoringUptimeCheckConfigTcpCheck</a></code> | tcp_check block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeouts">GoogleMonitoringUptimeCheckConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

A human-friendly name for the uptime check configuration.

The display name should be unique within a Stackdriver Workspace in order to make it easier to identify; however, uniqueness is not enforced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_monitoring_uptime_check_config#display_name GoogleMonitoringUptimeCheckConfig#display_name}

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.property.timeout"></a>

```python
timeout: str
```

- *Type:* str

The maximum amount of time to wait for the request to complete (must be between 1 and 60 seconds).

Accepted formats https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.Duration

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_monitoring_uptime_check_config#timeout GoogleMonitoringUptimeCheckConfig#timeout}

---

##### `checker_type`<sup>Optional</sup> <a name="checker_type" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.property.checkerType"></a>

```python
checker_type: str
```

- *Type:* str

The checker type to use for the check.

If the monitored resource type is servicedirectory_service, checkerType must be set to VPC_CHECKERS. Possible values: ["STATIC_IP_CHECKERS", "VPC_CHECKERS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_monitoring_uptime_check_config#checker_type GoogleMonitoringUptimeCheckConfig#checker_type}

---

##### `content_matchers`<sup>Optional</sup> <a name="content_matchers" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.property.contentMatchers"></a>

```python
content_matchers: typing.Union[IResolvable, typing.List[GoogleMonitoringUptimeCheckConfigContentMatchers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchers">GoogleMonitoringUptimeCheckConfigContentMatchers</a>]]

content_matchers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_monitoring_uptime_check_config#content_matchers GoogleMonitoringUptimeCheckConfig#content_matchers}

---

##### `http_check`<sup>Optional</sup> <a name="http_check" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.property.httpCheck"></a>

```python
http_check: GoogleMonitoringUptimeCheckConfigHttpCheck
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheck">GoogleMonitoringUptimeCheckConfigHttpCheck</a>

http_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_monitoring_uptime_check_config#http_check GoogleMonitoringUptimeCheckConfig#http_check}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_monitoring_uptime_check_config#id GoogleMonitoringUptimeCheckConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `monitored_resource`<sup>Optional</sup> <a name="monitored_resource" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.property.monitoredResource"></a>

```python
monitored_resource: GoogleMonitoringUptimeCheckConfigMonitoredResource
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResource">GoogleMonitoringUptimeCheckConfigMonitoredResource</a>

monitored_resource block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_monitoring_uptime_check_config#monitored_resource GoogleMonitoringUptimeCheckConfig#monitored_resource}

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.property.period"></a>

```python
period: str
```

- *Type:* str

How often, in seconds, the uptime check is performed.

Currently, the only supported values are 60s (1 minute), 300s (5 minutes), 600s (10 minutes), and 900s (15 minutes). Optional, defaults to 300s.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_monitoring_uptime_check_config#period GoogleMonitoringUptimeCheckConfig#period}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_monitoring_uptime_check_config#project GoogleMonitoringUptimeCheckConfig#project}.

---

##### `resource_group`<sup>Optional</sup> <a name="resource_group" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.property.resourceGroup"></a>

```python
resource_group: GoogleMonitoringUptimeCheckConfigResourceGroup
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroup">GoogleMonitoringUptimeCheckConfigResourceGroup</a>

resource_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_monitoring_uptime_check_config#resource_group GoogleMonitoringUptimeCheckConfig#resource_group}

---

##### `selected_regions`<sup>Optional</sup> <a name="selected_regions" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.property.selectedRegions"></a>

```python
selected_regions: typing.List[str]
```

- *Type:* typing.List[str]

The list of regions from which the check will be run.

Some regions contain one location, and others contain more than one. If this field is specified, enough regions to include a minimum of 3 locations must be provided, or an error message is returned. Not specifying this field will result in uptime checks running from all regions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_monitoring_uptime_check_config#selected_regions GoogleMonitoringUptimeCheckConfig#selected_regions}

---

##### `synthetic_monitor`<sup>Optional</sup> <a name="synthetic_monitor" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.property.syntheticMonitor"></a>

```python
synthetic_monitor: GoogleMonitoringUptimeCheckConfigSyntheticMonitor
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitor">GoogleMonitoringUptimeCheckConfigSyntheticMonitor</a>

synthetic_monitor block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_monitoring_uptime_check_config#synthetic_monitor GoogleMonitoringUptimeCheckConfig#synthetic_monitor}

---

##### `tcp_check`<sup>Optional</sup> <a name="tcp_check" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.property.tcpCheck"></a>

```python
tcp_check: GoogleMonitoringUptimeCheckConfigTcpCheck
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheck">GoogleMonitoringUptimeCheckConfigTcpCheck</a>

tcp_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_monitoring_uptime_check_config#tcp_check GoogleMonitoringUptimeCheckConfig#tcp_check}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigConfig.property.timeouts"></a>

```python
timeouts: GoogleMonitoringUptimeCheckConfigTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeouts">GoogleMonitoringUptimeCheckConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_monitoring_uptime_check_config#timeouts GoogleMonitoringUptimeCheckConfig#timeouts}

---

### GoogleMonitoringUptimeCheckConfigContentMatchers <a name="GoogleMonitoringUptimeCheckConfigContentMatchers" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchers.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_uptime_check_config

googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchers(
  content: str,
  json_path_matcher: GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcher = None,
  matcher: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchers.property.content">content</a></code> | <code>str</code> | String or regex content to match (max 1024 bytes). |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchers.property.jsonPathMatcher">json_path_matcher</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcher">GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcher</a></code> | json_path_matcher block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchers.property.matcher">matcher</a></code> | <code>str</code> | The type of content matcher that will be applied to the server output, compared to the content string when the check is run. |

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchers.property.content"></a>

```python
content: str
```

- *Type:* str

String or regex content to match (max 1024 bytes).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_monitoring_uptime_check_config#content GoogleMonitoringUptimeCheckConfig#content}

---

##### `json_path_matcher`<sup>Optional</sup> <a name="json_path_matcher" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchers.property.jsonPathMatcher"></a>

```python
json_path_matcher: GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcher
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcher">GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcher</a>

json_path_matcher block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_monitoring_uptime_check_config#json_path_matcher GoogleMonitoringUptimeCheckConfig#json_path_matcher}

---

##### `matcher`<sup>Optional</sup> <a name="matcher" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchers.property.matcher"></a>

```python
matcher: str
```

- *Type:* str

The type of content matcher that will be applied to the server output, compared to the content string when the check is run.

Default value: "CONTAINS_STRING" Possible values: ["CONTAINS_STRING", "NOT_CONTAINS_STRING", "MATCHES_REGEX", "NOT_MATCHES_REGEX", "MATCHES_JSON_PATH", "NOT_MATCHES_JSON_PATH"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_monitoring_uptime_check_config#matcher GoogleMonitoringUptimeCheckConfig#matcher}

---

### GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcher <a name="GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcher" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcher"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcher.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_uptime_check_config

googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcher(
  json_path: str,
  json_matcher: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcher.property.jsonPath">json_path</a></code> | <code>str</code> | JSONPath within the response output pointing to the expected 'ContentMatcher::content' to match against. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcher.property.jsonMatcher">json_matcher</a></code> | <code>str</code> | Options to perform JSONPath content matching. Default value: "EXACT_MATCH" Possible values: ["EXACT_MATCH", "REGEX_MATCH"]. |

---

##### `json_path`<sup>Required</sup> <a name="json_path" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcher.property.jsonPath"></a>

```python
json_path: str
```

- *Type:* str

JSONPath within the response output pointing to the expected 'ContentMatcher::content' to match against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_monitoring_uptime_check_config#json_path GoogleMonitoringUptimeCheckConfig#json_path}

---

##### `json_matcher`<sup>Optional</sup> <a name="json_matcher" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcher.property.jsonMatcher"></a>

```python
json_matcher: str
```

- *Type:* str

Options to perform JSONPath content matching. Default value: "EXACT_MATCH" Possible values: ["EXACT_MATCH", "REGEX_MATCH"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_monitoring_uptime_check_config#json_matcher GoogleMonitoringUptimeCheckConfig#json_matcher}

---

### GoogleMonitoringUptimeCheckConfigHttpCheck <a name="GoogleMonitoringUptimeCheckConfigHttpCheck" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheck.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_uptime_check_config

googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheck(
  accepted_response_status_codes: typing.Union[IResolvable, typing.List[GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodes]] = None,
  auth_info: GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfo = None,
  body: str = None,
  content_type: str = None,
  headers: typing.Mapping[str] = None,
  mask_headers: typing.Union[bool, IResolvable] = None,
  path: str = None,
  port: typing.Union[int, float] = None,
  request_method: str = None,
  use_ssl: typing.Union[bool, IResolvable] = None,
  validate_ssl: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheck.property.acceptedResponseStatusCodes">accepted_response_status_codes</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodes">GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodes</a>]]</code> | accepted_response_status_codes block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheck.property.authInfo">auth_info</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfo">GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfo</a></code> | auth_info block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheck.property.body">body</a></code> | <code>str</code> | The request body associated with the HTTP POST request. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheck.property.contentType">content_type</a></code> | <code>str</code> | The content type to use for the check. Possible values: ["TYPE_UNSPECIFIED", "URL_ENCODED"]. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheck.property.headers">headers</a></code> | <code>typing.Mapping[str]</code> | The list of headers to send as part of the uptime check request. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheck.property.maskHeaders">mask_headers</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Boolean specifying whether to encrypt the header information. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheck.property.path">path</a></code> | <code>str</code> | The path to the page to run the check against. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheck.property.port">port</a></code> | <code>typing.Union[int, float]</code> | The port to the page to run the check against. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheck.property.requestMethod">request_method</a></code> | <code>str</code> | The HTTP request method to use for the check. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheck.property.useSsl">use_ssl</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, use HTTPS instead of HTTP to run the check. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheck.property.validateSsl">validate_ssl</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Boolean specifying whether to include SSL certificate validation as a part of the Uptime check. |

---

##### `accepted_response_status_codes`<sup>Optional</sup> <a name="accepted_response_status_codes" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheck.property.acceptedResponseStatusCodes"></a>

```python
accepted_response_status_codes: typing.Union[IResolvable, typing.List[GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodes">GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodes</a>]]

accepted_response_status_codes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_monitoring_uptime_check_config#accepted_response_status_codes GoogleMonitoringUptimeCheckConfig#accepted_response_status_codes}

---

##### `auth_info`<sup>Optional</sup> <a name="auth_info" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheck.property.authInfo"></a>

```python
auth_info: GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfo
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfo">GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfo</a>

auth_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_monitoring_uptime_check_config#auth_info GoogleMonitoringUptimeCheckConfig#auth_info}

---

##### `body`<sup>Optional</sup> <a name="body" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheck.property.body"></a>

```python
body: str
```

- *Type:* str

The request body associated with the HTTP POST request.

If contentType is URL_ENCODED, the body passed in must be URL-encoded. Users can provide a Content-Length header via the headers field or the API will do so. If the requestMethod is GET and body is not empty, the API will return an error. The maximum byte size is 1 megabyte. Note - As with all bytes fields JSON representations are base64 encoded. e.g. "foo=bar" in URL-encoded form is "foo%3Dbar" and in base64 encoding is "Zm9vJTI1M0RiYXI=".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_monitoring_uptime_check_config#body GoogleMonitoringUptimeCheckConfig#body}

---

##### `content_type`<sup>Optional</sup> <a name="content_type" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheck.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

The content type to use for the check. Possible values: ["TYPE_UNSPECIFIED", "URL_ENCODED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_monitoring_uptime_check_config#content_type GoogleMonitoringUptimeCheckConfig#content_type}

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheck.property.headers"></a>

```python
headers: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The list of headers to send as part of the uptime check request.

If two headers have the same key and different values, they should be entered as a single header, with the value being a comma-separated list of all the desired values as described at https://www.w3.org/Protocols/rfc2616/rfc2616.txt (page 31). Entering two separate headers with the same key in a Create call will cause the first to be overwritten by the second. The maximum number of headers allowed is 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_monitoring_uptime_check_config#headers GoogleMonitoringUptimeCheckConfig#headers}

---

##### `mask_headers`<sup>Optional</sup> <a name="mask_headers" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheck.property.maskHeaders"></a>

```python
mask_headers: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Boolean specifying whether to encrypt the header information.

Encryption should be specified for any headers related to authentication that you do not wish to be seen when retrieving the configuration. The server will be responsible for encrypting the headers. On Get/List calls, if mask_headers is set to True then the headers will be obscured with ******.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_monitoring_uptime_check_config#mask_headers GoogleMonitoringUptimeCheckConfig#mask_headers}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheck.property.path"></a>

```python
path: str
```

- *Type:* str

The path to the page to run the check against.

Will be combined with the host (specified within the MonitoredResource) and port to construct the full URL. If the provided path does not begin with "/", a "/" will be prepended automatically. Optional (defaults to "/").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_monitoring_uptime_check_config#path GoogleMonitoringUptimeCheckConfig#path}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheck.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The port to the page to run the check against.

Will be combined with host (specified within the MonitoredResource) and path to construct the full URL. Optional (defaults to 80 without SSL, or 443 with SSL).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_monitoring_uptime_check_config#port GoogleMonitoringUptimeCheckConfig#port}

---

##### `request_method`<sup>Optional</sup> <a name="request_method" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheck.property.requestMethod"></a>

```python
request_method: str
```

- *Type:* str

The HTTP request method to use for the check.

If set to METHOD_UNSPECIFIED then requestMethod defaults to GET. Default value: "GET" Possible values: ["METHOD_UNSPECIFIED", "GET", "POST"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_monitoring_uptime_check_config#request_method GoogleMonitoringUptimeCheckConfig#request_method}

---

##### `use_ssl`<sup>Optional</sup> <a name="use_ssl" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheck.property.useSsl"></a>

```python
use_ssl: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, use HTTPS instead of HTTP to run the check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_monitoring_uptime_check_config#use_ssl GoogleMonitoringUptimeCheckConfig#use_ssl}

---

##### `validate_ssl`<sup>Optional</sup> <a name="validate_ssl" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheck.property.validateSsl"></a>

```python
validate_ssl: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Boolean specifying whether to include SSL certificate validation as a part of the Uptime check.

Only applies to checks where monitoredResource is set to uptime_url. If useSsl is false, setting validateSsl to true has no effect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_monitoring_uptime_check_config#validate_ssl GoogleMonitoringUptimeCheckConfig#validate_ssl}

---

### GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodes <a name="GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodes" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodes.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_uptime_check_config

googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodes(
  status_class: str = None,
  status_value: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodes.property.statusClass">status_class</a></code> | <code>str</code> | A class of status codes to accept. Possible values: ["STATUS_CLASS_1XX", "STATUS_CLASS_2XX", "STATUS_CLASS_3XX", "STATUS_CLASS_4XX", "STATUS_CLASS_5XX", "STATUS_CLASS_ANY"]. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodes.property.statusValue">status_value</a></code> | <code>typing.Union[int, float]</code> | A status code to accept. |

---

##### `status_class`<sup>Optional</sup> <a name="status_class" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodes.property.statusClass"></a>

```python
status_class: str
```

- *Type:* str

A class of status codes to accept. Possible values: ["STATUS_CLASS_1XX", "STATUS_CLASS_2XX", "STATUS_CLASS_3XX", "STATUS_CLASS_4XX", "STATUS_CLASS_5XX", "STATUS_CLASS_ANY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_monitoring_uptime_check_config#status_class GoogleMonitoringUptimeCheckConfig#status_class}

---

##### `status_value`<sup>Optional</sup> <a name="status_value" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodes.property.statusValue"></a>

```python
status_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

A status code to accept.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_monitoring_uptime_check_config#status_value GoogleMonitoringUptimeCheckConfig#status_value}

---

### GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfo <a name="GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfo" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfo.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_uptime_check_config

googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfo(
  password: str,
  username: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfo.property.password">password</a></code> | <code>str</code> | The password to authenticate. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfo.property.username">username</a></code> | <code>str</code> | The username to authenticate. |

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfo.property.password"></a>

```python
password: str
```

- *Type:* str

The password to authenticate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_monitoring_uptime_check_config#password GoogleMonitoringUptimeCheckConfig#password}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfo.property.username"></a>

```python
username: str
```

- *Type:* str

The username to authenticate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_monitoring_uptime_check_config#username GoogleMonitoringUptimeCheckConfig#username}

---

### GoogleMonitoringUptimeCheckConfigMonitoredResource <a name="GoogleMonitoringUptimeCheckConfigMonitoredResource" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResource.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_uptime_check_config

googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResource(
  labels: typing.Mapping[str],
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResource.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Values for all of the labels listed in the associated monitored resource descriptor. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResource.property.type">type</a></code> | <code>str</code> | The monitored resource type. |

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResource.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Values for all of the labels listed in the associated monitored resource descriptor.

For example, Compute Engine VM instances use the labels "project_id", "instance_id", and "zone".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_monitoring_uptime_check_config#labels GoogleMonitoringUptimeCheckConfig#labels}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResource.property.type"></a>

```python
type: str
```

- *Type:* str

The monitored resource type.

This field must match the type field of a MonitoredResourceDescriptor (https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.monitoredResourceDescriptors#MonitoredResourceDescriptor) object. For example, the type of a Compute Engine VM instance is gce_instance. For a list of types, see Monitoring resource types (https://cloud.google.com/monitoring/api/resources) and Logging resource types (https://cloud.google.com/logging/docs/api/v2/resource-list).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_monitoring_uptime_check_config#type GoogleMonitoringUptimeCheckConfig#type}

---

### GoogleMonitoringUptimeCheckConfigResourceGroup <a name="GoogleMonitoringUptimeCheckConfigResourceGroup" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroup.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_uptime_check_config

googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroup(
  group_id: str = None,
  resource_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroup.property.groupId">group_id</a></code> | <code>str</code> | The group of resources being monitored. Should be the 'name' of a group. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroup.property.resourceType">resource_type</a></code> | <code>str</code> | The resource type of the group members. Possible values: ["RESOURCE_TYPE_UNSPECIFIED", "INSTANCE", "AWS_ELB_LOAD_BALANCER"]. |

---

##### `group_id`<sup>Optional</sup> <a name="group_id" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroup.property.groupId"></a>

```python
group_id: str
```

- *Type:* str

The group of resources being monitored. Should be the 'name' of a group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_monitoring_uptime_check_config#group_id GoogleMonitoringUptimeCheckConfig#group_id}

---

##### `resource_type`<sup>Optional</sup> <a name="resource_type" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroup.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

The resource type of the group members. Possible values: ["RESOURCE_TYPE_UNSPECIFIED", "INSTANCE", "AWS_ELB_LOAD_BALANCER"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_monitoring_uptime_check_config#resource_type GoogleMonitoringUptimeCheckConfig#resource_type}

---

### GoogleMonitoringUptimeCheckConfigSyntheticMonitor <a name="GoogleMonitoringUptimeCheckConfigSyntheticMonitor" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitor"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitor.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_uptime_check_config

googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitor(
  cloud_function_v2: GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitor.property.cloudFunctionV2">cloud_function_v2</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2">GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2</a></code> | cloud_function_v2 block. |

---

##### `cloud_function_v2`<sup>Required</sup> <a name="cloud_function_v2" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitor.property.cloudFunctionV2"></a>

```python
cloud_function_v2: GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2">GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2</a>

cloud_function_v2 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_monitoring_uptime_check_config#cloud_function_v2 GoogleMonitoringUptimeCheckConfig#cloud_function_v2}

---

### GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2 <a name="GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_uptime_check_config

googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2(
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2.property.name">name</a></code> | <code>str</code> | The fully qualified name of the cloud function resource. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2.property.name"></a>

```python
name: str
```

- *Type:* str

The fully qualified name of the cloud function resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_monitoring_uptime_check_config#name GoogleMonitoringUptimeCheckConfig#name}

---

### GoogleMonitoringUptimeCheckConfigTcpCheck <a name="GoogleMonitoringUptimeCheckConfigTcpCheck" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheck.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_uptime_check_config

googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheck(
  port: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheck.property.port">port</a></code> | <code>typing.Union[int, float]</code> | The port to the page to run the check against. |

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheck.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The port to the page to run the check against.

Will be combined with host (specified within the MonitoredResource) to construct the full URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_monitoring_uptime_check_config#port GoogleMonitoringUptimeCheckConfig#port}

---

### GoogleMonitoringUptimeCheckConfigTimeouts <a name="GoogleMonitoringUptimeCheckConfigTimeouts" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_uptime_check_config

googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_monitoring_uptime_check_config#create GoogleMonitoringUptimeCheckConfig#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_monitoring_uptime_check_config#delete GoogleMonitoringUptimeCheckConfig#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_monitoring_uptime_check_config#update GoogleMonitoringUptimeCheckConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_monitoring_uptime_check_config#create GoogleMonitoringUptimeCheckConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_monitoring_uptime_check_config#delete GoogleMonitoringUptimeCheckConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_monitoring_uptime_check_config#update GoogleMonitoringUptimeCheckConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference <a name="GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_uptime_check_config

googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.resetJsonMatcher">reset_json_matcher</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_json_matcher` <a name="reset_json_matcher" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.resetJsonMatcher"></a>

```python
def reset_json_matcher() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.property.jsonMatcherInput">json_matcher_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.property.jsonPathInput">json_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.property.jsonMatcher">json_matcher</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.property.jsonPath">json_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcher">GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcher</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `json_matcher_input`<sup>Optional</sup> <a name="json_matcher_input" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.property.jsonMatcherInput"></a>

```python
json_matcher_input: str
```

- *Type:* str

---

##### `json_path_input`<sup>Optional</sup> <a name="json_path_input" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.property.jsonPathInput"></a>

```python
json_path_input: str
```

- *Type:* str

---

##### `json_matcher`<sup>Required</sup> <a name="json_matcher" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.property.jsonMatcher"></a>

```python
json_matcher: str
```

- *Type:* str

---

##### `json_path`<sup>Required</sup> <a name="json_path" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.property.jsonPath"></a>

```python
json_path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.property.internalValue"></a>

```python
internal_value: GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcher
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcher">GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcher</a>

---


### GoogleMonitoringUptimeCheckConfigContentMatchersList <a name="GoogleMonitoringUptimeCheckConfigContentMatchersList" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_uptime_check_config

googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchers">GoogleMonitoringUptimeCheckConfigContentMatchers</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleMonitoringUptimeCheckConfigContentMatchers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchers">GoogleMonitoringUptimeCheckConfigContentMatchers</a>]]

---


### GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference <a name="GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_uptime_check_config

googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.putJsonPathMatcher">put_json_path_matcher</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.resetJsonPathMatcher">reset_json_path_matcher</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.resetMatcher">reset_matcher</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_json_path_matcher` <a name="put_json_path_matcher" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.putJsonPathMatcher"></a>

```python
def put_json_path_matcher(
  json_path: str,
  json_matcher: str = None
) -> None
```

###### `json_path`<sup>Required</sup> <a name="json_path" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.putJsonPathMatcher.parameter.jsonPath"></a>

- *Type:* str

JSONPath within the response output pointing to the expected 'ContentMatcher::content' to match against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_monitoring_uptime_check_config#json_path GoogleMonitoringUptimeCheckConfig#json_path}

---

###### `json_matcher`<sup>Optional</sup> <a name="json_matcher" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.putJsonPathMatcher.parameter.jsonMatcher"></a>

- *Type:* str

Options to perform JSONPath content matching. Default value: "EXACT_MATCH" Possible values: ["EXACT_MATCH", "REGEX_MATCH"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_monitoring_uptime_check_config#json_matcher GoogleMonitoringUptimeCheckConfig#json_matcher}

---

##### `reset_json_path_matcher` <a name="reset_json_path_matcher" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.resetJsonPathMatcher"></a>

```python
def reset_json_path_matcher() -> None
```

##### `reset_matcher` <a name="reset_matcher" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.resetMatcher"></a>

```python
def reset_matcher() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.property.jsonPathMatcher">json_path_matcher</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference">GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.property.contentInput">content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.property.jsonPathMatcherInput">json_path_matcher_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcher">GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcher</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.property.matcherInput">matcher_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.property.matcher">matcher</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchers">GoogleMonitoringUptimeCheckConfigContentMatchers</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `json_path_matcher`<sup>Required</sup> <a name="json_path_matcher" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.property.jsonPathMatcher"></a>

```python
json_path_matcher: GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference">GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference</a>

---

##### `content_input`<sup>Optional</sup> <a name="content_input" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.property.contentInput"></a>

```python
content_input: str
```

- *Type:* str

---

##### `json_path_matcher_input`<sup>Optional</sup> <a name="json_path_matcher_input" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.property.jsonPathMatcherInput"></a>

```python
json_path_matcher_input: GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcher
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcher">GoogleMonitoringUptimeCheckConfigContentMatchersJsonPathMatcher</a>

---

##### `matcher_input`<sup>Optional</sup> <a name="matcher_input" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.property.matcherInput"></a>

```python
matcher_input: str
```

- *Type:* str

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `matcher`<sup>Required</sup> <a name="matcher" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.property.matcher"></a>

```python
matcher: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleMonitoringUptimeCheckConfigContentMatchers]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigContentMatchers">GoogleMonitoringUptimeCheckConfigContentMatchers</a>]

---


### GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList <a name="GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_uptime_check_config

googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodes">GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodes</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodes">GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodes</a>]]

---


### GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference <a name="GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_uptime_check_config

googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.resetStatusClass">reset_status_class</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.resetStatusValue">reset_status_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_status_class` <a name="reset_status_class" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.resetStatusClass"></a>

```python
def reset_status_class() -> None
```

##### `reset_status_value` <a name="reset_status_value" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.resetStatusValue"></a>

```python
def reset_status_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.property.statusClassInput">status_class_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.property.statusValueInput">status_value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.property.statusClass">status_class</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.property.statusValue">status_value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodes">GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodes</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `status_class_input`<sup>Optional</sup> <a name="status_class_input" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.property.statusClassInput"></a>

```python
status_class_input: str
```

- *Type:* str

---

##### `status_value_input`<sup>Optional</sup> <a name="status_value_input" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.property.statusValueInput"></a>

```python
status_value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `status_class`<sup>Required</sup> <a name="status_class" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.property.statusClass"></a>

```python
status_class: str
```

- *Type:* str

---

##### `status_value`<sup>Required</sup> <a name="status_value" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.property.statusValue"></a>

```python
status_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodes]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodes">GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodes</a>]

---


### GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference <a name="GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_uptime_check_config

googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfo">GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.property.internalValue"></a>

```python
internal_value: GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfo
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfo">GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfo</a>

---


### GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference <a name="GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_uptime_check_config

googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.putAcceptedResponseStatusCodes">put_accepted_response_status_codes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.putAuthInfo">put_auth_info</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.resetAcceptedResponseStatusCodes">reset_accepted_response_status_codes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.resetAuthInfo">reset_auth_info</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.resetBody">reset_body</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.resetContentType">reset_content_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.resetHeaders">reset_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.resetMaskHeaders">reset_mask_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.resetPath">reset_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.resetRequestMethod">reset_request_method</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.resetUseSsl">reset_use_ssl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.resetValidateSsl">reset_validate_ssl</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_accepted_response_status_codes` <a name="put_accepted_response_status_codes" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.putAcceptedResponseStatusCodes"></a>

```python
def put_accepted_response_status_codes(
  value: typing.Union[IResolvable, typing.List[GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodes]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.putAcceptedResponseStatusCodes.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodes">GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodes</a>]]

---

##### `put_auth_info` <a name="put_auth_info" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.putAuthInfo"></a>

```python
def put_auth_info(
  password: str,
  username: str
) -> None
```

###### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.putAuthInfo.parameter.password"></a>

- *Type:* str

The password to authenticate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_monitoring_uptime_check_config#password GoogleMonitoringUptimeCheckConfig#password}

---

###### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.putAuthInfo.parameter.username"></a>

- *Type:* str

The username to authenticate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_monitoring_uptime_check_config#username GoogleMonitoringUptimeCheckConfig#username}

---

##### `reset_accepted_response_status_codes` <a name="reset_accepted_response_status_codes" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.resetAcceptedResponseStatusCodes"></a>

```python
def reset_accepted_response_status_codes() -> None
```

##### `reset_auth_info` <a name="reset_auth_info" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.resetAuthInfo"></a>

```python
def reset_auth_info() -> None
```

##### `reset_body` <a name="reset_body" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.resetBody"></a>

```python
def reset_body() -> None
```

##### `reset_content_type` <a name="reset_content_type" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.resetContentType"></a>

```python
def reset_content_type() -> None
```

##### `reset_headers` <a name="reset_headers" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.resetHeaders"></a>

```python
def reset_headers() -> None
```

##### `reset_mask_headers` <a name="reset_mask_headers" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.resetMaskHeaders"></a>

```python
def reset_mask_headers() -> None
```

##### `reset_path` <a name="reset_path" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.resetPath"></a>

```python
def reset_path() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_request_method` <a name="reset_request_method" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.resetRequestMethod"></a>

```python
def reset_request_method() -> None
```

##### `reset_use_ssl` <a name="reset_use_ssl" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.resetUseSsl"></a>

```python
def reset_use_ssl() -> None
```

##### `reset_validate_ssl` <a name="reset_validate_ssl" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.resetValidateSsl"></a>

```python
def reset_validate_ssl() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.acceptedResponseStatusCodes">accepted_response_status_codes</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList">GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.authInfo">auth_info</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference">GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.acceptedResponseStatusCodesInput">accepted_response_status_codes_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodes">GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodes</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.authInfoInput">auth_info_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfo">GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.bodyInput">body_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.contentTypeInput">content_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.headersInput">headers_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.maskHeadersInput">mask_headers_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.requestMethodInput">request_method_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.useSslInput">use_ssl_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.validateSslInput">validate_ssl_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.body">body</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.contentType">content_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.headers">headers</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.maskHeaders">mask_headers</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.requestMethod">request_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.useSsl">use_ssl</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.validateSsl">validate_ssl</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheck">GoogleMonitoringUptimeCheckConfigHttpCheck</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `accepted_response_status_codes`<sup>Required</sup> <a name="accepted_response_status_codes" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.acceptedResponseStatusCodes"></a>

```python
accepted_response_status_codes: GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList">GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList</a>

---

##### `auth_info`<sup>Required</sup> <a name="auth_info" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.authInfo"></a>

```python
auth_info: GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference">GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference</a>

---

##### `accepted_response_status_codes_input`<sup>Optional</sup> <a name="accepted_response_status_codes_input" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.acceptedResponseStatusCodesInput"></a>

```python
accepted_response_status_codes_input: typing.Union[IResolvable, typing.List[GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodes">GoogleMonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodes</a>]]

---

##### `auth_info_input`<sup>Optional</sup> <a name="auth_info_input" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.authInfoInput"></a>

```python
auth_info_input: GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfo
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfo">GoogleMonitoringUptimeCheckConfigHttpCheckAuthInfo</a>

---

##### `body_input`<sup>Optional</sup> <a name="body_input" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.bodyInput"></a>

```python
body_input: str
```

- *Type:* str

---

##### `content_type_input`<sup>Optional</sup> <a name="content_type_input" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.contentTypeInput"></a>

```python
content_type_input: str
```

- *Type:* str

---

##### `headers_input`<sup>Optional</sup> <a name="headers_input" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.headersInput"></a>

```python
headers_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `mask_headers_input`<sup>Optional</sup> <a name="mask_headers_input" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.maskHeadersInput"></a>

```python
mask_headers_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `request_method_input`<sup>Optional</sup> <a name="request_method_input" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.requestMethodInput"></a>

```python
request_method_input: str
```

- *Type:* str

---

##### `use_ssl_input`<sup>Optional</sup> <a name="use_ssl_input" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.useSslInput"></a>

```python
use_ssl_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `validate_ssl_input`<sup>Optional</sup> <a name="validate_ssl_input" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.validateSslInput"></a>

```python
validate_ssl_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.body"></a>

```python
body: str
```

- *Type:* str

---

##### `content_type`<sup>Required</sup> <a name="content_type" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.headers"></a>

```python
headers: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `mask_headers`<sup>Required</sup> <a name="mask_headers" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.maskHeaders"></a>

```python
mask_headers: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `request_method`<sup>Required</sup> <a name="request_method" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.requestMethod"></a>

```python
request_method: str
```

- *Type:* str

---

##### `use_ssl`<sup>Required</sup> <a name="use_ssl" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.useSsl"></a>

```python
use_ssl: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `validate_ssl`<sup>Required</sup> <a name="validate_ssl" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.validateSsl"></a>

```python
validate_ssl: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheckOutputReference.property.internalValue"></a>

```python
internal_value: GoogleMonitoringUptimeCheckConfigHttpCheck
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigHttpCheck">GoogleMonitoringUptimeCheckConfigHttpCheck</a>

---


### GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference <a name="GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_uptime_check_config

googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResource">GoogleMonitoringUptimeCheckConfigMonitoredResource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResourceOutputReference.property.internalValue"></a>

```python
internal_value: GoogleMonitoringUptimeCheckConfigMonitoredResource
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigMonitoredResource">GoogleMonitoringUptimeCheckConfigMonitoredResource</a>

---


### GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference <a name="GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_uptime_check_config

googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.resetGroupId">reset_group_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.resetResourceType">reset_resource_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_group_id` <a name="reset_group_id" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.resetGroupId"></a>

```python
def reset_group_id() -> None
```

##### `reset_resource_type` <a name="reset_resource_type" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.resetResourceType"></a>

```python
def reset_resource_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.property.groupIdInput">group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.property.resourceTypeInput">resource_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.property.groupId">group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroup">GoogleMonitoringUptimeCheckConfigResourceGroup</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `group_id_input`<sup>Optional</sup> <a name="group_id_input" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.property.groupIdInput"></a>

```python
group_id_input: str
```

- *Type:* str

---

##### `resource_type_input`<sup>Optional</sup> <a name="resource_type_input" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.property.resourceTypeInput"></a>

```python
resource_type_input: str
```

- *Type:* str

---

##### `group_id`<sup>Required</sup> <a name="group_id" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.property.groupId"></a>

```python
group_id: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroupOutputReference.property.internalValue"></a>

```python
internal_value: GoogleMonitoringUptimeCheckConfigResourceGroup
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigResourceGroup">GoogleMonitoringUptimeCheckConfigResourceGroup</a>

---


### GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference <a name="GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_uptime_check_config

googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2">GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.property.internalValue"></a>

```python
internal_value: GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2">GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2</a>

---


### GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference <a name="GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_uptime_check_config

googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.putCloudFunctionV2">put_cloud_function_v2</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cloud_function_v2` <a name="put_cloud_function_v2" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.putCloudFunctionV2"></a>

```python
def put_cloud_function_v2(
  name: str
) -> None
```

###### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.putCloudFunctionV2.parameter.name"></a>

- *Type:* str

The fully qualified name of the cloud function resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_monitoring_uptime_check_config#name GoogleMonitoringUptimeCheckConfig#name}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.property.cloudFunctionV2">cloud_function_v2</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference">GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.property.cloudFunctionV2Input">cloud_function_v2_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2">GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitor">GoogleMonitoringUptimeCheckConfigSyntheticMonitor</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloud_function_v2`<sup>Required</sup> <a name="cloud_function_v2" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.property.cloudFunctionV2"></a>

```python
cloud_function_v2: GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference">GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference</a>

---

##### `cloud_function_v2_input`<sup>Optional</sup> <a name="cloud_function_v2_input" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.property.cloudFunctionV2Input"></a>

```python
cloud_function_v2_input: GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2">GoogleMonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitorOutputReference.property.internalValue"></a>

```python
internal_value: GoogleMonitoringUptimeCheckConfigSyntheticMonitor
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigSyntheticMonitor">GoogleMonitoringUptimeCheckConfigSyntheticMonitor</a>

---


### GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference <a name="GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_uptime_check_config

googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheck">GoogleMonitoringUptimeCheckConfigTcpCheck</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheckOutputReference.property.internalValue"></a>

```python
internal_value: GoogleMonitoringUptimeCheckConfigTcpCheck
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTcpCheck">GoogleMonitoringUptimeCheckConfigTcpCheck</a>

---


### GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference <a name="GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_uptime_check_config

googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeouts">GoogleMonitoringUptimeCheckConfigTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleMonitoringUptimeCheckConfigTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleMonitoringUptimeCheckConfig.GoogleMonitoringUptimeCheckConfigTimeouts">GoogleMonitoringUptimeCheckConfigTimeouts</a>]

---



