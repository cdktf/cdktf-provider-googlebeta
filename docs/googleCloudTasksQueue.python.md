# `googleCloudTasksQueue` Submodule <a name="`googleCloudTasksQueue` Submodule" id="@cdktf/provider-google-beta.googleCloudTasksQueue"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleCloudTasksQueue <a name="GoogleCloudTasksQueue" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_tasks_queue google_cloud_tasks_queue}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloud_tasks_queue

googleCloudTasksQueue.GoogleCloudTasksQueue(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  app_engine_routing_override: GoogleCloudTasksQueueAppEngineRoutingOverride = None,
  http_target: GoogleCloudTasksQueueHttpTarget = None,
  id: str = None,
  name: str = None,
  project: str = None,
  rate_limits: GoogleCloudTasksQueueRateLimits = None,
  retry_config: GoogleCloudTasksQueueRetryConfig = None,
  stackdriver_logging_config: GoogleCloudTasksQueueStackdriverLoggingConfig = None,
  timeouts: GoogleCloudTasksQueueTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of the queue. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.Initializer.parameter.appEngineRoutingOverride">app_engine_routing_override</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverride">GoogleCloudTasksQueueAppEngineRoutingOverride</a></code> | app_engine_routing_override block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.Initializer.parameter.httpTarget">http_target</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTarget">GoogleCloudTasksQueueHttpTarget</a></code> | http_target block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_tasks_queue#id GoogleCloudTasksQueue#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.Initializer.parameter.name">name</a></code> | <code>str</code> | The queue name. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_tasks_queue#project GoogleCloudTasksQueue#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.Initializer.parameter.rateLimits">rate_limits</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimits">GoogleCloudTasksQueueRateLimits</a></code> | rate_limits block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.Initializer.parameter.retryConfig">retry_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfig">GoogleCloudTasksQueueRetryConfig</a></code> | retry_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.Initializer.parameter.stackdriverLoggingConfig">stackdriver_logging_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfig">GoogleCloudTasksQueueStackdriverLoggingConfig</a></code> | stackdriver_logging_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeouts">GoogleCloudTasksQueueTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.Initializer.parameter.location"></a>

- *Type:* str

The location of the queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_tasks_queue#location GoogleCloudTasksQueue#location}

---

##### `app_engine_routing_override`<sup>Optional</sup> <a name="app_engine_routing_override" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.Initializer.parameter.appEngineRoutingOverride"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverride">GoogleCloudTasksQueueAppEngineRoutingOverride</a>

app_engine_routing_override block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_tasks_queue#app_engine_routing_override GoogleCloudTasksQueue#app_engine_routing_override}

---

##### `http_target`<sup>Optional</sup> <a name="http_target" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.Initializer.parameter.httpTarget"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTarget">GoogleCloudTasksQueueHttpTarget</a>

http_target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_tasks_queue#http_target GoogleCloudTasksQueue#http_target}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_tasks_queue#id GoogleCloudTasksQueue#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.Initializer.parameter.name"></a>

- *Type:* str

The queue name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_tasks_queue#name GoogleCloudTasksQueue#name}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_tasks_queue#project GoogleCloudTasksQueue#project}.

---

##### `rate_limits`<sup>Optional</sup> <a name="rate_limits" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.Initializer.parameter.rateLimits"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimits">GoogleCloudTasksQueueRateLimits</a>

rate_limits block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_tasks_queue#rate_limits GoogleCloudTasksQueue#rate_limits}

---

##### `retry_config`<sup>Optional</sup> <a name="retry_config" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.Initializer.parameter.retryConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfig">GoogleCloudTasksQueueRetryConfig</a>

retry_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_tasks_queue#retry_config GoogleCloudTasksQueue#retry_config}

---

##### `stackdriver_logging_config`<sup>Optional</sup> <a name="stackdriver_logging_config" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.Initializer.parameter.stackdriverLoggingConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfig">GoogleCloudTasksQueueStackdriverLoggingConfig</a>

stackdriver_logging_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_tasks_queue#stackdriver_logging_config GoogleCloudTasksQueue#stackdriver_logging_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeouts">GoogleCloudTasksQueueTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_tasks_queue#timeouts GoogleCloudTasksQueue#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.putAppEngineRoutingOverride">put_app_engine_routing_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.putHttpTarget">put_http_target</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.putRateLimits">put_rate_limits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.putRetryConfig">put_retry_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.putStackdriverLoggingConfig">put_stackdriver_logging_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.resetAppEngineRoutingOverride">reset_app_engine_routing_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.resetHttpTarget">reset_http_target</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.resetRateLimits">reset_rate_limits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.resetRetryConfig">reset_retry_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.resetStackdriverLoggingConfig">reset_stackdriver_logging_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_app_engine_routing_override` <a name="put_app_engine_routing_override" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.putAppEngineRoutingOverride"></a>

```python
def put_app_engine_routing_override(
  instance: str = None,
  service: str = None,
  version: str = None
) -> None
```

###### `instance`<sup>Optional</sup> <a name="instance" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.putAppEngineRoutingOverride.parameter.instance"></a>

- *Type:* str

App instance.

By default, the task is sent to an instance which is available when the task is attempted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_tasks_queue#instance GoogleCloudTasksQueue#instance}

---

###### `service`<sup>Optional</sup> <a name="service" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.putAppEngineRoutingOverride.parameter.service"></a>

- *Type:* str

App service.

By default, the task is sent to the service which is the default service when the task is attempted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_tasks_queue#service GoogleCloudTasksQueue#service}

---

###### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.putAppEngineRoutingOverride.parameter.version"></a>

- *Type:* str

App version.

By default, the task is sent to the version which is the default version when the task is attempted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_tasks_queue#version GoogleCloudTasksQueue#version}

---

##### `put_http_target` <a name="put_http_target" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.putHttpTarget"></a>

```python
def put_http_target(
  header_overrides: typing.Union[IResolvable, typing.List[GoogleCloudTasksQueueHttpTargetHeaderOverrides]] = None,
  http_method: str = None,
  oauth_token: GoogleCloudTasksQueueHttpTargetOauthToken = None,
  oidc_token: GoogleCloudTasksQueueHttpTargetOidcToken = None,
  uri_override: GoogleCloudTasksQueueHttpTargetUriOverride = None
) -> None
```

###### `header_overrides`<sup>Optional</sup> <a name="header_overrides" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.putHttpTarget.parameter.headerOverrides"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverrides">GoogleCloudTasksQueueHttpTargetHeaderOverrides</a>]]

header_overrides block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_tasks_queue#header_overrides GoogleCloudTasksQueue#header_overrides}

---

###### `http_method`<sup>Optional</sup> <a name="http_method" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.putHttpTarget.parameter.httpMethod"></a>

- *Type:* str

The HTTP method to use for the request.

When specified, it overrides HttpRequest for the task.
Note that if the value is set to GET the body of the task will be ignored at execution time. Possible values: ["HTTP_METHOD_UNSPECIFIED", "POST", "GET", "HEAD", "PUT", "DELETE", "PATCH", "OPTIONS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_tasks_queue#http_method GoogleCloudTasksQueue#http_method}

---

###### `oauth_token`<sup>Optional</sup> <a name="oauth_token" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.putHttpTarget.parameter.oauthToken"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthToken">GoogleCloudTasksQueueHttpTargetOauthToken</a>

oauth_token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_tasks_queue#oauth_token GoogleCloudTasksQueue#oauth_token}

---

###### `oidc_token`<sup>Optional</sup> <a name="oidc_token" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.putHttpTarget.parameter.oidcToken"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcToken">GoogleCloudTasksQueueHttpTargetOidcToken</a>

oidc_token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_tasks_queue#oidc_token GoogleCloudTasksQueue#oidc_token}

---

###### `uri_override`<sup>Optional</sup> <a name="uri_override" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.putHttpTarget.parameter.uriOverride"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverride">GoogleCloudTasksQueueHttpTargetUriOverride</a>

uri_override block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_tasks_queue#uri_override GoogleCloudTasksQueue#uri_override}

---

##### `put_rate_limits` <a name="put_rate_limits" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.putRateLimits"></a>

```python
def put_rate_limits(
  max_concurrent_dispatches: typing.Union[int, float] = None,
  max_dispatches_per_second: typing.Union[int, float] = None
) -> None
```

###### `max_concurrent_dispatches`<sup>Optional</sup> <a name="max_concurrent_dispatches" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.putRateLimits.parameter.maxConcurrentDispatches"></a>

- *Type:* typing.Union[int, float]

The maximum number of concurrent tasks that Cloud Tasks allows to be dispatched for this queue.

After this threshold has been
reached, Cloud Tasks stops dispatching tasks until the number of
concurrent requests decreases.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_tasks_queue#max_concurrent_dispatches GoogleCloudTasksQueue#max_concurrent_dispatches}

---

###### `max_dispatches_per_second`<sup>Optional</sup> <a name="max_dispatches_per_second" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.putRateLimits.parameter.maxDispatchesPerSecond"></a>

- *Type:* typing.Union[int, float]

The maximum rate at which tasks are dispatched from this queue.

If unspecified when the queue is created, Cloud Tasks will pick the default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_tasks_queue#max_dispatches_per_second GoogleCloudTasksQueue#max_dispatches_per_second}

---

##### `put_retry_config` <a name="put_retry_config" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.putRetryConfig"></a>

```python
def put_retry_config(
  max_attempts: typing.Union[int, float] = None,
  max_backoff: str = None,
  max_doublings: typing.Union[int, float] = None,
  max_retry_duration: str = None,
  min_backoff: str = None
) -> None
```

###### `max_attempts`<sup>Optional</sup> <a name="max_attempts" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.putRetryConfig.parameter.maxAttempts"></a>

- *Type:* typing.Union[int, float]

Number of attempts per task.

Cloud Tasks will attempt the task maxAttempts times (that is, if
the first attempt fails, then there will be maxAttempts - 1
retries). Must be >= -1.

If unspecified when the queue is created, Cloud Tasks will pick
the default.

-1 indicates unlimited attempts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_tasks_queue#max_attempts GoogleCloudTasksQueue#max_attempts}

---

###### `max_backoff`<sup>Optional</sup> <a name="max_backoff" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.putRetryConfig.parameter.maxBackoff"></a>

- *Type:* str

A task will be scheduled for retry between minBackoff and maxBackoff duration after it fails, if the queue's RetryConfig specifies that the task should be retried.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_tasks_queue#max_backoff GoogleCloudTasksQueue#max_backoff}

---

###### `max_doublings`<sup>Optional</sup> <a name="max_doublings" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.putRetryConfig.parameter.maxDoublings"></a>

- *Type:* typing.Union[int, float]

The time between retries will double maxDoublings times.

A task's retry interval starts at minBackoff, then doubles maxDoublings times,
then increases linearly, and finally retries retries at intervals of maxBackoff
up to maxAttempts times.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_tasks_queue#max_doublings GoogleCloudTasksQueue#max_doublings}

---

###### `max_retry_duration`<sup>Optional</sup> <a name="max_retry_duration" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.putRetryConfig.parameter.maxRetryDuration"></a>

- *Type:* str

If positive, maxRetryDuration specifies the time limit for retrying a failed task, measured from when the task was first attempted.

Once maxRetryDuration time has passed and the task has
been attempted maxAttempts times, no further attempts will be
made and the task will be deleted.

If zero, then the task age is unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_tasks_queue#max_retry_duration GoogleCloudTasksQueue#max_retry_duration}

---

###### `min_backoff`<sup>Optional</sup> <a name="min_backoff" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.putRetryConfig.parameter.minBackoff"></a>

- *Type:* str

A task will be scheduled for retry between minBackoff and maxBackoff duration after it fails, if the queue's RetryConfig specifies that the task should be retried.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_tasks_queue#min_backoff GoogleCloudTasksQueue#min_backoff}

---

##### `put_stackdriver_logging_config` <a name="put_stackdriver_logging_config" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.putStackdriverLoggingConfig"></a>

```python
def put_stackdriver_logging_config(
  sampling_ratio: typing.Union[int, float]
) -> None
```

###### `sampling_ratio`<sup>Required</sup> <a name="sampling_ratio" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.putStackdriverLoggingConfig.parameter.samplingRatio"></a>

- *Type:* typing.Union[int, float]

Specifies the fraction of operations to write to Stackdriver Logging.

This field may contain any value between 0.0 and 1.0, inclusive. 0.0 is the
default and means that no operations are logged.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_tasks_queue#sampling_ratio GoogleCloudTasksQueue#sampling_ratio}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_tasks_queue#create GoogleCloudTasksQueue#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_tasks_queue#delete GoogleCloudTasksQueue#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_tasks_queue#update GoogleCloudTasksQueue#update}.

---

##### `reset_app_engine_routing_override` <a name="reset_app_engine_routing_override" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.resetAppEngineRoutingOverride"></a>

```python
def reset_app_engine_routing_override() -> None
```

##### `reset_http_target` <a name="reset_http_target" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.resetHttpTarget"></a>

```python
def reset_http_target() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_rate_limits` <a name="reset_rate_limits" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.resetRateLimits"></a>

```python
def reset_rate_limits() -> None
```

##### `reset_retry_config` <a name="reset_retry_config" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.resetRetryConfig"></a>

```python
def reset_retry_config() -> None
```

##### `reset_stackdriver_logging_config` <a name="reset_stackdriver_logging_config" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.resetStackdriverLoggingConfig"></a>

```python
def reset_stackdriver_logging_config() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleCloudTasksQueue resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloud_tasks_queue

googleCloudTasksQueue.GoogleCloudTasksQueue.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloud_tasks_queue

googleCloudTasksQueue.GoogleCloudTasksQueue.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloud_tasks_queue

googleCloudTasksQueue.GoogleCloudTasksQueue.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloud_tasks_queue

googleCloudTasksQueue.GoogleCloudTasksQueue.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleCloudTasksQueue resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleCloudTasksQueue to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleCloudTasksQueue that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_tasks_queue#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleCloudTasksQueue to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.appEngineRoutingOverride">app_engine_routing_override</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference">GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.httpTarget">http_target</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference">GoogleCloudTasksQueueHttpTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.rateLimits">rate_limits</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference">GoogleCloudTasksQueueRateLimitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.retryConfig">retry_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference">GoogleCloudTasksQueueRetryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.stackdriverLoggingConfig">stackdriver_logging_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference">GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference">GoogleCloudTasksQueueTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.appEngineRoutingOverrideInput">app_engine_routing_override_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverride">GoogleCloudTasksQueueAppEngineRoutingOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.httpTargetInput">http_target_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTarget">GoogleCloudTasksQueueHttpTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.rateLimitsInput">rate_limits_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimits">GoogleCloudTasksQueueRateLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.retryConfigInput">retry_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfig">GoogleCloudTasksQueueRetryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.stackdriverLoggingConfigInput">stackdriver_logging_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfig">GoogleCloudTasksQueueStackdriverLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeouts">GoogleCloudTasksQueueTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `app_engine_routing_override`<sup>Required</sup> <a name="app_engine_routing_override" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.appEngineRoutingOverride"></a>

```python
app_engine_routing_override: GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference">GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference</a>

---

##### `http_target`<sup>Required</sup> <a name="http_target" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.httpTarget"></a>

```python
http_target: GoogleCloudTasksQueueHttpTargetOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference">GoogleCloudTasksQueueHttpTargetOutputReference</a>

---

##### `rate_limits`<sup>Required</sup> <a name="rate_limits" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.rateLimits"></a>

```python
rate_limits: GoogleCloudTasksQueueRateLimitsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference">GoogleCloudTasksQueueRateLimitsOutputReference</a>

---

##### `retry_config`<sup>Required</sup> <a name="retry_config" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.retryConfig"></a>

```python
retry_config: GoogleCloudTasksQueueRetryConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference">GoogleCloudTasksQueueRetryConfigOutputReference</a>

---

##### `stackdriver_logging_config`<sup>Required</sup> <a name="stackdriver_logging_config" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.stackdriverLoggingConfig"></a>

```python
stackdriver_logging_config: GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference">GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.timeouts"></a>

```python
timeouts: GoogleCloudTasksQueueTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference">GoogleCloudTasksQueueTimeoutsOutputReference</a>

---

##### `app_engine_routing_override_input`<sup>Optional</sup> <a name="app_engine_routing_override_input" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.appEngineRoutingOverrideInput"></a>

```python
app_engine_routing_override_input: GoogleCloudTasksQueueAppEngineRoutingOverride
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverride">GoogleCloudTasksQueueAppEngineRoutingOverride</a>

---

##### `http_target_input`<sup>Optional</sup> <a name="http_target_input" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.httpTargetInput"></a>

```python
http_target_input: GoogleCloudTasksQueueHttpTarget
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTarget">GoogleCloudTasksQueueHttpTarget</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `rate_limits_input`<sup>Optional</sup> <a name="rate_limits_input" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.rateLimitsInput"></a>

```python
rate_limits_input: GoogleCloudTasksQueueRateLimits
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimits">GoogleCloudTasksQueueRateLimits</a>

---

##### `retry_config_input`<sup>Optional</sup> <a name="retry_config_input" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.retryConfigInput"></a>

```python
retry_config_input: GoogleCloudTasksQueueRetryConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfig">GoogleCloudTasksQueueRetryConfig</a>

---

##### `stackdriver_logging_config_input`<sup>Optional</sup> <a name="stackdriver_logging_config_input" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.stackdriverLoggingConfigInput"></a>

```python
stackdriver_logging_config_input: GoogleCloudTasksQueueStackdriverLoggingConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfig">GoogleCloudTasksQueueStackdriverLoggingConfig</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleCloudTasksQueueTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeouts">GoogleCloudTasksQueueTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueue.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleCloudTasksQueueAppEngineRoutingOverride <a name="GoogleCloudTasksQueueAppEngineRoutingOverride" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverride"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverride.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloud_tasks_queue

googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverride(
  instance: str = None,
  service: str = None,
  version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverride.property.instance">instance</a></code> | <code>str</code> | App instance. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverride.property.service">service</a></code> | <code>str</code> | App service. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverride.property.version">version</a></code> | <code>str</code> | App version. |

---

##### `instance`<sup>Optional</sup> <a name="instance" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverride.property.instance"></a>

```python
instance: str
```

- *Type:* str

App instance.

By default, the task is sent to an instance which is available when the task is attempted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_tasks_queue#instance GoogleCloudTasksQueue#instance}

---

##### `service`<sup>Optional</sup> <a name="service" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverride.property.service"></a>

```python
service: str
```

- *Type:* str

App service.

By default, the task is sent to the service which is the default service when the task is attempted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_tasks_queue#service GoogleCloudTasksQueue#service}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverride.property.version"></a>

```python
version: str
```

- *Type:* str

App version.

By default, the task is sent to the version which is the default version when the task is attempted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_tasks_queue#version GoogleCloudTasksQueue#version}

---

### GoogleCloudTasksQueueConfig <a name="GoogleCloudTasksQueueConfig" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloud_tasks_queue

googleCloudTasksQueue.GoogleCloudTasksQueueConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  app_engine_routing_override: GoogleCloudTasksQueueAppEngineRoutingOverride = None,
  http_target: GoogleCloudTasksQueueHttpTarget = None,
  id: str = None,
  name: str = None,
  project: str = None,
  rate_limits: GoogleCloudTasksQueueRateLimits = None,
  retry_config: GoogleCloudTasksQueueRetryConfig = None,
  stackdriver_logging_config: GoogleCloudTasksQueueStackdriverLoggingConfig = None,
  timeouts: GoogleCloudTasksQueueTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueConfig.property.location">location</a></code> | <code>str</code> | The location of the queue. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueConfig.property.appEngineRoutingOverride">app_engine_routing_override</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverride">GoogleCloudTasksQueueAppEngineRoutingOverride</a></code> | app_engine_routing_override block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueConfig.property.httpTarget">http_target</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTarget">GoogleCloudTasksQueueHttpTarget</a></code> | http_target block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_tasks_queue#id GoogleCloudTasksQueue#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueConfig.property.name">name</a></code> | <code>str</code> | The queue name. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_tasks_queue#project GoogleCloudTasksQueue#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueConfig.property.rateLimits">rate_limits</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimits">GoogleCloudTasksQueueRateLimits</a></code> | rate_limits block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueConfig.property.retryConfig">retry_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfig">GoogleCloudTasksQueueRetryConfig</a></code> | retry_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueConfig.property.stackdriverLoggingConfig">stackdriver_logging_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfig">GoogleCloudTasksQueueStackdriverLoggingConfig</a></code> | stackdriver_logging_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeouts">GoogleCloudTasksQueueTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of the queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_tasks_queue#location GoogleCloudTasksQueue#location}

---

##### `app_engine_routing_override`<sup>Optional</sup> <a name="app_engine_routing_override" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueConfig.property.appEngineRoutingOverride"></a>

```python
app_engine_routing_override: GoogleCloudTasksQueueAppEngineRoutingOverride
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverride">GoogleCloudTasksQueueAppEngineRoutingOverride</a>

app_engine_routing_override block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_tasks_queue#app_engine_routing_override GoogleCloudTasksQueue#app_engine_routing_override}

---

##### `http_target`<sup>Optional</sup> <a name="http_target" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueConfig.property.httpTarget"></a>

```python
http_target: GoogleCloudTasksQueueHttpTarget
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTarget">GoogleCloudTasksQueueHttpTarget</a>

http_target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_tasks_queue#http_target GoogleCloudTasksQueue#http_target}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_tasks_queue#id GoogleCloudTasksQueue#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The queue name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_tasks_queue#name GoogleCloudTasksQueue#name}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_tasks_queue#project GoogleCloudTasksQueue#project}.

---

##### `rate_limits`<sup>Optional</sup> <a name="rate_limits" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueConfig.property.rateLimits"></a>

```python
rate_limits: GoogleCloudTasksQueueRateLimits
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimits">GoogleCloudTasksQueueRateLimits</a>

rate_limits block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_tasks_queue#rate_limits GoogleCloudTasksQueue#rate_limits}

---

##### `retry_config`<sup>Optional</sup> <a name="retry_config" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueConfig.property.retryConfig"></a>

```python
retry_config: GoogleCloudTasksQueueRetryConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfig">GoogleCloudTasksQueueRetryConfig</a>

retry_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_tasks_queue#retry_config GoogleCloudTasksQueue#retry_config}

---

##### `stackdriver_logging_config`<sup>Optional</sup> <a name="stackdriver_logging_config" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueConfig.property.stackdriverLoggingConfig"></a>

```python
stackdriver_logging_config: GoogleCloudTasksQueueStackdriverLoggingConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfig">GoogleCloudTasksQueueStackdriverLoggingConfig</a>

stackdriver_logging_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_tasks_queue#stackdriver_logging_config GoogleCloudTasksQueue#stackdriver_logging_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueConfig.property.timeouts"></a>

```python
timeouts: GoogleCloudTasksQueueTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeouts">GoogleCloudTasksQueueTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_tasks_queue#timeouts GoogleCloudTasksQueue#timeouts}

---

### GoogleCloudTasksQueueHttpTarget <a name="GoogleCloudTasksQueueHttpTarget" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTarget.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloud_tasks_queue

googleCloudTasksQueue.GoogleCloudTasksQueueHttpTarget(
  header_overrides: typing.Union[IResolvable, typing.List[GoogleCloudTasksQueueHttpTargetHeaderOverrides]] = None,
  http_method: str = None,
  oauth_token: GoogleCloudTasksQueueHttpTargetOauthToken = None,
  oidc_token: GoogleCloudTasksQueueHttpTargetOidcToken = None,
  uri_override: GoogleCloudTasksQueueHttpTargetUriOverride = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTarget.property.headerOverrides">header_overrides</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverrides">GoogleCloudTasksQueueHttpTargetHeaderOverrides</a>]]</code> | header_overrides block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTarget.property.httpMethod">http_method</a></code> | <code>str</code> | The HTTP method to use for the request. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTarget.property.oauthToken">oauth_token</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthToken">GoogleCloudTasksQueueHttpTargetOauthToken</a></code> | oauth_token block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTarget.property.oidcToken">oidc_token</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcToken">GoogleCloudTasksQueueHttpTargetOidcToken</a></code> | oidc_token block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTarget.property.uriOverride">uri_override</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverride">GoogleCloudTasksQueueHttpTargetUriOverride</a></code> | uri_override block. |

---

##### `header_overrides`<sup>Optional</sup> <a name="header_overrides" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTarget.property.headerOverrides"></a>

```python
header_overrides: typing.Union[IResolvable, typing.List[GoogleCloudTasksQueueHttpTargetHeaderOverrides]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverrides">GoogleCloudTasksQueueHttpTargetHeaderOverrides</a>]]

header_overrides block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_tasks_queue#header_overrides GoogleCloudTasksQueue#header_overrides}

---

##### `http_method`<sup>Optional</sup> <a name="http_method" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTarget.property.httpMethod"></a>

```python
http_method: str
```

- *Type:* str

The HTTP method to use for the request.

When specified, it overrides HttpRequest for the task.
Note that if the value is set to GET the body of the task will be ignored at execution time. Possible values: ["HTTP_METHOD_UNSPECIFIED", "POST", "GET", "HEAD", "PUT", "DELETE", "PATCH", "OPTIONS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_tasks_queue#http_method GoogleCloudTasksQueue#http_method}

---

##### `oauth_token`<sup>Optional</sup> <a name="oauth_token" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTarget.property.oauthToken"></a>

```python
oauth_token: GoogleCloudTasksQueueHttpTargetOauthToken
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthToken">GoogleCloudTasksQueueHttpTargetOauthToken</a>

oauth_token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_tasks_queue#oauth_token GoogleCloudTasksQueue#oauth_token}

---

##### `oidc_token`<sup>Optional</sup> <a name="oidc_token" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTarget.property.oidcToken"></a>

```python
oidc_token: GoogleCloudTasksQueueHttpTargetOidcToken
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcToken">GoogleCloudTasksQueueHttpTargetOidcToken</a>

oidc_token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_tasks_queue#oidc_token GoogleCloudTasksQueue#oidc_token}

---

##### `uri_override`<sup>Optional</sup> <a name="uri_override" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTarget.property.uriOverride"></a>

```python
uri_override: GoogleCloudTasksQueueHttpTargetUriOverride
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverride">GoogleCloudTasksQueueHttpTargetUriOverride</a>

uri_override block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_tasks_queue#uri_override GoogleCloudTasksQueue#uri_override}

---

### GoogleCloudTasksQueueHttpTargetHeaderOverrides <a name="GoogleCloudTasksQueueHttpTargetHeaderOverrides" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverrides.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloud_tasks_queue

googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverrides(
  header: GoogleCloudTasksQueueHttpTargetHeaderOverridesHeader
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverrides.property.header">header</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeader">GoogleCloudTasksQueueHttpTargetHeaderOverridesHeader</a></code> | header block. |

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverrides.property.header"></a>

```python
header: GoogleCloudTasksQueueHttpTargetHeaderOverridesHeader
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeader">GoogleCloudTasksQueueHttpTargetHeaderOverridesHeader</a>

header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_tasks_queue#header GoogleCloudTasksQueue#header}

---

### GoogleCloudTasksQueueHttpTargetHeaderOverridesHeader <a name="GoogleCloudTasksQueueHttpTargetHeaderOverridesHeader" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeader.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloud_tasks_queue

googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeader(
  key: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeader.property.key">key</a></code> | <code>str</code> | The Key of the header. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeader.property.value">value</a></code> | <code>str</code> | The Value of the header. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeader.property.key"></a>

```python
key: str
```

- *Type:* str

The Key of the header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_tasks_queue#key GoogleCloudTasksQueue#key}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeader.property.value"></a>

```python
value: str
```

- *Type:* str

The Value of the header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_tasks_queue#value GoogleCloudTasksQueue#value}

---

### GoogleCloudTasksQueueHttpTargetOauthToken <a name="GoogleCloudTasksQueueHttpTargetOauthToken" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthToken"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthToken.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloud_tasks_queue

googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthToken(
  service_account_email: str,
  scope: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthToken.property.serviceAccountEmail">service_account_email</a></code> | <code>str</code> | Service account email to be used for generating OAuth token. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthToken.property.scope">scope</a></code> | <code>str</code> | OAuth scope to be used for generating OAuth access token. If not specified, "https://www.googleapis.com/auth/cloud-platform" will be used. |

---

##### `service_account_email`<sup>Required</sup> <a name="service_account_email" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthToken.property.serviceAccountEmail"></a>

```python
service_account_email: str
```

- *Type:* str

Service account email to be used for generating OAuth token.

The service account must be within the same project as the queue.
The caller must have iam.serviceAccounts.actAs permission for the service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_tasks_queue#service_account_email GoogleCloudTasksQueue#service_account_email}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthToken.property.scope"></a>

```python
scope: str
```

- *Type:* str

OAuth scope to be used for generating OAuth access token. If not specified, "https://www.googleapis.com/auth/cloud-platform" will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_tasks_queue#scope GoogleCloudTasksQueue#scope}

---

### GoogleCloudTasksQueueHttpTargetOidcToken <a name="GoogleCloudTasksQueueHttpTargetOidcToken" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcToken"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcToken.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloud_tasks_queue

googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcToken(
  service_account_email: str,
  audience: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcToken.property.serviceAccountEmail">service_account_email</a></code> | <code>str</code> | Service account email to be used for generating OIDC token. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcToken.property.audience">audience</a></code> | <code>str</code> | Audience to be used when generating OIDC token. If not specified, the URI specified in target will be used. |

---

##### `service_account_email`<sup>Required</sup> <a name="service_account_email" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcToken.property.serviceAccountEmail"></a>

```python
service_account_email: str
```

- *Type:* str

Service account email to be used for generating OIDC token.

The service account must be within the same project as the queue.
The caller must have iam.serviceAccounts.actAs permission for the service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_tasks_queue#service_account_email GoogleCloudTasksQueue#service_account_email}

---

##### `audience`<sup>Optional</sup> <a name="audience" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcToken.property.audience"></a>

```python
audience: str
```

- *Type:* str

Audience to be used when generating OIDC token. If not specified, the URI specified in target will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_tasks_queue#audience GoogleCloudTasksQueue#audience}

---

### GoogleCloudTasksQueueHttpTargetUriOverride <a name="GoogleCloudTasksQueueHttpTargetUriOverride" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverride"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverride.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloud_tasks_queue

googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverride(
  host: str = None,
  path_override: GoogleCloudTasksQueueHttpTargetUriOverridePathOverride = None,
  port: str = None,
  query_override: GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverride = None,
  scheme: str = None,
  uri_override_enforce_mode: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverride.property.host">host</a></code> | <code>str</code> | Host override. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverride.property.pathOverride">path_override</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverride">GoogleCloudTasksQueueHttpTargetUriOverridePathOverride</a></code> | path_override block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverride.property.port">port</a></code> | <code>str</code> | Port override. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverride.property.queryOverride">query_override</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverride">GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverride</a></code> | query_override block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverride.property.scheme">scheme</a></code> | <code>str</code> | Scheme override. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverride.property.uriOverrideEnforceMode">uri_override_enforce_mode</a></code> | <code>str</code> | URI Override Enforce Mode. |

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverride.property.host"></a>

```python
host: str
```

- *Type:* str

Host override.

When specified, replaces the host part of the task URL.
For example, if the task URL is "https://www.google.com", and host value
is set to "example.net", the overridden URI will be changed to "https://example.net".
Host value cannot be an empty string (INVALID_ARGUMENT).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_tasks_queue#host GoogleCloudTasksQueue#host}

---

##### `path_override`<sup>Optional</sup> <a name="path_override" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverride.property.pathOverride"></a>

```python
path_override: GoogleCloudTasksQueueHttpTargetUriOverridePathOverride
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverride">GoogleCloudTasksQueueHttpTargetUriOverridePathOverride</a>

path_override block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_tasks_queue#path_override GoogleCloudTasksQueue#path_override}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverride.property.port"></a>

```python
port: str
```

- *Type:* str

Port override.

When specified, replaces the port part of the task URI.
For instance, for a URI http://www.google.com/foo and port=123, the overridden URI becomes http://www.google.com:123/foo.
Note that the port value must be a positive integer.
Setting the port to 0 (Zero) clears the URI port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_tasks_queue#port GoogleCloudTasksQueue#port}

---

##### `query_override`<sup>Optional</sup> <a name="query_override" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverride.property.queryOverride"></a>

```python
query_override: GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverride
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverride">GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverride</a>

query_override block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_tasks_queue#query_override GoogleCloudTasksQueue#query_override}

---

##### `scheme`<sup>Optional</sup> <a name="scheme" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverride.property.scheme"></a>

```python
scheme: str
```

- *Type:* str

Scheme override.

When specified, the task URI scheme is replaced by the provided value (HTTP or HTTPS). Possible values: ["HTTP", "HTTPS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_tasks_queue#scheme GoogleCloudTasksQueue#scheme}

---

##### `uri_override_enforce_mode`<sup>Optional</sup> <a name="uri_override_enforce_mode" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverride.property.uriOverrideEnforceMode"></a>

```python
uri_override_enforce_mode: str
```

- *Type:* str

URI Override Enforce Mode.

When specified, determines the Target UriOverride mode. If not specified, it defaults to ALWAYS. Possible values: ["ALWAYS", "IF_NOT_EXISTS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_tasks_queue#uri_override_enforce_mode GoogleCloudTasksQueue#uri_override_enforce_mode}

---

### GoogleCloudTasksQueueHttpTargetUriOverridePathOverride <a name="GoogleCloudTasksQueueHttpTargetUriOverridePathOverride" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverride"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverride.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloud_tasks_queue

googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverride(
  path: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverride.property.path">path</a></code> | <code>str</code> | The URI path (e.g., /users/1234). Default is an empty string. |

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverride.property.path"></a>

```python
path: str
```

- *Type:* str

The URI path (e.g., /users/1234). Default is an empty string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_tasks_queue#path GoogleCloudTasksQueue#path}

---

### GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverride <a name="GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverride" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverride"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverride.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloud_tasks_queue

googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverride(
  query_params: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverride.property.queryParams">query_params</a></code> | <code>str</code> | The query parameters (e.g., qparam1=123&qparam2=456). Default is an empty string. |

---

##### `query_params`<sup>Optional</sup> <a name="query_params" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverride.property.queryParams"></a>

```python
query_params: str
```

- *Type:* str

The query parameters (e.g., qparam1=123&qparam2=456). Default is an empty string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_tasks_queue#query_params GoogleCloudTasksQueue#query_params}

---

### GoogleCloudTasksQueueRateLimits <a name="GoogleCloudTasksQueueRateLimits" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimits.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloud_tasks_queue

googleCloudTasksQueue.GoogleCloudTasksQueueRateLimits(
  max_concurrent_dispatches: typing.Union[int, float] = None,
  max_dispatches_per_second: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimits.property.maxConcurrentDispatches">max_concurrent_dispatches</a></code> | <code>typing.Union[int, float]</code> | The maximum number of concurrent tasks that Cloud Tasks allows to be dispatched for this queue. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimits.property.maxDispatchesPerSecond">max_dispatches_per_second</a></code> | <code>typing.Union[int, float]</code> | The maximum rate at which tasks are dispatched from this queue. |

---

##### `max_concurrent_dispatches`<sup>Optional</sup> <a name="max_concurrent_dispatches" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimits.property.maxConcurrentDispatches"></a>

```python
max_concurrent_dispatches: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of concurrent tasks that Cloud Tasks allows to be dispatched for this queue.

After this threshold has been
reached, Cloud Tasks stops dispatching tasks until the number of
concurrent requests decreases.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_tasks_queue#max_concurrent_dispatches GoogleCloudTasksQueue#max_concurrent_dispatches}

---

##### `max_dispatches_per_second`<sup>Optional</sup> <a name="max_dispatches_per_second" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimits.property.maxDispatchesPerSecond"></a>

```python
max_dispatches_per_second: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum rate at which tasks are dispatched from this queue.

If unspecified when the queue is created, Cloud Tasks will pick the default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_tasks_queue#max_dispatches_per_second GoogleCloudTasksQueue#max_dispatches_per_second}

---

### GoogleCloudTasksQueueRetryConfig <a name="GoogleCloudTasksQueueRetryConfig" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloud_tasks_queue

googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfig(
  max_attempts: typing.Union[int, float] = None,
  max_backoff: str = None,
  max_doublings: typing.Union[int, float] = None,
  max_retry_duration: str = None,
  min_backoff: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfig.property.maxAttempts">max_attempts</a></code> | <code>typing.Union[int, float]</code> | Number of attempts per task. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfig.property.maxBackoff">max_backoff</a></code> | <code>str</code> | A task will be scheduled for retry between minBackoff and maxBackoff duration after it fails, if the queue's RetryConfig specifies that the task should be retried. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfig.property.maxDoublings">max_doublings</a></code> | <code>typing.Union[int, float]</code> | The time between retries will double maxDoublings times. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfig.property.maxRetryDuration">max_retry_duration</a></code> | <code>str</code> | If positive, maxRetryDuration specifies the time limit for retrying a failed task, measured from when the task was first attempted. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfig.property.minBackoff">min_backoff</a></code> | <code>str</code> | A task will be scheduled for retry between minBackoff and maxBackoff duration after it fails, if the queue's RetryConfig specifies that the task should be retried. |

---

##### `max_attempts`<sup>Optional</sup> <a name="max_attempts" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfig.property.maxAttempts"></a>

```python
max_attempts: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of attempts per task.

Cloud Tasks will attempt the task maxAttempts times (that is, if
the first attempt fails, then there will be maxAttempts - 1
retries). Must be >= -1.

If unspecified when the queue is created, Cloud Tasks will pick
the default.

-1 indicates unlimited attempts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_tasks_queue#max_attempts GoogleCloudTasksQueue#max_attempts}

---

##### `max_backoff`<sup>Optional</sup> <a name="max_backoff" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfig.property.maxBackoff"></a>

```python
max_backoff: str
```

- *Type:* str

A task will be scheduled for retry between minBackoff and maxBackoff duration after it fails, if the queue's RetryConfig specifies that the task should be retried.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_tasks_queue#max_backoff GoogleCloudTasksQueue#max_backoff}

---

##### `max_doublings`<sup>Optional</sup> <a name="max_doublings" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfig.property.maxDoublings"></a>

```python
max_doublings: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The time between retries will double maxDoublings times.

A task's retry interval starts at minBackoff, then doubles maxDoublings times,
then increases linearly, and finally retries retries at intervals of maxBackoff
up to maxAttempts times.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_tasks_queue#max_doublings GoogleCloudTasksQueue#max_doublings}

---

##### `max_retry_duration`<sup>Optional</sup> <a name="max_retry_duration" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfig.property.maxRetryDuration"></a>

```python
max_retry_duration: str
```

- *Type:* str

If positive, maxRetryDuration specifies the time limit for retrying a failed task, measured from when the task was first attempted.

Once maxRetryDuration time has passed and the task has
been attempted maxAttempts times, no further attempts will be
made and the task will be deleted.

If zero, then the task age is unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_tasks_queue#max_retry_duration GoogleCloudTasksQueue#max_retry_duration}

---

##### `min_backoff`<sup>Optional</sup> <a name="min_backoff" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfig.property.minBackoff"></a>

```python
min_backoff: str
```

- *Type:* str

A task will be scheduled for retry between minBackoff and maxBackoff duration after it fails, if the queue's RetryConfig specifies that the task should be retried.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_tasks_queue#min_backoff GoogleCloudTasksQueue#min_backoff}

---

### GoogleCloudTasksQueueStackdriverLoggingConfig <a name="GoogleCloudTasksQueueStackdriverLoggingConfig" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloud_tasks_queue

googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfig(
  sampling_ratio: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfig.property.samplingRatio">sampling_ratio</a></code> | <code>typing.Union[int, float]</code> | Specifies the fraction of operations to write to Stackdriver Logging. |

---

##### `sampling_ratio`<sup>Required</sup> <a name="sampling_ratio" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfig.property.samplingRatio"></a>

```python
sampling_ratio: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the fraction of operations to write to Stackdriver Logging.

This field may contain any value between 0.0 and 1.0, inclusive. 0.0 is the
default and means that no operations are logged.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_tasks_queue#sampling_ratio GoogleCloudTasksQueue#sampling_ratio}

---

### GoogleCloudTasksQueueTimeouts <a name="GoogleCloudTasksQueueTimeouts" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloud_tasks_queue

googleCloudTasksQueue.GoogleCloudTasksQueueTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_tasks_queue#create GoogleCloudTasksQueue#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_tasks_queue#delete GoogleCloudTasksQueue#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_tasks_queue#update GoogleCloudTasksQueue#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_tasks_queue#create GoogleCloudTasksQueue#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_tasks_queue#delete GoogleCloudTasksQueue#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_tasks_queue#update GoogleCloudTasksQueue#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference <a name="GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloud_tasks_queue

googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.resetInstance">reset_instance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.resetService">reset_service</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.resetVersion">reset_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_instance` <a name="reset_instance" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.resetInstance"></a>

```python
def reset_instance() -> None
```

##### `reset_service` <a name="reset_service" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.resetService"></a>

```python
def reset_service() -> None
```

##### `reset_version` <a name="reset_version" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.resetVersion"></a>

```python
def reset_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.property.instanceInput">instance_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.property.serviceInput">service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.property.instance">instance</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.property.service">service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverride">GoogleCloudTasksQueueAppEngineRoutingOverride</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `instance_input`<sup>Optional</sup> <a name="instance_input" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.property.instanceInput"></a>

```python
instance_input: str
```

- *Type:* str

---

##### `service_input`<sup>Optional</sup> <a name="service_input" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.property.serviceInput"></a>

```python
service_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.property.instance"></a>

```python
instance: str
```

- *Type:* str

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.property.service"></a>

```python
service: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverrideOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCloudTasksQueueAppEngineRoutingOverride
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueAppEngineRoutingOverride">GoogleCloudTasksQueueAppEngineRoutingOverride</a>

---


### GoogleCloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference <a name="GoogleCloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloud_tasks_queue

googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeader">GoogleCloudTasksQueueHttpTargetHeaderOverridesHeader</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCloudTasksQueueHttpTargetHeaderOverridesHeader
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeader">GoogleCloudTasksQueueHttpTargetHeaderOverridesHeader</a>

---


### GoogleCloudTasksQueueHttpTargetHeaderOverridesList <a name="GoogleCloudTasksQueueHttpTargetHeaderOverridesList" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloud_tasks_queue

googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleCloudTasksQueueHttpTargetHeaderOverridesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverrides">GoogleCloudTasksQueueHttpTargetHeaderOverrides</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleCloudTasksQueueHttpTargetHeaderOverrides]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverrides">GoogleCloudTasksQueueHttpTargetHeaderOverrides</a>]]

---


### GoogleCloudTasksQueueHttpTargetHeaderOverridesOutputReference <a name="GoogleCloudTasksQueueHttpTargetHeaderOverridesOutputReference" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloud_tasks_queue

googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesOutputReference.putHeader">put_header</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_header` <a name="put_header" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesOutputReference.putHeader"></a>

```python
def put_header(
  key: str,
  value: str
) -> None
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesOutputReference.putHeader.parameter.key"></a>

- *Type:* str

The Key of the header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_tasks_queue#key GoogleCloudTasksQueue#key}

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesOutputReference.putHeader.parameter.value"></a>

- *Type:* str

The Value of the header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_tasks_queue#value GoogleCloudTasksQueue#value}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesOutputReference.property.header">header</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference">GoogleCloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesOutputReference.property.headerInput">header_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeader">GoogleCloudTasksQueueHttpTargetHeaderOverridesHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverrides">GoogleCloudTasksQueueHttpTargetHeaderOverrides</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesOutputReference.property.header"></a>

```python
header: GoogleCloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference">GoogleCloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference</a>

---

##### `header_input`<sup>Optional</sup> <a name="header_input" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesOutputReference.property.headerInput"></a>

```python
header_input: GoogleCloudTasksQueueHttpTargetHeaderOverridesHeader
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesHeader">GoogleCloudTasksQueueHttpTargetHeaderOverridesHeader</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleCloudTasksQueueHttpTargetHeaderOverrides]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverrides">GoogleCloudTasksQueueHttpTargetHeaderOverrides</a>]

---


### GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference <a name="GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloud_tasks_queue

googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference.resetScope">reset_scope</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_scope` <a name="reset_scope" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference.resetScope"></a>

```python
def reset_scope() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference.property.scopeInput">scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference.property.serviceAccountEmailInput">service_account_email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference.property.scope">scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference.property.serviceAccountEmail">service_account_email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthToken">GoogleCloudTasksQueueHttpTargetOauthToken</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `scope_input`<sup>Optional</sup> <a name="scope_input" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference.property.scopeInput"></a>

```python
scope_input: str
```

- *Type:* str

---

##### `service_account_email_input`<sup>Optional</sup> <a name="service_account_email_input" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference.property.serviceAccountEmailInput"></a>

```python
service_account_email_input: str
```

- *Type:* str

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference.property.scope"></a>

```python
scope: str
```

- *Type:* str

---

##### `service_account_email`<sup>Required</sup> <a name="service_account_email" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference.property.serviceAccountEmail"></a>

```python
service_account_email: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCloudTasksQueueHttpTargetOauthToken
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthToken">GoogleCloudTasksQueueHttpTargetOauthToken</a>

---


### GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference <a name="GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloud_tasks_queue

googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference.resetAudience">reset_audience</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_audience` <a name="reset_audience" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference.resetAudience"></a>

```python
def reset_audience() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference.property.audienceInput">audience_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference.property.serviceAccountEmailInput">service_account_email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference.property.audience">audience</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference.property.serviceAccountEmail">service_account_email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcToken">GoogleCloudTasksQueueHttpTargetOidcToken</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `audience_input`<sup>Optional</sup> <a name="audience_input" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference.property.audienceInput"></a>

```python
audience_input: str
```

- *Type:* str

---

##### `service_account_email_input`<sup>Optional</sup> <a name="service_account_email_input" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference.property.serviceAccountEmailInput"></a>

```python
service_account_email_input: str
```

- *Type:* str

---

##### `audience`<sup>Required</sup> <a name="audience" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference.property.audience"></a>

```python
audience: str
```

- *Type:* str

---

##### `service_account_email`<sup>Required</sup> <a name="service_account_email" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference.property.serviceAccountEmail"></a>

```python
service_account_email: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCloudTasksQueueHttpTargetOidcToken
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcToken">GoogleCloudTasksQueueHttpTargetOidcToken</a>

---


### GoogleCloudTasksQueueHttpTargetOutputReference <a name="GoogleCloudTasksQueueHttpTargetOutputReference" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloud_tasks_queue

googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.putHeaderOverrides">put_header_overrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.putOauthToken">put_oauth_token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.putOidcToken">put_oidc_token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.putUriOverride">put_uri_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.resetHeaderOverrides">reset_header_overrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.resetHttpMethod">reset_http_method</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.resetOauthToken">reset_oauth_token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.resetOidcToken">reset_oidc_token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.resetUriOverride">reset_uri_override</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_header_overrides` <a name="put_header_overrides" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.putHeaderOverrides"></a>

```python
def put_header_overrides(
  value: typing.Union[IResolvable, typing.List[GoogleCloudTasksQueueHttpTargetHeaderOverrides]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.putHeaderOverrides.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverrides">GoogleCloudTasksQueueHttpTargetHeaderOverrides</a>]]

---

##### `put_oauth_token` <a name="put_oauth_token" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.putOauthToken"></a>

```python
def put_oauth_token(
  service_account_email: str,
  scope: str = None
) -> None
```

###### `service_account_email`<sup>Required</sup> <a name="service_account_email" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.putOauthToken.parameter.serviceAccountEmail"></a>

- *Type:* str

Service account email to be used for generating OAuth token.

The service account must be within the same project as the queue.
The caller must have iam.serviceAccounts.actAs permission for the service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_tasks_queue#service_account_email GoogleCloudTasksQueue#service_account_email}

---

###### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.putOauthToken.parameter.scope"></a>

- *Type:* str

OAuth scope to be used for generating OAuth access token. If not specified, "https://www.googleapis.com/auth/cloud-platform" will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_tasks_queue#scope GoogleCloudTasksQueue#scope}

---

##### `put_oidc_token` <a name="put_oidc_token" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.putOidcToken"></a>

```python
def put_oidc_token(
  service_account_email: str,
  audience: str = None
) -> None
```

###### `service_account_email`<sup>Required</sup> <a name="service_account_email" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.putOidcToken.parameter.serviceAccountEmail"></a>

- *Type:* str

Service account email to be used for generating OIDC token.

The service account must be within the same project as the queue.
The caller must have iam.serviceAccounts.actAs permission for the service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_tasks_queue#service_account_email GoogleCloudTasksQueue#service_account_email}

---

###### `audience`<sup>Optional</sup> <a name="audience" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.putOidcToken.parameter.audience"></a>

- *Type:* str

Audience to be used when generating OIDC token. If not specified, the URI specified in target will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_tasks_queue#audience GoogleCloudTasksQueue#audience}

---

##### `put_uri_override` <a name="put_uri_override" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.putUriOverride"></a>

```python
def put_uri_override(
  host: str = None,
  path_override: GoogleCloudTasksQueueHttpTargetUriOverridePathOverride = None,
  port: str = None,
  query_override: GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverride = None,
  scheme: str = None,
  uri_override_enforce_mode: str = None
) -> None
```

###### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.putUriOverride.parameter.host"></a>

- *Type:* str

Host override.

When specified, replaces the host part of the task URL.
For example, if the task URL is "https://www.google.com", and host value
is set to "example.net", the overridden URI will be changed to "https://example.net".
Host value cannot be an empty string (INVALID_ARGUMENT).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_tasks_queue#host GoogleCloudTasksQueue#host}

---

###### `path_override`<sup>Optional</sup> <a name="path_override" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.putUriOverride.parameter.pathOverride"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverride">GoogleCloudTasksQueueHttpTargetUriOverridePathOverride</a>

path_override block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_tasks_queue#path_override GoogleCloudTasksQueue#path_override}

---

###### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.putUriOverride.parameter.port"></a>

- *Type:* str

Port override.

When specified, replaces the port part of the task URI.
For instance, for a URI http://www.google.com/foo and port=123, the overridden URI becomes http://www.google.com:123/foo.
Note that the port value must be a positive integer.
Setting the port to 0 (Zero) clears the URI port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_tasks_queue#port GoogleCloudTasksQueue#port}

---

###### `query_override`<sup>Optional</sup> <a name="query_override" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.putUriOverride.parameter.queryOverride"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverride">GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverride</a>

query_override block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_tasks_queue#query_override GoogleCloudTasksQueue#query_override}

---

###### `scheme`<sup>Optional</sup> <a name="scheme" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.putUriOverride.parameter.scheme"></a>

- *Type:* str

Scheme override.

When specified, the task URI scheme is replaced by the provided value (HTTP or HTTPS). Possible values: ["HTTP", "HTTPS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_tasks_queue#scheme GoogleCloudTasksQueue#scheme}

---

###### `uri_override_enforce_mode`<sup>Optional</sup> <a name="uri_override_enforce_mode" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.putUriOverride.parameter.uriOverrideEnforceMode"></a>

- *Type:* str

URI Override Enforce Mode.

When specified, determines the Target UriOverride mode. If not specified, it defaults to ALWAYS. Possible values: ["ALWAYS", "IF_NOT_EXISTS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_tasks_queue#uri_override_enforce_mode GoogleCloudTasksQueue#uri_override_enforce_mode}

---

##### `reset_header_overrides` <a name="reset_header_overrides" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.resetHeaderOverrides"></a>

```python
def reset_header_overrides() -> None
```

##### `reset_http_method` <a name="reset_http_method" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.resetHttpMethod"></a>

```python
def reset_http_method() -> None
```

##### `reset_oauth_token` <a name="reset_oauth_token" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.resetOauthToken"></a>

```python
def reset_oauth_token() -> None
```

##### `reset_oidc_token` <a name="reset_oidc_token" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.resetOidcToken"></a>

```python
def reset_oidc_token() -> None
```

##### `reset_uri_override` <a name="reset_uri_override" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.resetUriOverride"></a>

```python
def reset_uri_override() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.property.headerOverrides">header_overrides</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesList">GoogleCloudTasksQueueHttpTargetHeaderOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.property.oauthToken">oauth_token</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference">GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.property.oidcToken">oidc_token</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference">GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.property.uriOverride">uri_override</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference">GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.property.headerOverridesInput">header_overrides_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverrides">GoogleCloudTasksQueueHttpTargetHeaderOverrides</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.property.httpMethodInput">http_method_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.property.oauthTokenInput">oauth_token_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthToken">GoogleCloudTasksQueueHttpTargetOauthToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.property.oidcTokenInput">oidc_token_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcToken">GoogleCloudTasksQueueHttpTargetOidcToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.property.uriOverrideInput">uri_override_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverride">GoogleCloudTasksQueueHttpTargetUriOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.property.httpMethod">http_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTarget">GoogleCloudTasksQueueHttpTarget</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `header_overrides`<sup>Required</sup> <a name="header_overrides" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.property.headerOverrides"></a>

```python
header_overrides: GoogleCloudTasksQueueHttpTargetHeaderOverridesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverridesList">GoogleCloudTasksQueueHttpTargetHeaderOverridesList</a>

---

##### `oauth_token`<sup>Required</sup> <a name="oauth_token" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.property.oauthToken"></a>

```python
oauth_token: GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference">GoogleCloudTasksQueueHttpTargetOauthTokenOutputReference</a>

---

##### `oidc_token`<sup>Required</sup> <a name="oidc_token" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.property.oidcToken"></a>

```python
oidc_token: GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference">GoogleCloudTasksQueueHttpTargetOidcTokenOutputReference</a>

---

##### `uri_override`<sup>Required</sup> <a name="uri_override" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.property.uriOverride"></a>

```python
uri_override: GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference">GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference</a>

---

##### `header_overrides_input`<sup>Optional</sup> <a name="header_overrides_input" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.property.headerOverridesInput"></a>

```python
header_overrides_input: typing.Union[IResolvable, typing.List[GoogleCloudTasksQueueHttpTargetHeaderOverrides]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetHeaderOverrides">GoogleCloudTasksQueueHttpTargetHeaderOverrides</a>]]

---

##### `http_method_input`<sup>Optional</sup> <a name="http_method_input" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.property.httpMethodInput"></a>

```python
http_method_input: str
```

- *Type:* str

---

##### `oauth_token_input`<sup>Optional</sup> <a name="oauth_token_input" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.property.oauthTokenInput"></a>

```python
oauth_token_input: GoogleCloudTasksQueueHttpTargetOauthToken
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOauthToken">GoogleCloudTasksQueueHttpTargetOauthToken</a>

---

##### `oidc_token_input`<sup>Optional</sup> <a name="oidc_token_input" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.property.oidcTokenInput"></a>

```python
oidc_token_input: GoogleCloudTasksQueueHttpTargetOidcToken
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOidcToken">GoogleCloudTasksQueueHttpTargetOidcToken</a>

---

##### `uri_override_input`<sup>Optional</sup> <a name="uri_override_input" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.property.uriOverrideInput"></a>

```python
uri_override_input: GoogleCloudTasksQueueHttpTargetUriOverride
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverride">GoogleCloudTasksQueueHttpTargetUriOverride</a>

---

##### `http_method`<sup>Required</sup> <a name="http_method" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.property.httpMethod"></a>

```python
http_method: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCloudTasksQueueHttpTarget
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTarget">GoogleCloudTasksQueueHttpTarget</a>

---


### GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference <a name="GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloud_tasks_queue

googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.putPathOverride">put_path_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.putQueryOverride">put_query_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.resetHost">reset_host</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.resetPathOverride">reset_path_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.resetQueryOverride">reset_query_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.resetScheme">reset_scheme</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.resetUriOverrideEnforceMode">reset_uri_override_enforce_mode</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_path_override` <a name="put_path_override" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.putPathOverride"></a>

```python
def put_path_override(
  path: str = None
) -> None
```

###### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.putPathOverride.parameter.path"></a>

- *Type:* str

The URI path (e.g., /users/1234). Default is an empty string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_tasks_queue#path GoogleCloudTasksQueue#path}

---

##### `put_query_override` <a name="put_query_override" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.putQueryOverride"></a>

```python
def put_query_override(
  query_params: str = None
) -> None
```

###### `query_params`<sup>Optional</sup> <a name="query_params" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.putQueryOverride.parameter.queryParams"></a>

- *Type:* str

The query parameters (e.g., qparam1=123&qparam2=456). Default is an empty string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloud_tasks_queue#query_params GoogleCloudTasksQueue#query_params}

---

##### `reset_host` <a name="reset_host" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.resetHost"></a>

```python
def reset_host() -> None
```

##### `reset_path_override` <a name="reset_path_override" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.resetPathOverride"></a>

```python
def reset_path_override() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_query_override` <a name="reset_query_override" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.resetQueryOverride"></a>

```python
def reset_query_override() -> None
```

##### `reset_scheme` <a name="reset_scheme" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.resetScheme"></a>

```python
def reset_scheme() -> None
```

##### `reset_uri_override_enforce_mode` <a name="reset_uri_override_enforce_mode" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.resetUriOverrideEnforceMode"></a>

```python
def reset_uri_override_enforce_mode() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.property.pathOverride">path_override</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference">GoogleCloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.property.queryOverride">query_override</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference">GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.property.hostInput">host_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.property.pathOverrideInput">path_override_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverride">GoogleCloudTasksQueueHttpTargetUriOverridePathOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.property.portInput">port_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.property.queryOverrideInput">query_override_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverride">GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.property.schemeInput">scheme_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.property.uriOverrideEnforceModeInput">uri_override_enforce_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.property.port">port</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.property.scheme">scheme</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.property.uriOverrideEnforceMode">uri_override_enforce_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverride">GoogleCloudTasksQueueHttpTargetUriOverride</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `path_override`<sup>Required</sup> <a name="path_override" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.property.pathOverride"></a>

```python
path_override: GoogleCloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference">GoogleCloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference</a>

---

##### `query_override`<sup>Required</sup> <a name="query_override" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.property.queryOverride"></a>

```python
query_override: GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference">GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference</a>

---

##### `host_input`<sup>Optional</sup> <a name="host_input" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.property.hostInput"></a>

```python
host_input: str
```

- *Type:* str

---

##### `path_override_input`<sup>Optional</sup> <a name="path_override_input" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.property.pathOverrideInput"></a>

```python
path_override_input: GoogleCloudTasksQueueHttpTargetUriOverridePathOverride
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverride">GoogleCloudTasksQueueHttpTargetUriOverridePathOverride</a>

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.property.portInput"></a>

```python
port_input: str
```

- *Type:* str

---

##### `query_override_input`<sup>Optional</sup> <a name="query_override_input" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.property.queryOverrideInput"></a>

```python
query_override_input: GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverride
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverride">GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverride</a>

---

##### `scheme_input`<sup>Optional</sup> <a name="scheme_input" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.property.schemeInput"></a>

```python
scheme_input: str
```

- *Type:* str

---

##### `uri_override_enforce_mode_input`<sup>Optional</sup> <a name="uri_override_enforce_mode_input" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.property.uriOverrideEnforceModeInput"></a>

```python
uri_override_enforce_mode_input: str
```

- *Type:* str

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.property.port"></a>

```python
port: str
```

- *Type:* str

---

##### `scheme`<sup>Required</sup> <a name="scheme" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.property.scheme"></a>

```python
scheme: str
```

- *Type:* str

---

##### `uri_override_enforce_mode`<sup>Required</sup> <a name="uri_override_enforce_mode" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.property.uriOverrideEnforceMode"></a>

```python
uri_override_enforce_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCloudTasksQueueHttpTargetUriOverride
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverride">GoogleCloudTasksQueueHttpTargetUriOverride</a>

---


### GoogleCloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference <a name="GoogleCloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloud_tasks_queue

googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.resetPath">reset_path</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_path` <a name="reset_path" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.resetPath"></a>

```python
def reset_path() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverride">GoogleCloudTasksQueueHttpTargetUriOverridePathOverride</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCloudTasksQueueHttpTargetUriOverridePathOverride
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverridePathOverride">GoogleCloudTasksQueueHttpTargetUriOverridePathOverride</a>

---


### GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference <a name="GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloud_tasks_queue

googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.resetQueryParams">reset_query_params</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_query_params` <a name="reset_query_params" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.resetQueryParams"></a>

```python
def reset_query_params() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.property.queryParamsInput">query_params_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.property.queryParams">query_params</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverride">GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverride</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `query_params_input`<sup>Optional</sup> <a name="query_params_input" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.property.queryParamsInput"></a>

```python
query_params_input: str
```

- *Type:* str

---

##### `query_params`<sup>Required</sup> <a name="query_params" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.property.queryParams"></a>

```python
query_params: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverride
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverride">GoogleCloudTasksQueueHttpTargetUriOverrideQueryOverride</a>

---


### GoogleCloudTasksQueueRateLimitsOutputReference <a name="GoogleCloudTasksQueueRateLimitsOutputReference" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloud_tasks_queue

googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.resetMaxConcurrentDispatches">reset_max_concurrent_dispatches</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.resetMaxDispatchesPerSecond">reset_max_dispatches_per_second</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max_concurrent_dispatches` <a name="reset_max_concurrent_dispatches" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.resetMaxConcurrentDispatches"></a>

```python
def reset_max_concurrent_dispatches() -> None
```

##### `reset_max_dispatches_per_second` <a name="reset_max_dispatches_per_second" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.resetMaxDispatchesPerSecond"></a>

```python
def reset_max_dispatches_per_second() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.property.maxBurstSize">max_burst_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.property.maxConcurrentDispatchesInput">max_concurrent_dispatches_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.property.maxDispatchesPerSecondInput">max_dispatches_per_second_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.property.maxConcurrentDispatches">max_concurrent_dispatches</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.property.maxDispatchesPerSecond">max_dispatches_per_second</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimits">GoogleCloudTasksQueueRateLimits</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_burst_size`<sup>Required</sup> <a name="max_burst_size" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.property.maxBurstSize"></a>

```python
max_burst_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_concurrent_dispatches_input`<sup>Optional</sup> <a name="max_concurrent_dispatches_input" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.property.maxConcurrentDispatchesInput"></a>

```python
max_concurrent_dispatches_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_dispatches_per_second_input`<sup>Optional</sup> <a name="max_dispatches_per_second_input" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.property.maxDispatchesPerSecondInput"></a>

```python
max_dispatches_per_second_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_concurrent_dispatches`<sup>Required</sup> <a name="max_concurrent_dispatches" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.property.maxConcurrentDispatches"></a>

```python
max_concurrent_dispatches: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_dispatches_per_second`<sup>Required</sup> <a name="max_dispatches_per_second" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.property.maxDispatchesPerSecond"></a>

```python
max_dispatches_per_second: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimitsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCloudTasksQueueRateLimits
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRateLimits">GoogleCloudTasksQueueRateLimits</a>

---


### GoogleCloudTasksQueueRetryConfigOutputReference <a name="GoogleCloudTasksQueueRetryConfigOutputReference" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloud_tasks_queue

googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.resetMaxAttempts">reset_max_attempts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.resetMaxBackoff">reset_max_backoff</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.resetMaxDoublings">reset_max_doublings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.resetMaxRetryDuration">reset_max_retry_duration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.resetMinBackoff">reset_min_backoff</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max_attempts` <a name="reset_max_attempts" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.resetMaxAttempts"></a>

```python
def reset_max_attempts() -> None
```

##### `reset_max_backoff` <a name="reset_max_backoff" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.resetMaxBackoff"></a>

```python
def reset_max_backoff() -> None
```

##### `reset_max_doublings` <a name="reset_max_doublings" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.resetMaxDoublings"></a>

```python
def reset_max_doublings() -> None
```

##### `reset_max_retry_duration` <a name="reset_max_retry_duration" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.resetMaxRetryDuration"></a>

```python
def reset_max_retry_duration() -> None
```

##### `reset_min_backoff` <a name="reset_min_backoff" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.resetMinBackoff"></a>

```python
def reset_min_backoff() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.property.maxAttemptsInput">max_attempts_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.property.maxBackoffInput">max_backoff_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.property.maxDoublingsInput">max_doublings_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.property.maxRetryDurationInput">max_retry_duration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.property.minBackoffInput">min_backoff_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.property.maxAttempts">max_attempts</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.property.maxBackoff">max_backoff</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.property.maxDoublings">max_doublings</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.property.maxRetryDuration">max_retry_duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.property.minBackoff">min_backoff</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfig">GoogleCloudTasksQueueRetryConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_attempts_input`<sup>Optional</sup> <a name="max_attempts_input" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.property.maxAttemptsInput"></a>

```python
max_attempts_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_backoff_input`<sup>Optional</sup> <a name="max_backoff_input" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.property.maxBackoffInput"></a>

```python
max_backoff_input: str
```

- *Type:* str

---

##### `max_doublings_input`<sup>Optional</sup> <a name="max_doublings_input" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.property.maxDoublingsInput"></a>

```python
max_doublings_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_retry_duration_input`<sup>Optional</sup> <a name="max_retry_duration_input" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.property.maxRetryDurationInput"></a>

```python
max_retry_duration_input: str
```

- *Type:* str

---

##### `min_backoff_input`<sup>Optional</sup> <a name="min_backoff_input" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.property.minBackoffInput"></a>

```python
min_backoff_input: str
```

- *Type:* str

---

##### `max_attempts`<sup>Required</sup> <a name="max_attempts" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.property.maxAttempts"></a>

```python
max_attempts: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_backoff`<sup>Required</sup> <a name="max_backoff" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.property.maxBackoff"></a>

```python
max_backoff: str
```

- *Type:* str

---

##### `max_doublings`<sup>Required</sup> <a name="max_doublings" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.property.maxDoublings"></a>

```python
max_doublings: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_retry_duration`<sup>Required</sup> <a name="max_retry_duration" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.property.maxRetryDuration"></a>

```python
max_retry_duration: str
```

- *Type:* str

---

##### `min_backoff`<sup>Required</sup> <a name="min_backoff" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.property.minBackoff"></a>

```python
min_backoff: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCloudTasksQueueRetryConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueRetryConfig">GoogleCloudTasksQueueRetryConfig</a>

---


### GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference <a name="GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloud_tasks_queue

googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.property.samplingRatioInput">sampling_ratio_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.property.samplingRatio">sampling_ratio</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfig">GoogleCloudTasksQueueStackdriverLoggingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `sampling_ratio_input`<sup>Optional</sup> <a name="sampling_ratio_input" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.property.samplingRatioInput"></a>

```python
sampling_ratio_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sampling_ratio`<sup>Required</sup> <a name="sampling_ratio" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.property.samplingRatio"></a>

```python
sampling_ratio: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCloudTasksQueueStackdriverLoggingConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueStackdriverLoggingConfig">GoogleCloudTasksQueueStackdriverLoggingConfig</a>

---


### GoogleCloudTasksQueueTimeoutsOutputReference <a name="GoogleCloudTasksQueueTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloud_tasks_queue

googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeouts">GoogleCloudTasksQueueTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleCloudTasksQueueTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleCloudTasksQueue.GoogleCloudTasksQueueTimeouts">GoogleCloudTasksQueueTimeouts</a>]

---



