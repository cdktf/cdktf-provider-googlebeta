# `googleNetworkManagementConnectivityTest` Submodule <a name="`googleNetworkManagementConnectivityTest` Submodule" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkManagementConnectivityTest <a name="GoogleNetworkManagementConnectivityTest" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_management_connectivity_test google_network_management_connectivity_test}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlenetworkmanagementconnectivitytest"

googlenetworkmanagementconnectivitytest.NewGoogleNetworkManagementConnectivityTest(scope Construct, id *string, config GoogleNetworkManagementConnectivityTestConfig) GoogleNetworkManagementConnectivityTest
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestConfig">GoogleNetworkManagementConnectivityTestConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestConfig">GoogleNetworkManagementConnectivityTestConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.putDestination">PutDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.putSource">PutSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.resetProtocol">ResetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.resetRelatedProjects">ResetRelatedProjects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDestination` <a name="PutDestination" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.putDestination"></a>

```go
func PutDestination(value GoogleNetworkManagementConnectivityTestDestination)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.putDestination.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestination">GoogleNetworkManagementConnectivityTestDestination</a>

---

##### `PutSource` <a name="PutSource" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.putSource"></a>

```go
func PutSource(value GoogleNetworkManagementConnectivityTestSource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.putSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSource">GoogleNetworkManagementConnectivityTestSource</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.putTimeouts"></a>

```go
func PutTimeouts(value GoogleNetworkManagementConnectivityTestTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeouts">GoogleNetworkManagementConnectivityTestTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.resetProject"></a>

```go
func ResetProject()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.resetProtocol"></a>

```go
func ResetProtocol()
```

##### `ResetRelatedProjects` <a name="ResetRelatedProjects" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.resetRelatedProjects"></a>

```go
func ResetRelatedProjects()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleNetworkManagementConnectivityTest resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlenetworkmanagementconnectivitytest"

googlenetworkmanagementconnectivitytest.GoogleNetworkManagementConnectivityTest_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlenetworkmanagementconnectivitytest"

googlenetworkmanagementconnectivitytest.GoogleNetworkManagementConnectivityTest_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlenetworkmanagementconnectivitytest"

googlenetworkmanagementconnectivitytest.GoogleNetworkManagementConnectivityTest_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlenetworkmanagementconnectivitytest"

googlenetworkmanagementconnectivitytest.GoogleNetworkManagementConnectivityTest_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleNetworkManagementConnectivityTest resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleNetworkManagementConnectivityTest to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleNetworkManagementConnectivityTest that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_management_connectivity_test#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleNetworkManagementConnectivityTest to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.destination">Destination</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference">GoogleNetworkManagementConnectivityTestDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.source">Source</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference">GoogleNetworkManagementConnectivityTestSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference">GoogleNetworkManagementConnectivityTestTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.destinationInput">DestinationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestination">GoogleNetworkManagementConnectivityTestDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.protocolInput">ProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.relatedProjectsInput">RelatedProjectsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.sourceInput">SourceInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSource">GoogleNetworkManagementConnectivityTestSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.relatedProjects">RelatedProjects</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.destination"></a>

```go
func Destination() GoogleNetworkManagementConnectivityTestDestinationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference">GoogleNetworkManagementConnectivityTestDestinationOutputReference</a>

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.source"></a>

```go
func Source() GoogleNetworkManagementConnectivityTestSourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference">GoogleNetworkManagementConnectivityTestSourceOutputReference</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.timeouts"></a>

```go
func Timeouts() GoogleNetworkManagementConnectivityTestTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference">GoogleNetworkManagementConnectivityTestTimeoutsOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.destinationInput"></a>

```go
func DestinationInput() GoogleNetworkManagementConnectivityTestDestination
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestination">GoogleNetworkManagementConnectivityTestDestination</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.protocolInput"></a>

```go
func ProtocolInput() *string
```

- *Type:* *string

---

##### `RelatedProjectsInput`<sup>Optional</sup> <a name="RelatedProjectsInput" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.relatedProjectsInput"></a>

```go
func RelatedProjectsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.sourceInput"></a>

```go
func SourceInput() GoogleNetworkManagementConnectivityTestSource
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSource">GoogleNetworkManagementConnectivityTestSource</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `RelatedProjects`<sup>Required</sup> <a name="RelatedProjects" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.relatedProjects"></a>

```go
func RelatedProjects() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkManagementConnectivityTestConfig <a name="GoogleNetworkManagementConnectivityTestConfig" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlenetworkmanagementconnectivitytest"

&googlenetworkmanagementconnectivitytest.GoogleNetworkManagementConnectivityTestConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Destination: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestination,
	Name: *string,
	Source: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSource,
	Description: *string,
	Id: *string,
	Labels: *map[string]*string,
	Project: *string,
	Protocol: *string,
	RelatedProjects: *[]*string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestConfig.property.destination">Destination</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestination">GoogleNetworkManagementConnectivityTestDestination</a></code> | destination block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestConfig.property.name">Name</a></code> | <code>*string</code> | Unique name for the connectivity test. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestConfig.property.source">Source</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSource">GoogleNetworkManagementConnectivityTestSource</a></code> | source block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestConfig.property.description">Description</a></code> | <code>*string</code> | The user-supplied description of the Connectivity Test. Maximum of 512 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_management_connectivity_test#id GoogleNetworkManagementConnectivityTest#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Resource labels to represent user-provided metadata. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_management_connectivity_test#project GoogleNetworkManagementConnectivityTest#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestConfig.property.protocol">Protocol</a></code> | <code>*string</code> | IP Protocol of the test. When not provided, "TCP" is assumed. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestConfig.property.relatedProjects">RelatedProjects</a></code> | <code>*[]*string</code> | Other projects that may be relevant for reachability analysis. This is applicable to scenarios where a test can cross project boundaries. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeouts">GoogleNetworkManagementConnectivityTestTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestConfig.property.destination"></a>

```go
Destination GoogleNetworkManagementConnectivityTestDestination
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestination">GoogleNetworkManagementConnectivityTestDestination</a>

destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_management_connectivity_test#destination GoogleNetworkManagementConnectivityTest#destination}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Unique name for the connectivity test.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_management_connectivity_test#name GoogleNetworkManagementConnectivityTest#name}

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestConfig.property.source"></a>

```go
Source GoogleNetworkManagementConnectivityTestSource
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSource">GoogleNetworkManagementConnectivityTestSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_management_connectivity_test#source GoogleNetworkManagementConnectivityTest#source}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

The user-supplied description of the Connectivity Test. Maximum of 512 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_management_connectivity_test#description GoogleNetworkManagementConnectivityTest#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_management_connectivity_test#id GoogleNetworkManagementConnectivityTest#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Resource labels to represent user-provided metadata.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_management_connectivity_test#labels GoogleNetworkManagementConnectivityTest#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_management_connectivity_test#project GoogleNetworkManagementConnectivityTest#project}.

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestConfig.property.protocol"></a>

```go
Protocol *string
```

- *Type:* *string

IP Protocol of the test. When not provided, "TCP" is assumed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_management_connectivity_test#protocol GoogleNetworkManagementConnectivityTest#protocol}

---

##### `RelatedProjects`<sup>Optional</sup> <a name="RelatedProjects" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestConfig.property.relatedProjects"></a>

```go
RelatedProjects *[]*string
```

- *Type:* *[]*string

Other projects that may be relevant for reachability analysis. This is applicable to scenarios where a test can cross project boundaries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_management_connectivity_test#related_projects GoogleNetworkManagementConnectivityTest#related_projects}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestConfig.property.timeouts"></a>

```go
Timeouts GoogleNetworkManagementConnectivityTestTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeouts">GoogleNetworkManagementConnectivityTestTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_management_connectivity_test#timeouts GoogleNetworkManagementConnectivityTest#timeouts}

---

### GoogleNetworkManagementConnectivityTestDestination <a name="GoogleNetworkManagementConnectivityTestDestination" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestination.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlenetworkmanagementconnectivitytest"

&googlenetworkmanagementconnectivitytest.GoogleNetworkManagementConnectivityTestDestination {
	Instance: *string,
	IpAddress: *string,
	Network: *string,
	Port: *f64,
	ProjectId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestination.property.instance">Instance</a></code> | <code>*string</code> | A Compute Engine instance URI. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestination.property.ipAddress">IpAddress</a></code> | <code>*string</code> | The IP address of the endpoint, which can be an external or internal IP. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestination.property.network">Network</a></code> | <code>*string</code> | A Compute Engine network URI. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestination.property.port">Port</a></code> | <code>*f64</code> | The IP protocol port of the endpoint. Only applicable when protocol is TCP or UDP. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestination.property.projectId">ProjectId</a></code> | <code>*string</code> | Project ID where the endpoint is located. |

---

##### `Instance`<sup>Optional</sup> <a name="Instance" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestination.property.instance"></a>

```go
Instance *string
```

- *Type:* *string

A Compute Engine instance URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_management_connectivity_test#instance GoogleNetworkManagementConnectivityTest#instance}

---

##### `IpAddress`<sup>Optional</sup> <a name="IpAddress" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestination.property.ipAddress"></a>

```go
IpAddress *string
```

- *Type:* *string

The IP address of the endpoint, which can be an external or internal IP.

An IPv6 address is only allowed when the test's
destination is a global load balancer VIP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_management_connectivity_test#ip_address GoogleNetworkManagementConnectivityTest#ip_address}

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestination.property.network"></a>

```go
Network *string
```

- *Type:* *string

A Compute Engine network URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_management_connectivity_test#network GoogleNetworkManagementConnectivityTest#network}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestination.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

The IP protocol port of the endpoint. Only applicable when protocol is TCP or UDP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_management_connectivity_test#port GoogleNetworkManagementConnectivityTest#port}

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestination.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

Project ID where the endpoint is located.

The Project ID can be
derived from the URI if you provide a VM instance or network URI.
The following are two cases where you must provide the project ID:

1. Only the IP address is specified, and the IP address is within
   a GCP project. 2. When you are using Shared VPC and the IP address
   that you provide is from the service project. In this case, the
   network that the IP address resides in is defined in the host
   project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_management_connectivity_test#project_id GoogleNetworkManagementConnectivityTest#project_id}

---

### GoogleNetworkManagementConnectivityTestSource <a name="GoogleNetworkManagementConnectivityTestSource" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSource.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlenetworkmanagementconnectivitytest"

&googlenetworkmanagementconnectivitytest.GoogleNetworkManagementConnectivityTestSource {
	Instance: *string,
	IpAddress: *string,
	Network: *string,
	NetworkType: *string,
	Port: *f64,
	ProjectId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSource.property.instance">Instance</a></code> | <code>*string</code> | A Compute Engine instance URI. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSource.property.ipAddress">IpAddress</a></code> | <code>*string</code> | The IP address of the endpoint, which can be an external or internal IP. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSource.property.network">Network</a></code> | <code>*string</code> | A Compute Engine network URI. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSource.property.networkType">NetworkType</a></code> | <code>*string</code> | Type of the network where the endpoint is located. Possible values: ["GCP_NETWORK", "NON_GCP_NETWORK"]. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSource.property.port">Port</a></code> | <code>*f64</code> | The IP protocol port of the endpoint. Only applicable when protocol is TCP or UDP. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSource.property.projectId">ProjectId</a></code> | <code>*string</code> | Project ID where the endpoint is located. |

---

##### `Instance`<sup>Optional</sup> <a name="Instance" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSource.property.instance"></a>

```go
Instance *string
```

- *Type:* *string

A Compute Engine instance URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_management_connectivity_test#instance GoogleNetworkManagementConnectivityTest#instance}

---

##### `IpAddress`<sup>Optional</sup> <a name="IpAddress" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSource.property.ipAddress"></a>

```go
IpAddress *string
```

- *Type:* *string

The IP address of the endpoint, which can be an external or internal IP.

An IPv6 address is only allowed when the test's
destination is a global load balancer VIP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_management_connectivity_test#ip_address GoogleNetworkManagementConnectivityTest#ip_address}

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSource.property.network"></a>

```go
Network *string
```

- *Type:* *string

A Compute Engine network URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_management_connectivity_test#network GoogleNetworkManagementConnectivityTest#network}

---

##### `NetworkType`<sup>Optional</sup> <a name="NetworkType" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSource.property.networkType"></a>

```go
NetworkType *string
```

- *Type:* *string

Type of the network where the endpoint is located. Possible values: ["GCP_NETWORK", "NON_GCP_NETWORK"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_management_connectivity_test#network_type GoogleNetworkManagementConnectivityTest#network_type}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSource.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

The IP protocol port of the endpoint. Only applicable when protocol is TCP or UDP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_management_connectivity_test#port GoogleNetworkManagementConnectivityTest#port}

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSource.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

Project ID where the endpoint is located.

The Project ID can be
derived from the URI if you provide a VM instance or network URI.
The following are two cases where you must provide the project ID:

1. Only the IP address is specified, and the IP address is
   within a GCP project.
2. When you are using Shared VPC and the IP address
   that you provide is from the service project. In this case,
   the network that the IP address resides in is defined in the
   host project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_management_connectivity_test#project_id GoogleNetworkManagementConnectivityTest#project_id}

---

### GoogleNetworkManagementConnectivityTestTimeouts <a name="GoogleNetworkManagementConnectivityTestTimeouts" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlenetworkmanagementconnectivitytest"

&googlenetworkmanagementconnectivitytest.GoogleNetworkManagementConnectivityTestTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_management_connectivity_test#create GoogleNetworkManagementConnectivityTest#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_management_connectivity_test#delete GoogleNetworkManagementConnectivityTest#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_management_connectivity_test#update GoogleNetworkManagementConnectivityTest#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_management_connectivity_test#create GoogleNetworkManagementConnectivityTest#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_management_connectivity_test#delete GoogleNetworkManagementConnectivityTest#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_management_connectivity_test#update GoogleNetworkManagementConnectivityTest#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkManagementConnectivityTestDestinationOutputReference <a name="GoogleNetworkManagementConnectivityTestDestinationOutputReference" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlenetworkmanagementconnectivitytest"

googlenetworkmanagementconnectivitytest.NewGoogleNetworkManagementConnectivityTestDestinationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleNetworkManagementConnectivityTestDestinationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.resetInstance">ResetInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.resetIpAddress">ResetIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.resetNetwork">ResetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.resetProjectId">ResetProjectId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInstance` <a name="ResetInstance" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.resetInstance"></a>

```go
func ResetInstance()
```

##### `ResetIpAddress` <a name="ResetIpAddress" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.resetIpAddress"></a>

```go
func ResetIpAddress()
```

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.resetNetwork"></a>

```go
func ResetNetwork()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.resetPort"></a>

```go
func ResetPort()
```

##### `ResetProjectId` <a name="ResetProjectId" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.resetProjectId"></a>

```go
func ResetProjectId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.property.instanceInput">InstanceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.property.ipAddressInput">IpAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.property.networkInput">NetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.property.instance">Instance</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.property.ipAddress">IpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestination">GoogleNetworkManagementConnectivityTestDestination</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InstanceInput`<sup>Optional</sup> <a name="InstanceInput" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.property.instanceInput"></a>

```go
func InstanceInput() *string
```

- *Type:* *string

---

##### `IpAddressInput`<sup>Optional</sup> <a name="IpAddressInput" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.property.ipAddressInput"></a>

```go
func IpAddressInput() *string
```

- *Type:* *string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.property.networkInput"></a>

```go
func NetworkInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.property.instance"></a>

```go
func Instance() *string
```

- *Type:* *string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.property.ipAddress"></a>

```go
func IpAddress() *string
```

- *Type:* *string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleNetworkManagementConnectivityTestDestination
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestination">GoogleNetworkManagementConnectivityTestDestination</a>

---


### GoogleNetworkManagementConnectivityTestSourceOutputReference <a name="GoogleNetworkManagementConnectivityTestSourceOutputReference" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlenetworkmanagementconnectivitytest"

googlenetworkmanagementconnectivitytest.NewGoogleNetworkManagementConnectivityTestSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleNetworkManagementConnectivityTestSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.resetInstance">ResetInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.resetIpAddress">ResetIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.resetNetwork">ResetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.resetNetworkType">ResetNetworkType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.resetProjectId">ResetProjectId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInstance` <a name="ResetInstance" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.resetInstance"></a>

```go
func ResetInstance()
```

##### `ResetIpAddress` <a name="ResetIpAddress" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.resetIpAddress"></a>

```go
func ResetIpAddress()
```

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.resetNetwork"></a>

```go
func ResetNetwork()
```

##### `ResetNetworkType` <a name="ResetNetworkType" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.resetNetworkType"></a>

```go
func ResetNetworkType()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.resetPort"></a>

```go
func ResetPort()
```

##### `ResetProjectId` <a name="ResetProjectId" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.resetProjectId"></a>

```go
func ResetProjectId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.property.instanceInput">InstanceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.property.ipAddressInput">IpAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.property.networkInput">NetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.property.networkTypeInput">NetworkTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.property.instance">Instance</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.property.ipAddress">IpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.property.networkType">NetworkType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSource">GoogleNetworkManagementConnectivityTestSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InstanceInput`<sup>Optional</sup> <a name="InstanceInput" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.property.instanceInput"></a>

```go
func InstanceInput() *string
```

- *Type:* *string

---

##### `IpAddressInput`<sup>Optional</sup> <a name="IpAddressInput" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.property.ipAddressInput"></a>

```go
func IpAddressInput() *string
```

- *Type:* *string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.property.networkInput"></a>

```go
func NetworkInput() *string
```

- *Type:* *string

---

##### `NetworkTypeInput`<sup>Optional</sup> <a name="NetworkTypeInput" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.property.networkTypeInput"></a>

```go
func NetworkTypeInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.property.instance"></a>

```go
func Instance() *string
```

- *Type:* *string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.property.ipAddress"></a>

```go
func IpAddress() *string
```

- *Type:* *string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `NetworkType`<sup>Required</sup> <a name="NetworkType" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.property.networkType"></a>

```go
func NetworkType() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleNetworkManagementConnectivityTestSource
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSource">GoogleNetworkManagementConnectivityTestSource</a>

---


### GoogleNetworkManagementConnectivityTestTimeoutsOutputReference <a name="GoogleNetworkManagementConnectivityTestTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlenetworkmanagementconnectivitytest"

googlenetworkmanagementconnectivitytest.NewGoogleNetworkManagementConnectivityTestTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleNetworkManagementConnectivityTestTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



