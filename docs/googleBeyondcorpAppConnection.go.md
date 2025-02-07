# `googleBeyondcorpAppConnection` Submodule <a name="`googleBeyondcorpAppConnection` Submodule" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleBeyondcorpAppConnection <a name="GoogleBeyondcorpAppConnection" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_beyondcorp_app_connection google_beyondcorp_app_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlebeyondcorpappconnection"

googlebeyondcorpappconnection.NewGoogleBeyondcorpAppConnection(scope Construct, id *string, config GoogleBeyondcorpAppConnectionConfig) GoogleBeyondcorpAppConnection
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionConfig">GoogleBeyondcorpAppConnectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionConfig">GoogleBeyondcorpAppConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.putApplicationEndpoint">PutApplicationEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.putGateway">PutGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.resetConnectors">ResetConnectors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.resetGateway">ResetGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.resetType">ResetType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutApplicationEndpoint` <a name="PutApplicationEndpoint" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.putApplicationEndpoint"></a>

```go
func PutApplicationEndpoint(value GoogleBeyondcorpAppConnectionApplicationEndpoint)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.putApplicationEndpoint.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionApplicationEndpoint">GoogleBeyondcorpAppConnectionApplicationEndpoint</a>

---

##### `PutGateway` <a name="PutGateway" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.putGateway"></a>

```go
func PutGateway(value GoogleBeyondcorpAppConnectionGateway)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.putGateway.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionGateway">GoogleBeyondcorpAppConnectionGateway</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.putTimeouts"></a>

```go
func PutTimeouts(value GoogleBeyondcorpAppConnectionTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionTimeouts">GoogleBeyondcorpAppConnectionTimeouts</a>

---

##### `ResetConnectors` <a name="ResetConnectors" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.resetConnectors"></a>

```go
func ResetConnectors()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetGateway` <a name="ResetGateway" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.resetGateway"></a>

```go
func ResetGateway()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.resetType"></a>

```go
func ResetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleBeyondcorpAppConnection resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlebeyondcorpappconnection"

googlebeyondcorpappconnection.GoogleBeyondcorpAppConnection_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlebeyondcorpappconnection"

googlebeyondcorpappconnection.GoogleBeyondcorpAppConnection_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlebeyondcorpappconnection"

googlebeyondcorpappconnection.GoogleBeyondcorpAppConnection_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlebeyondcorpappconnection"

googlebeyondcorpappconnection.GoogleBeyondcorpAppConnection_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleBeyondcorpAppConnection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleBeyondcorpAppConnection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleBeyondcorpAppConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_beyondcorp_app_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleBeyondcorpAppConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.property.applicationEndpoint">ApplicationEndpoint</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionApplicationEndpointOutputReference">GoogleBeyondcorpAppConnectionApplicationEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.property.gateway">Gateway</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionGatewayOutputReference">GoogleBeyondcorpAppConnectionGatewayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionTimeoutsOutputReference">GoogleBeyondcorpAppConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.property.applicationEndpointInput">ApplicationEndpointInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionApplicationEndpoint">GoogleBeyondcorpAppConnectionApplicationEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.property.connectorsInput">ConnectorsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.property.gatewayInput">GatewayInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionGateway">GoogleBeyondcorpAppConnectionGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.property.connectors">Connectors</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.property.type">Type</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApplicationEndpoint`<sup>Required</sup> <a name="ApplicationEndpoint" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.property.applicationEndpoint"></a>

```go
func ApplicationEndpoint() GoogleBeyondcorpAppConnectionApplicationEndpointOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionApplicationEndpointOutputReference">GoogleBeyondcorpAppConnectionApplicationEndpointOutputReference</a>

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Gateway`<sup>Required</sup> <a name="Gateway" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.property.gateway"></a>

