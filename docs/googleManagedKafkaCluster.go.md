# `googleManagedKafkaCluster` Submodule <a name="`googleManagedKafkaCluster` Submodule" id="@cdktf/provider-google-beta.googleManagedKafkaCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleManagedKafkaCluster <a name="GoogleManagedKafkaCluster" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_managed_kafka_cluster google_managed_kafka_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlemanagedkafkacluster"

googlemanagedkafkacluster.NewGoogleManagedKafkaCluster(scope Construct, id *string, config GoogleManagedKafkaClusterConfig) GoogleManagedKafkaCluster
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterConfig">GoogleManagedKafkaClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterConfig">GoogleManagedKafkaClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.putCapacityConfig">PutCapacityConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.putGcpConfig">PutGcpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.putRebalanceConfig">PutRebalanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.resetRebalanceConfig">ResetRebalanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCapacityConfig` <a name="PutCapacityConfig" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.putCapacityConfig"></a>

```go
func PutCapacityConfig(value GoogleManagedKafkaClusterCapacityConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.putCapacityConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterCapacityConfig">GoogleManagedKafkaClusterCapacityConfig</a>

---

##### `PutGcpConfig` <a name="PutGcpConfig" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.putGcpConfig"></a>

```go
func PutGcpConfig(value GoogleManagedKafkaClusterGcpConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.putGcpConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfig">GoogleManagedKafkaClusterGcpConfig</a>

---

##### `PutRebalanceConfig` <a name="PutRebalanceConfig" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.putRebalanceConfig"></a>

```go
func PutRebalanceConfig(value GoogleManagedKafkaClusterRebalanceConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.putRebalanceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterRebalanceConfig">GoogleManagedKafkaClusterRebalanceConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.putTimeouts"></a>

```go
func PutTimeouts(value GoogleManagedKafkaClusterTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterTimeouts">GoogleManagedKafkaClusterTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRebalanceConfig` <a name="ResetRebalanceConfig" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.resetRebalanceConfig"></a>

```go
func ResetRebalanceConfig()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleManagedKafkaCluster resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlemanagedkafkacluster"

googlemanagedkafkacluster.GoogleManagedKafkaCluster_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlemanagedkafkacluster"

googlemanagedkafkacluster.GoogleManagedKafkaCluster_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlemanagedkafkacluster"

googlemanagedkafkacluster.GoogleManagedKafkaCluster_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlemanagedkafkacluster"

googlemanagedkafkacluster.GoogleManagedKafkaCluster_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleManagedKafkaCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleManagedKafkaCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleManagedKafkaCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_managed_kafka_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleManagedKafkaCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.property.capacityConfig">CapacityConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterCapacityConfigOutputReference">GoogleManagedKafkaClusterCapacityConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.property.gcpConfig">GcpConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigOutputReference">GoogleManagedKafkaClusterGcpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.property.rebalanceConfig">RebalanceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterRebalanceConfigOutputReference">GoogleManagedKafkaClusterRebalanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterTimeoutsOutputReference">GoogleManagedKafkaClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.property.capacityConfigInput">CapacityConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterCapacityConfig">GoogleManagedKafkaClusterCapacityConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.property.clusterIdInput">ClusterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.property.gcpConfigInput">GcpConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfig">GoogleManagedKafkaClusterGcpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.property.rebalanceConfigInput">RebalanceConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterRebalanceConfig">GoogleManagedKafkaClusterRebalanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.property.clusterId">ClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CapacityConfig`<sup>Required</sup> <a name="CapacityConfig" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.property.capacityConfig"></a>

```go
func CapacityConfig() GoogleManagedKafkaClusterCapacityConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterCapacityConfigOutputReference">GoogleManagedKafkaClusterCapacityConfigOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `GcpConfig`<sup>Required</sup> <a name="GcpConfig" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.property.gcpConfig"></a>

```go
func GcpConfig() GoogleManagedKafkaClusterGcpConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigOutputReference">GoogleManagedKafkaClusterGcpConfigOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RebalanceConfig`<sup>Required</sup> <a name="RebalanceConfig" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.property.rebalanceConfig"></a>

```go
func RebalanceConfig() GoogleManagedKafkaClusterRebalanceConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterRebalanceConfigOutputReference">GoogleManagedKafkaClusterRebalanceConfigOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.property.timeouts"></a>

```go
func Timeouts() GoogleManagedKafkaClusterTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterTimeoutsOutputReference">GoogleManagedKafkaClusterTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `CapacityConfigInput`<sup>Optional</sup> <a name="CapacityConfigInput" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.property.capacityConfigInput"></a>

```go
func CapacityConfigInput() GoogleManagedKafkaClusterCapacityConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterCapacityConfig">GoogleManagedKafkaClusterCapacityConfig</a>

---

##### `ClusterIdInput`<sup>Optional</sup> <a name="ClusterIdInput" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.property.clusterIdInput"></a>

```go
func ClusterIdInput() *string
```

- *Type:* *string

---

##### `GcpConfigInput`<sup>Optional</sup> <a name="GcpConfigInput" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.property.gcpConfigInput"></a>

```go
func GcpConfigInput() GoogleManagedKafkaClusterGcpConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfig">GoogleManagedKafkaClusterGcpConfig</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RebalanceConfigInput`<sup>Optional</sup> <a name="RebalanceConfigInput" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.property.rebalanceConfigInput"></a>

```go
func RebalanceConfigInput() GoogleManagedKafkaClusterRebalanceConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterRebalanceConfig">GoogleManagedKafkaClusterRebalanceConfig</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.property.clusterId"></a>

```go
func ClusterId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaCluster.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleManagedKafkaClusterCapacityConfig <a name="GoogleManagedKafkaClusterCapacityConfig" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterCapacityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterCapacityConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlemanagedkafkacluster"

&googlemanagedkafkacluster.GoogleManagedKafkaClusterCapacityConfig {
	MemoryBytes: *string,
	VcpuCount: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterCapacityConfig.property.memoryBytes">MemoryBytes</a></code> | <code>*string</code> | The memory to provision for the cluster in bytes. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterCapacityConfig.property.vcpuCount">VcpuCount</a></code> | <code>*string</code> | The number of vCPUs to provision for the cluster. The minimum is 3. |

---

##### `MemoryBytes`<sup>Required</sup> <a name="MemoryBytes" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterCapacityConfig.property.memoryBytes"></a>

```go
MemoryBytes *string
```

- *Type:* *string

The memory to provision for the cluster in bytes.

The value must be between 1 GiB and 8 GiB per vCPU. Ex. 1024Mi, 4Gi.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_managed_kafka_cluster#memory_bytes GoogleManagedKafkaCluster#memory_bytes}

---

##### `VcpuCount`<sup>Required</sup> <a name="VcpuCount" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterCapacityConfig.property.vcpuCount"></a>

```go
VcpuCount *string
```

- *Type:* *string

The number of vCPUs to provision for the cluster. The minimum is 3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_managed_kafka_cluster#vcpu_count GoogleManagedKafkaCluster#vcpu_count}

---

### GoogleManagedKafkaClusterConfig <a name="GoogleManagedKafkaClusterConfig" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlemanagedkafkacluster"

&googlemanagedkafkacluster.GoogleManagedKafkaClusterConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CapacityConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleManagedKafkaCluster.GoogleManagedKafkaClusterCapacityConfig,
	ClusterId: *string,
	GcpConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfig,
	Location: *string,
	Id: *string,
	Labels: *map[string]*string,
	Project: *string,
	RebalanceConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleManagedKafkaCluster.GoogleManagedKafkaClusterRebalanceConfig,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleManagedKafkaCluster.GoogleManagedKafkaClusterTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterConfig.property.capacityConfig">CapacityConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterCapacityConfig">GoogleManagedKafkaClusterCapacityConfig</a></code> | capacity_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterConfig.property.clusterId">ClusterId</a></code> | <code>*string</code> | The ID to use for the cluster, which will become the final component of the cluster's name. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterConfig.property.gcpConfig">GcpConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfig">GoogleManagedKafkaClusterGcpConfig</a></code> | gcp_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterConfig.property.location">Location</a></code> | <code>*string</code> | ID of the location of the Kafka resource. See https://cloud.google.com/managed-kafka/docs/locations for a list of supported locations. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_managed_kafka_cluster#id GoogleManagedKafkaCluster#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | List of label KEY=VALUE pairs to add. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_managed_kafka_cluster#project GoogleManagedKafkaCluster#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterConfig.property.rebalanceConfig">RebalanceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterRebalanceConfig">GoogleManagedKafkaClusterRebalanceConfig</a></code> | rebalance_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterTimeouts">GoogleManagedKafkaClusterTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CapacityConfig`<sup>Required</sup> <a name="CapacityConfig" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterConfig.property.capacityConfig"></a>

```go
CapacityConfig GoogleManagedKafkaClusterCapacityConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterCapacityConfig">GoogleManagedKafkaClusterCapacityConfig</a>

capacity_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_managed_kafka_cluster#capacity_config GoogleManagedKafkaCluster#capacity_config}

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterConfig.property.clusterId"></a>

```go
ClusterId *string
```

- *Type:* *string

The ID to use for the cluster, which will become the final component of the cluster's name.

The ID must be 1-63 characters long, and match the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' to comply with RFC 1035. This value is structured like: 'my-cluster-id'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_managed_kafka_cluster#cluster_id GoogleManagedKafkaCluster#cluster_id}

---

##### `GcpConfig`<sup>Required</sup> <a name="GcpConfig" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterConfig.property.gcpConfig"></a>

```go
GcpConfig GoogleManagedKafkaClusterGcpConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfig">GoogleManagedKafkaClusterGcpConfig</a>

gcp_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_managed_kafka_cluster#gcp_config GoogleManagedKafkaCluster#gcp_config}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

ID of the location of the Kafka resource. See https://cloud.google.com/managed-kafka/docs/locations for a list of supported locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_managed_kafka_cluster#location GoogleManagedKafkaCluster#location}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_managed_kafka_cluster#id GoogleManagedKafkaCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

List of label KEY=VALUE pairs to add.

Keys must start with a lowercase character and contain only hyphens (-), underscores ( ), lowercase characters, and numbers. Values must contain only hyphens (-), underscores ( ), lowercase characters, and numbers.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_managed_kafka_cluster#labels GoogleManagedKafkaCluster#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_managed_kafka_cluster#project GoogleManagedKafkaCluster#project}.

---

##### `RebalanceConfig`<sup>Optional</sup> <a name="RebalanceConfig" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterConfig.property.rebalanceConfig"></a>

```go
RebalanceConfig GoogleManagedKafkaClusterRebalanceConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterRebalanceConfig">GoogleManagedKafkaClusterRebalanceConfig</a>

rebalance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_managed_kafka_cluster#rebalance_config GoogleManagedKafkaCluster#rebalance_config}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterConfig.property.timeouts"></a>

```go
Timeouts GoogleManagedKafkaClusterTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterTimeouts">GoogleManagedKafkaClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_managed_kafka_cluster#timeouts GoogleManagedKafkaCluster#timeouts}

---

### GoogleManagedKafkaClusterGcpConfig <a name="GoogleManagedKafkaClusterGcpConfig" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlemanagedkafkacluster"

&googlemanagedkafkacluster.GoogleManagedKafkaClusterGcpConfig {
	AccessConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfig,
	KmsKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfig.property.accessConfig">AccessConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfig">GoogleManagedKafkaClusterGcpConfigAccessConfig</a></code> | access_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfig.property.kmsKey">KmsKey</a></code> | <code>*string</code> | The Cloud KMS Key name to use for encryption. |

---

##### `AccessConfig`<sup>Required</sup> <a name="AccessConfig" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfig.property.accessConfig"></a>

```go
AccessConfig GoogleManagedKafkaClusterGcpConfigAccessConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfig">GoogleManagedKafkaClusterGcpConfigAccessConfig</a>

access_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_managed_kafka_cluster#access_config GoogleManagedKafkaCluster#access_config}

---

##### `KmsKey`<sup>Optional</sup> <a name="KmsKey" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfig.property.kmsKey"></a>

```go
KmsKey *string
```

- *Type:* *string

The Cloud KMS Key name to use for encryption.

The key must be located in the same region as the cluster and cannot be changed. Must be in the format 'projects/PROJECT_ID/locations/LOCATION/keyRings/KEY_RING/cryptoKeys/KEY'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_managed_kafka_cluster#kms_key GoogleManagedKafkaCluster#kms_key}

---

### GoogleManagedKafkaClusterGcpConfigAccessConfig <a name="GoogleManagedKafkaClusterGcpConfigAccessConfig" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlemanagedkafkacluster"

&googlemanagedkafkacluster.GoogleManagedKafkaClusterGcpConfigAccessConfig {
	NetworkConfigs: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfig.property.networkConfigs">NetworkConfigs</a></code> | <code>interface{}</code> | network_configs block. |

---

##### `NetworkConfigs`<sup>Required</sup> <a name="NetworkConfigs" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfig.property.networkConfigs"></a>

```go
NetworkConfigs interface{}
```

- *Type:* interface{}

network_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_managed_kafka_cluster#network_configs GoogleManagedKafkaCluster#network_configs}

---

### GoogleManagedKafkaClusterGcpConfigAccessConfigNetworkConfigs <a name="GoogleManagedKafkaClusterGcpConfigAccessConfigNetworkConfigs" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigNetworkConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigNetworkConfigs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlemanagedkafkacluster"

&googlemanagedkafkacluster.GoogleManagedKafkaClusterGcpConfigAccessConfigNetworkConfigs {
	Subnet: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigNetworkConfigs.property.subnet">Subnet</a></code> | <code>*string</code> | Name of the VPC subnet from which the cluster is accessible. |

---

##### `Subnet`<sup>Required</sup> <a name="Subnet" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigNetworkConfigs.property.subnet"></a>

```go
Subnet *string
```

- *Type:* *string

Name of the VPC subnet from which the cluster is accessible.

Both broker and bootstrap server IP addresses and DNS entries are automatically created in the subnet. The subnet must be located in the same region as the cluster. The project may differ. The name of the subnet must be in the format 'projects/PROJECT_ID/regions/REGION/subnetworks/SUBNET'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_managed_kafka_cluster#subnet GoogleManagedKafkaCluster#subnet}

---

### GoogleManagedKafkaClusterRebalanceConfig <a name="GoogleManagedKafkaClusterRebalanceConfig" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterRebalanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterRebalanceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlemanagedkafkacluster"

&googlemanagedkafkacluster.GoogleManagedKafkaClusterRebalanceConfig {
	Mode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterRebalanceConfig.property.mode">Mode</a></code> | <code>*string</code> | The rebalance behavior for the cluster. When not specified, defaults to 'NO_REBALANCE'. Possible values: 'MODE_UNSPECIFIED', 'NO_REBALANCE', 'AUTO_REBALANCE_ON_SCALE_UP'. |

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterRebalanceConfig.property.mode"></a>

```go
Mode *string
```

- *Type:* *string

The rebalance behavior for the cluster. When not specified, defaults to 'NO_REBALANCE'. Possible values: 'MODE_UNSPECIFIED', 'NO_REBALANCE', 'AUTO_REBALANCE_ON_SCALE_UP'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_managed_kafka_cluster#mode GoogleManagedKafkaCluster#mode}

---

### GoogleManagedKafkaClusterTimeouts <a name="GoogleManagedKafkaClusterTimeouts" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlemanagedkafkacluster"

&googlemanagedkafkacluster.GoogleManagedKafkaClusterTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_managed_kafka_cluster#create GoogleManagedKafkaCluster#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_managed_kafka_cluster#delete GoogleManagedKafkaCluster#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_managed_kafka_cluster#update GoogleManagedKafkaCluster#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_managed_kafka_cluster#create GoogleManagedKafkaCluster#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_managed_kafka_cluster#delete GoogleManagedKafkaCluster#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_managed_kafka_cluster#update GoogleManagedKafkaCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleManagedKafkaClusterCapacityConfigOutputReference <a name="GoogleManagedKafkaClusterCapacityConfigOutputReference" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterCapacityConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterCapacityConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlemanagedkafkacluster"

googlemanagedkafkacluster.NewGoogleManagedKafkaClusterCapacityConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleManagedKafkaClusterCapacityConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterCapacityConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterCapacityConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterCapacityConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterCapacityConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterCapacityConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterCapacityConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterCapacityConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterCapacityConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterCapacityConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterCapacityConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterCapacityConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterCapacityConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterCapacityConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterCapacityConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterCapacityConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterCapacityConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterCapacityConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterCapacityConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterCapacityConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterCapacityConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterCapacityConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterCapacityConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterCapacityConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterCapacityConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterCapacityConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterCapacityConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterCapacityConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterCapacityConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterCapacityConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterCapacityConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterCapacityConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterCapacityConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterCapacityConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterCapacityConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterCapacityConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterCapacityConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterCapacityConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterCapacityConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterCapacityConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterCapacityConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterCapacityConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterCapacityConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterCapacityConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterCapacityConfigOutputReference.property.memoryBytesInput">MemoryBytesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterCapacityConfigOutputReference.property.vcpuCountInput">VcpuCountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterCapacityConfigOutputReference.property.memoryBytes">MemoryBytes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterCapacityConfigOutputReference.property.vcpuCount">VcpuCount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterCapacityConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterCapacityConfig">GoogleManagedKafkaClusterCapacityConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterCapacityConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterCapacityConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MemoryBytesInput`<sup>Optional</sup> <a name="MemoryBytesInput" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterCapacityConfigOutputReference.property.memoryBytesInput"></a>

```go
func MemoryBytesInput() *string
```

- *Type:* *string

---

##### `VcpuCountInput`<sup>Optional</sup> <a name="VcpuCountInput" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterCapacityConfigOutputReference.property.vcpuCountInput"></a>

```go
func VcpuCountInput() *string
```

- *Type:* *string

---

##### `MemoryBytes`<sup>Required</sup> <a name="MemoryBytes" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterCapacityConfigOutputReference.property.memoryBytes"></a>

```go
func MemoryBytes() *string
```

- *Type:* *string

---

##### `VcpuCount`<sup>Required</sup> <a name="VcpuCount" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterCapacityConfigOutputReference.property.vcpuCount"></a>

```go
func VcpuCount() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterCapacityConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleManagedKafkaClusterCapacityConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterCapacityConfig">GoogleManagedKafkaClusterCapacityConfig</a>

---


### GoogleManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList <a name="GoogleManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlemanagedkafkacluster"

googlemanagedkafkacluster.NewGoogleManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList.get"></a>

```go
func Get(index *f64) GoogleManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference <a name="GoogleManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlemanagedkafkacluster"

googlemanagedkafkacluster.NewGoogleManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.property.subnetInput">SubnetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.property.subnet">Subnet</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SubnetInput`<sup>Optional</sup> <a name="SubnetInput" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.property.subnetInput"></a>

```go
func SubnetInput() *string
```

- *Type:* *string

---

##### `Subnet`<sup>Required</sup> <a name="Subnet" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.property.subnet"></a>

```go
func Subnet() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleManagedKafkaClusterGcpConfigAccessConfigOutputReference <a name="GoogleManagedKafkaClusterGcpConfigAccessConfigOutputReference" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlemanagedkafkacluster"

googlemanagedkafkacluster.NewGoogleManagedKafkaClusterGcpConfigAccessConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleManagedKafkaClusterGcpConfigAccessConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigOutputReference.putNetworkConfigs">PutNetworkConfigs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNetworkConfigs` <a name="PutNetworkConfigs" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigOutputReference.putNetworkConfigs"></a>

```go
func PutNetworkConfigs(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigOutputReference.putNetworkConfigs.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigOutputReference.property.networkConfigs">NetworkConfigs</a></code> | <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList">GoogleManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigOutputReference.property.networkConfigsInput">NetworkConfigsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfig">GoogleManagedKafkaClusterGcpConfigAccessConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NetworkConfigs`<sup>Required</sup> <a name="NetworkConfigs" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigOutputReference.property.networkConfigs"></a>

```go
func NetworkConfigs() GoogleManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList">GoogleManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList</a>

---

##### `NetworkConfigsInput`<sup>Optional</sup> <a name="NetworkConfigsInput" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigOutputReference.property.networkConfigsInput"></a>

```go
func NetworkConfigsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleManagedKafkaClusterGcpConfigAccessConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfig">GoogleManagedKafkaClusterGcpConfigAccessConfig</a>

---


### GoogleManagedKafkaClusterGcpConfigOutputReference <a name="GoogleManagedKafkaClusterGcpConfigOutputReference" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlemanagedkafkacluster"

googlemanagedkafkacluster.NewGoogleManagedKafkaClusterGcpConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleManagedKafkaClusterGcpConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigOutputReference.putAccessConfig">PutAccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigOutputReference.resetKmsKey">ResetKmsKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAccessConfig` <a name="PutAccessConfig" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigOutputReference.putAccessConfig"></a>

```go
func PutAccessConfig(value GoogleManagedKafkaClusterGcpConfigAccessConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigOutputReference.putAccessConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfig">GoogleManagedKafkaClusterGcpConfigAccessConfig</a>

---

##### `ResetKmsKey` <a name="ResetKmsKey" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigOutputReference.resetKmsKey"></a>

```go
func ResetKmsKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigOutputReference.property.accessConfig">AccessConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigOutputReference">GoogleManagedKafkaClusterGcpConfigAccessConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigOutputReference.property.accessConfigInput">AccessConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfig">GoogleManagedKafkaClusterGcpConfigAccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigOutputReference.property.kmsKeyInput">KmsKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigOutputReference.property.kmsKey">KmsKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfig">GoogleManagedKafkaClusterGcpConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessConfig`<sup>Required</sup> <a name="AccessConfig" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigOutputReference.property.accessConfig"></a>

```go
func AccessConfig() GoogleManagedKafkaClusterGcpConfigAccessConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfigOutputReference">GoogleManagedKafkaClusterGcpConfigAccessConfigOutputReference</a>

---

##### `AccessConfigInput`<sup>Optional</sup> <a name="AccessConfigInput" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigOutputReference.property.accessConfigInput"></a>

```go
func AccessConfigInput() GoogleManagedKafkaClusterGcpConfigAccessConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigAccessConfig">GoogleManagedKafkaClusterGcpConfigAccessConfig</a>

---

##### `KmsKeyInput`<sup>Optional</sup> <a name="KmsKeyInput" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigOutputReference.property.kmsKeyInput"></a>

```go
func KmsKeyInput() *string
```

- *Type:* *string

---

##### `KmsKey`<sup>Required</sup> <a name="KmsKey" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigOutputReference.property.kmsKey"></a>

```go
func KmsKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleManagedKafkaClusterGcpConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterGcpConfig">GoogleManagedKafkaClusterGcpConfig</a>

---


### GoogleManagedKafkaClusterRebalanceConfigOutputReference <a name="GoogleManagedKafkaClusterRebalanceConfigOutputReference" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterRebalanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterRebalanceConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlemanagedkafkacluster"

googlemanagedkafkacluster.NewGoogleManagedKafkaClusterRebalanceConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleManagedKafkaClusterRebalanceConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterRebalanceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterRebalanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterRebalanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterRebalanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterRebalanceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterRebalanceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterRebalanceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterRebalanceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterRebalanceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterRebalanceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterRebalanceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterRebalanceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterRebalanceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterRebalanceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterRebalanceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterRebalanceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterRebalanceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterRebalanceConfigOutputReference.resetMode">ResetMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterRebalanceConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterRebalanceConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterRebalanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterRebalanceConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterRebalanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterRebalanceConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterRebalanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterRebalanceConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterRebalanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterRebalanceConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterRebalanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterRebalanceConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterRebalanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterRebalanceConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterRebalanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterRebalanceConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterRebalanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterRebalanceConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterRebalanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterRebalanceConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterRebalanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterRebalanceConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterRebalanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterRebalanceConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMode` <a name="ResetMode" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterRebalanceConfigOutputReference.resetMode"></a>

```go
func ResetMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterRebalanceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterRebalanceConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterRebalanceConfigOutputReference.property.modeInput">ModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterRebalanceConfigOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterRebalanceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterRebalanceConfig">GoogleManagedKafkaClusterRebalanceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterRebalanceConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterRebalanceConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterRebalanceConfigOutputReference.property.modeInput"></a>

```go
func ModeInput() *string
```

- *Type:* *string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterRebalanceConfigOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterRebalanceConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleManagedKafkaClusterRebalanceConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterRebalanceConfig">GoogleManagedKafkaClusterRebalanceConfig</a>

---


### GoogleManagedKafkaClusterTimeoutsOutputReference <a name="GoogleManagedKafkaClusterTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlemanagedkafkacluster"

googlemanagedkafkacluster.NewGoogleManagedKafkaClusterTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleManagedKafkaClusterTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleManagedKafkaCluster.GoogleManagedKafkaClusterTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



