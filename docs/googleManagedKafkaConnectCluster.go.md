# `googleManagedKafkaConnectCluster` Submodule <a name="`googleManagedKafkaConnectCluster` Submodule" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleManagedKafkaConnectCluster <a name="GoogleManagedKafkaConnectCluster" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_managed_kafka_connect_cluster google_managed_kafka_connect_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlemanagedkafkaconnectcluster"

googlemanagedkafkaconnectcluster.NewGoogleManagedKafkaConnectCluster(scope Construct, id *string, config GoogleManagedKafkaConnectClusterConfig) GoogleManagedKafkaConnectCluster
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterConfig">GoogleManagedKafkaConnectClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterConfig">GoogleManagedKafkaConnectClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.putCapacityConfig">PutCapacityConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.putGcpConfig">PutGcpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCapacityConfig` <a name="PutCapacityConfig" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.putCapacityConfig"></a>

```go
func PutCapacityConfig(value GoogleManagedKafkaConnectClusterCapacityConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.putCapacityConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfig">GoogleManagedKafkaConnectClusterCapacityConfig</a>

---

##### `PutGcpConfig` <a name="PutGcpConfig" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.putGcpConfig"></a>

```go
func PutGcpConfig(value GoogleManagedKafkaConnectClusterGcpConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.putGcpConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfig">GoogleManagedKafkaConnectClusterGcpConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.putTimeouts"></a>

```go
func PutTimeouts(value GoogleManagedKafkaConnectClusterTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeouts">GoogleManagedKafkaConnectClusterTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleManagedKafkaConnectCluster resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlemanagedkafkaconnectcluster"

googlemanagedkafkaconnectcluster.GoogleManagedKafkaConnectCluster_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlemanagedkafkaconnectcluster"

googlemanagedkafkaconnectcluster.GoogleManagedKafkaConnectCluster_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlemanagedkafkaconnectcluster"

googlemanagedkafkaconnectcluster.GoogleManagedKafkaConnectCluster_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlemanagedkafkaconnectcluster"

googlemanagedkafkaconnectcluster.GoogleManagedKafkaConnectCluster_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleManagedKafkaConnectCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleManagedKafkaConnectCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleManagedKafkaConnectCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_managed_kafka_connect_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleManagedKafkaConnectCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.capacityConfig">CapacityConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfigOutputReference">GoogleManagedKafkaConnectClusterCapacityConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.gcpConfig">GcpConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigOutputReference">GoogleManagedKafkaConnectClusterGcpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference">GoogleManagedKafkaConnectClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.capacityConfigInput">CapacityConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfig">GoogleManagedKafkaConnectClusterCapacityConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.connectClusterIdInput">ConnectClusterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.gcpConfigInput">GcpConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfig">GoogleManagedKafkaConnectClusterGcpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.kafkaClusterInput">KafkaClusterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.connectClusterId">ConnectClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.kafkaCluster">KafkaCluster</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CapacityConfig`<sup>Required</sup> <a name="CapacityConfig" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.capacityConfig"></a>

```go
func CapacityConfig() GoogleManagedKafkaConnectClusterCapacityConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfigOutputReference">GoogleManagedKafkaConnectClusterCapacityConfigOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `GcpConfig`<sup>Required</sup> <a name="GcpConfig" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.gcpConfig"></a>

```go
func GcpConfig() GoogleManagedKafkaConnectClusterGcpConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigOutputReference">GoogleManagedKafkaConnectClusterGcpConfigOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.timeouts"></a>

```go
func Timeouts() GoogleManagedKafkaConnectClusterTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference">GoogleManagedKafkaConnectClusterTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `CapacityConfigInput`<sup>Optional</sup> <a name="CapacityConfigInput" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.capacityConfigInput"></a>

```go
func CapacityConfigInput() GoogleManagedKafkaConnectClusterCapacityConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfig">GoogleManagedKafkaConnectClusterCapacityConfig</a>

---

##### `ConnectClusterIdInput`<sup>Optional</sup> <a name="ConnectClusterIdInput" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.connectClusterIdInput"></a>

```go
func ConnectClusterIdInput() *string
```

- *Type:* *string

---

##### `GcpConfigInput`<sup>Optional</sup> <a name="GcpConfigInput" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.gcpConfigInput"></a>

```go
func GcpConfigInput() GoogleManagedKafkaConnectClusterGcpConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfig">GoogleManagedKafkaConnectClusterGcpConfig</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KafkaClusterInput`<sup>Optional</sup> <a name="KafkaClusterInput" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.kafkaClusterInput"></a>

```go
func KafkaClusterInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ConnectClusterId`<sup>Required</sup> <a name="ConnectClusterId" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.connectClusterId"></a>

```go
func ConnectClusterId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KafkaCluster`<sup>Required</sup> <a name="KafkaCluster" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.kafkaCluster"></a>

```go
func KafkaCluster() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleManagedKafkaConnectClusterCapacityConfig <a name="GoogleManagedKafkaConnectClusterCapacityConfig" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlemanagedkafkaconnectcluster"

&googlemanagedkafkaconnectcluster.GoogleManagedKafkaConnectClusterCapacityConfig {
	MemoryBytes: *string,
	VcpuCount: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfig.property.memoryBytes">MemoryBytes</a></code> | <code>*string</code> | The memory to provision for the cluster in bytes. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfig.property.vcpuCount">VcpuCount</a></code> | <code>*string</code> | The number of vCPUs to provision for the cluster. The minimum is 3. |

---

##### `MemoryBytes`<sup>Required</sup> <a name="MemoryBytes" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfig.property.memoryBytes"></a>

```go
MemoryBytes *string
```

- *Type:* *string

The memory to provision for the cluster in bytes.

The CPU:memory ratio (vCPU:GiB) must be between 1:1 and 1:8. Minimum: 3221225472 (3 GiB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_managed_kafka_connect_cluster#memory_bytes GoogleManagedKafkaConnectCluster#memory_bytes}

---

##### `VcpuCount`<sup>Required</sup> <a name="VcpuCount" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfig.property.vcpuCount"></a>

```go
VcpuCount *string
```

- *Type:* *string

The number of vCPUs to provision for the cluster. The minimum is 3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_managed_kafka_connect_cluster#vcpu_count GoogleManagedKafkaConnectCluster#vcpu_count}

---

### GoogleManagedKafkaConnectClusterConfig <a name="GoogleManagedKafkaConnectClusterConfig" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlemanagedkafkaconnectcluster"

&googlemanagedkafkaconnectcluster.GoogleManagedKafkaConnectClusterConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CapacityConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfig,
	ConnectClusterId: *string,
	GcpConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfig,
	KafkaCluster: *string,
	Location: *string,
	Id: *string,
	Labels: *map[string]*string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterConfig.property.capacityConfig">CapacityConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfig">GoogleManagedKafkaConnectClusterCapacityConfig</a></code> | capacity_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterConfig.property.connectClusterId">ConnectClusterId</a></code> | <code>*string</code> | The ID to use for the Connect Cluster, which will become the final component of the connect cluster's name. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterConfig.property.gcpConfig">GcpConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfig">GoogleManagedKafkaConnectClusterGcpConfig</a></code> | gcp_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterConfig.property.kafkaCluster">KafkaCluster</a></code> | <code>*string</code> | The name of the Kafka cluster this Kafka Connect cluster is attached to. Structured like: 'projects/PROJECT_ID/locations/LOCATION/clusters/CLUSTER_ID'. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterConfig.property.location">Location</a></code> | <code>*string</code> | ID of the location of the Kafka Connect resource. See https://cloud.google.com/managed-kafka/docs/locations for a list of supported locations. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_managed_kafka_connect_cluster#id GoogleManagedKafkaConnectCluster#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | List of label KEY=VALUE pairs to add. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_managed_kafka_connect_cluster#project GoogleManagedKafkaConnectCluster#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeouts">GoogleManagedKafkaConnectClusterTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CapacityConfig`<sup>Required</sup> <a name="CapacityConfig" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterConfig.property.capacityConfig"></a>

```go
CapacityConfig GoogleManagedKafkaConnectClusterCapacityConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfig">GoogleManagedKafkaConnectClusterCapacityConfig</a>

capacity_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_managed_kafka_connect_cluster#capacity_config GoogleManagedKafkaConnectCluster#capacity_config}

---

##### `ConnectClusterId`<sup>Required</sup> <a name="ConnectClusterId" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterConfig.property.connectClusterId"></a>

```go
ConnectClusterId *string
```

- *Type:* *string

The ID to use for the Connect Cluster, which will become the final component of the connect cluster's name.

This value is structured like: 'my-connect-cluster-id'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_managed_kafka_connect_cluster#connect_cluster_id GoogleManagedKafkaConnectCluster#connect_cluster_id}

---

##### `GcpConfig`<sup>Required</sup> <a name="GcpConfig" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterConfig.property.gcpConfig"></a>

```go
GcpConfig GoogleManagedKafkaConnectClusterGcpConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfig">GoogleManagedKafkaConnectClusterGcpConfig</a>

gcp_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_managed_kafka_connect_cluster#gcp_config GoogleManagedKafkaConnectCluster#gcp_config}

---

##### `KafkaCluster`<sup>Required</sup> <a name="KafkaCluster" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterConfig.property.kafkaCluster"></a>

```go
KafkaCluster *string
```

- *Type:* *string

The name of the Kafka cluster this Kafka Connect cluster is attached to. Structured like: 'projects/PROJECT_ID/locations/LOCATION/clusters/CLUSTER_ID'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_managed_kafka_connect_cluster#kafka_cluster GoogleManagedKafkaConnectCluster#kafka_cluster}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

ID of the location of the Kafka Connect resource. See https://cloud.google.com/managed-kafka/docs/locations for a list of supported locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_managed_kafka_connect_cluster#location GoogleManagedKafkaConnectCluster#location}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_managed_kafka_connect_cluster#id GoogleManagedKafkaConnectCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

List of label KEY=VALUE pairs to add.

Keys must start with a lowercase character and contain only hyphens (-), underscores ( ), lowercase characters, and numbers. Values must contain only hyphens (-), underscores ( ), lowercase characters, and numbers.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_managed_kafka_connect_cluster#labels GoogleManagedKafkaConnectCluster#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_managed_kafka_connect_cluster#project GoogleManagedKafkaConnectCluster#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterConfig.property.timeouts"></a>

```go
Timeouts GoogleManagedKafkaConnectClusterTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeouts">GoogleManagedKafkaConnectClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_managed_kafka_connect_cluster#timeouts GoogleManagedKafkaConnectCluster#timeouts}

---

### GoogleManagedKafkaConnectClusterGcpConfig <a name="GoogleManagedKafkaConnectClusterGcpConfig" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlemanagedkafkaconnectcluster"

&googlemanagedkafkaconnectcluster.GoogleManagedKafkaConnectClusterGcpConfig {
	AccessConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfig.property.accessConfig">AccessConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfig">GoogleManagedKafkaConnectClusterGcpConfigAccessConfig</a></code> | access_config block. |

---

##### `AccessConfig`<sup>Required</sup> <a name="AccessConfig" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfig.property.accessConfig"></a>

```go
AccessConfig GoogleManagedKafkaConnectClusterGcpConfigAccessConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfig">GoogleManagedKafkaConnectClusterGcpConfigAccessConfig</a>

access_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_managed_kafka_connect_cluster#access_config GoogleManagedKafkaConnectCluster#access_config}

---

### GoogleManagedKafkaConnectClusterGcpConfigAccessConfig <a name="GoogleManagedKafkaConnectClusterGcpConfigAccessConfig" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlemanagedkafkaconnectcluster"

&googlemanagedkafkaconnectcluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfig {
	NetworkConfigs: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfig.property.networkConfigs">NetworkConfigs</a></code> | <code>interface{}</code> | network_configs block. |

---

##### `NetworkConfigs`<sup>Required</sup> <a name="NetworkConfigs" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfig.property.networkConfigs"></a>

```go
NetworkConfigs interface{}
```

- *Type:* interface{}

network_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_managed_kafka_connect_cluster#network_configs GoogleManagedKafkaConnectCluster#network_configs}

---

### GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigs <a name="GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigs" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlemanagedkafkaconnectcluster"

&googlemanagedkafkaconnectcluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigs {
	PrimarySubnet: *string,
	AdditionalSubnets: *[]*string,
	DnsDomainNames: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigs.property.primarySubnet">PrimarySubnet</a></code> | <code>*string</code> | VPC subnet to make available to the Kafka Connect cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigs.property.additionalSubnets">AdditionalSubnets</a></code> | <code>*[]*string</code> | Additional subnets may be specified. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigs.property.dnsDomainNames">DnsDomainNames</a></code> | <code>*[]*string</code> | Additional DNS domain names from the subnet's network to be made visible to the Connect Cluster. |

---

##### `PrimarySubnet`<sup>Required</sup> <a name="PrimarySubnet" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigs.property.primarySubnet"></a>

```go
PrimarySubnet *string
```

- *Type:* *string

VPC subnet to make available to the Kafka Connect cluster.

Structured like: projects/{project}/regions/{region}/subnetworks/{subnet_id}. It is used to create a Private Service Connect (PSC) interface for the Kafka Connect workers. It must be located in the same region as the Kafka Connect cluster. The CIDR range of the subnet must be within the IPv4 address ranges for private networks, as specified in RFC 1918. The primary subnet CIDR range must have a minimum size of /22 (1024 addresses).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_managed_kafka_connect_cluster#primary_subnet GoogleManagedKafkaConnectCluster#primary_subnet}

---

##### `AdditionalSubnets`<sup>Optional</sup> <a name="AdditionalSubnets" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigs.property.additionalSubnets"></a>

```go
AdditionalSubnets *[]*string
```

- *Type:* *[]*string

Additional subnets may be specified.

They may be in another region, but must be in the same VPC network. The Connect workers can communicate with network endpoints in either the primary or additional subnets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_managed_kafka_connect_cluster#additional_subnets GoogleManagedKafkaConnectCluster#additional_subnets}

---

##### `DnsDomainNames`<sup>Optional</sup> <a name="DnsDomainNames" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigs.property.dnsDomainNames"></a>

```go
DnsDomainNames *[]*string
```

- *Type:* *[]*string

Additional DNS domain names from the subnet's network to be made visible to the Connect Cluster.

When using MirrorMaker2, it's necessary to add the bootstrap address's dns domain name of the target cluster to make it visible to the connector. For example: my-kafka-cluster.us-central1.managedkafka.my-project.cloud.goog

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_managed_kafka_connect_cluster#dns_domain_names GoogleManagedKafkaConnectCluster#dns_domain_names}

---

### GoogleManagedKafkaConnectClusterTimeouts <a name="GoogleManagedKafkaConnectClusterTimeouts" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlemanagedkafkaconnectcluster"

&googlemanagedkafkaconnectcluster.GoogleManagedKafkaConnectClusterTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_managed_kafka_connect_cluster#create GoogleManagedKafkaConnectCluster#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_managed_kafka_connect_cluster#delete GoogleManagedKafkaConnectCluster#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_managed_kafka_connect_cluster#update GoogleManagedKafkaConnectCluster#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_managed_kafka_connect_cluster#create GoogleManagedKafkaConnectCluster#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_managed_kafka_connect_cluster#delete GoogleManagedKafkaConnectCluster#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_managed_kafka_connect_cluster#update GoogleManagedKafkaConnectCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleManagedKafkaConnectClusterCapacityConfigOutputReference <a name="GoogleManagedKafkaConnectClusterCapacityConfigOutputReference" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlemanagedkafkaconnectcluster"

googlemanagedkafkaconnectcluster.NewGoogleManagedKafkaConnectClusterCapacityConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleManagedKafkaConnectClusterCapacityConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfigOutputReference.property.memoryBytesInput">MemoryBytesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfigOutputReference.property.vcpuCountInput">VcpuCountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfigOutputReference.property.memoryBytes">MemoryBytes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfigOutputReference.property.vcpuCount">VcpuCount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfig">GoogleManagedKafkaConnectClusterCapacityConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MemoryBytesInput`<sup>Optional</sup> <a name="MemoryBytesInput" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfigOutputReference.property.memoryBytesInput"></a>

```go
func MemoryBytesInput() *string
```

- *Type:* *string

---

##### `VcpuCountInput`<sup>Optional</sup> <a name="VcpuCountInput" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfigOutputReference.property.vcpuCountInput"></a>

```go
func VcpuCountInput() *string
```

- *Type:* *string

---

##### `MemoryBytes`<sup>Required</sup> <a name="MemoryBytes" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfigOutputReference.property.memoryBytes"></a>

```go
func MemoryBytes() *string
```

- *Type:* *string

---

##### `VcpuCount`<sup>Required</sup> <a name="VcpuCount" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfigOutputReference.property.vcpuCount"></a>

```go
func VcpuCount() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleManagedKafkaConnectClusterCapacityConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfig">GoogleManagedKafkaConnectClusterCapacityConfig</a>

---


### GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList <a name="GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlemanagedkafkaconnectcluster"

googlemanagedkafkaconnectcluster.NewGoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList.get"></a>

```go
func Get(index *f64) GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference <a name="GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlemanagedkafkaconnectcluster"

googlemanagedkafkaconnectcluster.NewGoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.resetAdditionalSubnets">ResetAdditionalSubnets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.resetDnsDomainNames">ResetDnsDomainNames</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAdditionalSubnets` <a name="ResetAdditionalSubnets" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.resetAdditionalSubnets"></a>

```go
func ResetAdditionalSubnets()
```

##### `ResetDnsDomainNames` <a name="ResetDnsDomainNames" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.resetDnsDomainNames"></a>

```go
func ResetDnsDomainNames()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.property.additionalSubnetsInput">AdditionalSubnetsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.property.dnsDomainNamesInput">DnsDomainNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.property.primarySubnetInput">PrimarySubnetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.property.additionalSubnets">AdditionalSubnets</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.property.dnsDomainNames">DnsDomainNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.property.primarySubnet">PrimarySubnet</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdditionalSubnetsInput`<sup>Optional</sup> <a name="AdditionalSubnetsInput" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.property.additionalSubnetsInput"></a>

```go
func AdditionalSubnetsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DnsDomainNamesInput`<sup>Optional</sup> <a name="DnsDomainNamesInput" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.property.dnsDomainNamesInput"></a>

```go
func DnsDomainNamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `PrimarySubnetInput`<sup>Optional</sup> <a name="PrimarySubnetInput" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.property.primarySubnetInput"></a>

```go
func PrimarySubnetInput() *string
```

- *Type:* *string

---

##### `AdditionalSubnets`<sup>Required</sup> <a name="AdditionalSubnets" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.property.additionalSubnets"></a>

```go
func AdditionalSubnets() *[]*string
```

- *Type:* *[]*string

---

##### `DnsDomainNames`<sup>Required</sup> <a name="DnsDomainNames" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.property.dnsDomainNames"></a>

```go
func DnsDomainNames() *[]*string
```

- *Type:* *[]*string

---

##### `PrimarySubnet`<sup>Required</sup> <a name="PrimarySubnet" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.property.primarySubnet"></a>

```go
func PrimarySubnet() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference <a name="GoogleManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlemanagedkafkaconnectcluster"

googlemanagedkafkaconnectcluster.NewGoogleManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.putNetworkConfigs">PutNetworkConfigs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNetworkConfigs` <a name="PutNetworkConfigs" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.putNetworkConfigs"></a>

```go
func PutNetworkConfigs(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.putNetworkConfigs.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.property.networkConfigs">NetworkConfigs</a></code> | <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList">GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.property.networkConfigsInput">NetworkConfigsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfig">GoogleManagedKafkaConnectClusterGcpConfigAccessConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NetworkConfigs`<sup>Required</sup> <a name="NetworkConfigs" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.property.networkConfigs"></a>

```go
func NetworkConfigs() GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList">GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList</a>

---

##### `NetworkConfigsInput`<sup>Optional</sup> <a name="NetworkConfigsInput" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.property.networkConfigsInput"></a>

```go
func NetworkConfigsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleManagedKafkaConnectClusterGcpConfigAccessConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfig">GoogleManagedKafkaConnectClusterGcpConfigAccessConfig</a>

---


### GoogleManagedKafkaConnectClusterGcpConfigOutputReference <a name="GoogleManagedKafkaConnectClusterGcpConfigOutputReference" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlemanagedkafkaconnectcluster"

googlemanagedkafkaconnectcluster.NewGoogleManagedKafkaConnectClusterGcpConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleManagedKafkaConnectClusterGcpConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigOutputReference.putAccessConfig">PutAccessConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAccessConfig` <a name="PutAccessConfig" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigOutputReference.putAccessConfig"></a>

```go
func PutAccessConfig(value GoogleManagedKafkaConnectClusterGcpConfigAccessConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigOutputReference.putAccessConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfig">GoogleManagedKafkaConnectClusterGcpConfigAccessConfig</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigOutputReference.property.accessConfig">AccessConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference">GoogleManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigOutputReference.property.accessConfigInput">AccessConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfig">GoogleManagedKafkaConnectClusterGcpConfigAccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfig">GoogleManagedKafkaConnectClusterGcpConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessConfig`<sup>Required</sup> <a name="AccessConfig" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigOutputReference.property.accessConfig"></a>

```go
func AccessConfig() GoogleManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference">GoogleManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference</a>

---

##### `AccessConfigInput`<sup>Optional</sup> <a name="AccessConfigInput" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigOutputReference.property.accessConfigInput"></a>

```go
func AccessConfigInput() GoogleManagedKafkaConnectClusterGcpConfigAccessConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfig">GoogleManagedKafkaConnectClusterGcpConfigAccessConfig</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleManagedKafkaConnectClusterGcpConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfig">GoogleManagedKafkaConnectClusterGcpConfig</a>

---


### GoogleManagedKafkaConnectClusterTimeoutsOutputReference <a name="GoogleManagedKafkaConnectClusterTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlemanagedkafkaconnectcluster"

googlemanagedkafkaconnectcluster.NewGoogleManagedKafkaConnectClusterTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleManagedKafkaConnectClusterTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