```go
func Gateway() GoogleBeyondcorpAppConnectionGatewayOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionGatewayOutputReference">GoogleBeyondcorpAppConnectionGatewayOutputReference</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.property.timeouts"></a>

```go
func Timeouts() GoogleBeyondcorpAppConnectionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionTimeoutsOutputReference">GoogleBeyondcorpAppConnectionTimeoutsOutputReference</a>

---

##### `ApplicationEndpointInput`<sup>Optional</sup> <a name="ApplicationEndpointInput" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.property.applicationEndpointInput"></a>

```go
func ApplicationEndpointInput() GoogleBeyondcorpAppConnectionApplicationEndpoint
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionApplicationEndpoint">GoogleBeyondcorpAppConnectionApplicationEndpoint</a>

---

##### `ConnectorsInput`<sup>Optional</sup> <a name="ConnectorsInput" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.property.connectorsInput"></a>

```go
func ConnectorsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `GatewayInput`<sup>Optional</sup> <a name="GatewayInput" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.property.gatewayInput"></a>

```go
func GatewayInput() GoogleBeyondcorpAppConnectionGateway
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionGateway">GoogleBeyondcorpAppConnectionGateway</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Connectors`<sup>Required</sup> <a name="Connectors" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.property.connectors"></a>

```go
func Connectors() *[]*string
```

- *Type:* *[]*string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnection.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleBeyondcorpAppConnectionApplicationEndpoint <a name="GoogleBeyondcorpAppConnectionApplicationEndpoint" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionApplicationEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionApplicationEndpoint.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlebeyondcorpappconnection"

&googlebeyondcorpappconnection.GoogleBeyondcorpAppConnectionApplicationEndpoint {
	Host: *string,
	Port: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionApplicationEndpoint.property.host">Host</a></code> | <code>*string</code> | Hostname or IP address of the remote application endpoint. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionApplicationEndpoint.property.port">Port</a></code> | <code>*f64</code> | Port of the remote application endpoint. |

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionApplicationEndpoint.property.host"></a>

```go
Host *string
```

- *Type:* *string

Hostname or IP address of the remote application endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_beyondcorp_app_connection#host GoogleBeyondcorpAppConnection#host}

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionApplicationEndpoint.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Port of the remote application endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_beyondcorp_app_connection#port GoogleBeyondcorpAppConnection#port}

---

### GoogleBeyondcorpAppConnectionConfig <a name="GoogleBeyondcorpAppConnectionConfig" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlebeyondcorpappconnection"

&googlebeyondcorpappconnection.GoogleBeyondcorpAppConnectionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ApplicationEndpoint: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionApplicationEndpoint,
	Name: *string,
	Connectors: *[]*string,
	DisplayName: *string,
	Gateway: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionGateway,
	Id: *string,
	Labels: *map[string]*string,
	Project: *string,
	Region: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionTimeouts,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionConfig.property.applicationEndpoint">ApplicationEndpoint</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionApplicationEndpoint">GoogleBeyondcorpAppConnectionApplicationEndpoint</a></code> | application_endpoint block. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionConfig.property.name">Name</a></code> | <code>*string</code> | ID of the AppConnection. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionConfig.property.connectors">Connectors</a></code> | <code>*[]*string</code> | List of AppConnectors that are authorised to be associated with this AppConnection. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | An arbitrary user-provided name for the AppConnection. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionConfig.property.gateway">Gateway</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionGateway">GoogleBeyondcorpAppConnectionGateway</a></code> | gateway block. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_beyondcorp_app_connection#id GoogleBeyondcorpAppConnection#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Resource labels to represent user provided metadata. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_beyondcorp_app_connection#project GoogleBeyondcorpAppConnection#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionConfig.property.region">Region</a></code> | <code>*string</code> | The region of the AppConnection. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionTimeouts">GoogleBeyondcorpAppConnectionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionConfig.property.type">Type</a></code> | <code>*string</code> | The type of network connectivity used by the AppConnection. Refer to https://cloud.google.com/beyondcorp/docs/reference/rest/v1/projects.locations.appConnections#type for a list of possible values. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApplicationEndpoint`<sup>Required</sup> <a name="ApplicationEndpoint" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionConfig.property.applicationEndpoint"></a>

```go
ApplicationEndpoint GoogleBeyondcorpAppConnectionApplicationEndpoint
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionApplicationEndpoint">GoogleBeyondcorpAppConnectionApplicationEndpoint</a>

application_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_beyondcorp_app_connection#application_endpoint GoogleBeyondcorpAppConnection#application_endpoint}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

ID of the AppConnection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_beyondcorp_app_connection#name GoogleBeyondcorpAppConnection#name}

---

##### `Connectors`<sup>Optional</sup> <a name="Connectors" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionConfig.property.connectors"></a>

```go
Connectors *[]*string
```

- *Type:* *[]*string

List of AppConnectors that are authorised to be associated with this AppConnection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_beyondcorp_app_connection#connectors GoogleBeyondcorpAppConnection#connectors}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

An arbitrary user-provided name for the AppConnection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_beyondcorp_app_connection#display_name GoogleBeyondcorpAppConnection#display_name}

---

##### `Gateway`<sup>Optional</sup> <a name="Gateway" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionConfig.property.gateway"></a>

```go
Gateway GoogleBeyondcorpAppConnectionGateway
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionGateway">GoogleBeyondcorpAppConnectionGateway</a>

gateway block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_beyondcorp_app_connection#gateway GoogleBeyondcorpAppConnection#gateway}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_beyondcorp_app_connection#id GoogleBeyondcorpAppConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Resource labels to represent user provided metadata.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_beyondcorp_app_connection#labels GoogleBeyondcorpAppConnection#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_beyondcorp_app_connection#project GoogleBeyondcorpAppConnection#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

The region of the AppConnection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_beyondcorp_app_connection#region GoogleBeyondcorpAppConnection#region}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionConfig.property.timeouts"></a>

```go
Timeouts GoogleBeyondcorpAppConnectionTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionTimeouts">GoogleBeyondcorpAppConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_beyondcorp_app_connection#timeouts GoogleBeyondcorpAppConnection#timeouts}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type of network connectivity used by the AppConnection. Refer to https://cloud.google.com/beyondcorp/docs/reference/rest/v1/projects.locations.appConnections#type for a list of possible values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_beyondcorp_app_connection#type GoogleBeyondcorpAppConnection#type}

---

### GoogleBeyondcorpAppConnectionGateway <a name="GoogleBeyondcorpAppConnectionGateway" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionGateway"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionGateway.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlebeyondcorpappconnection"

&googlebeyondcorpappconnection.GoogleBeyondcorpAppConnectionGateway {
	AppGateway: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionGateway.property.appGateway">AppGateway</a></code> | <code>*string</code> | AppGateway name in following format: projects/{project_id}/locations/{locationId}/appgateways/{gateway_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionGateway.property.type">Type</a></code> | <code>*string</code> | The type of hosting used by the gateway. Refer to https://cloud.google.com/beyondcorp/docs/reference/rest/v1/projects.locations.appConnections#Type_1 for a list of possible values. |

---

##### `AppGateway`<sup>Required</sup> <a name="AppGateway" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionGateway.property.appGateway"></a>

```go
AppGateway *string
```

- *Type:* *string

AppGateway name in following format: projects/{project_id}/locations/{locationId}/appgateways/{gateway_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_beyondcorp_app_connection#app_gateway GoogleBeyondcorpAppConnection#app_gateway}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionGateway.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type of hosting used by the gateway. Refer to https://cloud.google.com/beyondcorp/docs/reference/rest/v1/projects.locations.appConnections#Type_1 for a list of possible values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_beyondcorp_app_connection#type GoogleBeyondcorpAppConnection#type}

---

### GoogleBeyondcorpAppConnectionTimeouts <a name="GoogleBeyondcorpAppConnectionTimeouts" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlebeyondcorpappconnection"

&googlebeyondcorpappconnection.GoogleBeyondcorpAppConnectionTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_beyondcorp_app_connection#create GoogleBeyondcorpAppConnection#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_beyondcorp_app_connection#delete GoogleBeyondcorpAppConnection#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_beyondcorp_app_connection#update GoogleBeyondcorpAppConnection#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_beyondcorp_app_connection#create GoogleBeyondcorpAppConnection#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_beyondcorp_app_connection#delete GoogleBeyondcorpAppConnection#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_beyondcorp_app_connection#update GoogleBeyondcorpAppConnection#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleBeyondcorpAppConnectionApplicationEndpointOutputReference <a name="GoogleBeyondcorpAppConnectionApplicationEndpointOutputReference" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionApplicationEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlebeyondcorpappconnection"

googlebeyondcorpappconnection.NewGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleBeyondcorpAppConnectionApplicationEndpointOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.property.hostInput">HostInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.property.host">Host</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionApplicationEndpoint">GoogleBeyondcorpAppConnectionApplicationEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.property.hostInput"></a>

```go
func HostInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.property.host"></a>

```go
func Host() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleBeyondcorpAppConnectionApplicationEndpoint
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionApplicationEndpoint">GoogleBeyondcorpAppConnectionApplicationEndpoint</a>

---


### GoogleBeyondcorpAppConnectionGatewayOutputReference <a name="GoogleBeyondcorpAppConnectionGatewayOutputReference" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionGatewayOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlebeyondcorpappconnection"

googlebeyondcorpappconnection.NewGoogleBeyondcorpAppConnectionGatewayOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleBeyondcorpAppConnectionGatewayOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionGatewayOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionGatewayOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionGatewayOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionGatewayOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionGatewayOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionGatewayOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionGatewayOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionGatewayOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionGatewayOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionGatewayOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionGatewayOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionGatewayOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionGatewayOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionGatewayOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionGatewayOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionGatewayOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionGatewayOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionGatewayOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionGatewayOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionGatewayOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionGatewayOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionGatewayOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionGatewayOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionGatewayOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionGatewayOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionGatewayOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionGatewayOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionGatewayOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionGatewayOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetType` <a name="ResetType" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionGatewayOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionGatewayOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionGatewayOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionGatewayOutputReference.property.ingressPort">IngressPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionGatewayOutputReference.property.uri">Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionGatewayOutputReference.property.appGatewayInput">AppGatewayInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionGatewayOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionGatewayOutputReference.property.appGateway">AppGateway</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionGatewayOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionGatewayOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionGateway">GoogleBeyondcorpAppConnectionGateway</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionGatewayOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionGatewayOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IngressPort`<sup>Required</sup> <a name="IngressPort" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionGatewayOutputReference.property.ingressPort"></a>

```go
func IngressPort() *f64
```

- *Type:* *f64

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionGatewayOutputReference.property.uri"></a>

```go
func Uri() *string
```

- *Type:* *string

---

##### `AppGatewayInput`<sup>Optional</sup> <a name="AppGatewayInput" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionGatewayOutputReference.property.appGatewayInput"></a>

```go
func AppGatewayInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionGatewayOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `AppGateway`<sup>Required</sup> <a name="AppGateway" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionGatewayOutputReference.property.appGateway"></a>

```go
func AppGateway() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionGatewayOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionGatewayOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleBeyondcorpAppConnectionGateway
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionGateway">GoogleBeyondcorpAppConnectionGateway</a>

---


### GoogleBeyondcorpAppConnectionTimeoutsOutputReference <a name="GoogleBeyondcorpAppConnectionTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlebeyondcorpappconnection"

googlebeyondcorpappconnection.NewGoogleBeyondcorpAppConnectionTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleBeyondcorpAppConnectionTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnection.GoogleBeyondcorpAppConnectionTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



