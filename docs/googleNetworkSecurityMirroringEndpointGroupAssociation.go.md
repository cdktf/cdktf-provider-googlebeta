# `googleNetworkSecurityMirroringEndpointGroupAssociation` Submodule <a name="`googleNetworkSecurityMirroringEndpointGroupAssociation` Submodule" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkSecurityMirroringEndpointGroupAssociation <a name="GoogleNetworkSecurityMirroringEndpointGroupAssociation" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_network_security_mirroring_endpoint_group_association google_network_security_mirroring_endpoint_group_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlenetworksecuritymirroringendpointgroupassociation"

googlenetworksecuritymirroringendpointgroupassociation.NewGoogleNetworkSecurityMirroringEndpointGroupAssociation(scope Construct, id *string, config GoogleNetworkSecurityMirroringEndpointGroupAssociationConfig) GoogleNetworkSecurityMirroringEndpointGroupAssociation
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationConfig">GoogleNetworkSecurityMirroringEndpointGroupAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationConfig">GoogleNetworkSecurityMirroringEndpointGroupAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.resetMirroringEndpointGroupAssociationId">ResetMirroringEndpointGroupAssociationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.putTimeouts"></a>

```go
func PutTimeouts(value GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeouts">GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetMirroringEndpointGroupAssociationId` <a name="ResetMirroringEndpointGroupAssociationId" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.resetMirroringEndpointGroupAssociationId"></a>

```go
func ResetMirroringEndpointGroupAssociationId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleNetworkSecurityMirroringEndpointGroupAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlenetworksecuritymirroringendpointgroupassociation"

googlenetworksecuritymirroringendpointgroupassociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlenetworksecuritymirroringendpointgroupassociation"

googlenetworksecuritymirroringendpointgroupassociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlenetworksecuritymirroringendpointgroupassociation"

googlenetworksecuritymirroringendpointgroupassociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlenetworksecuritymirroringendpointgroupassociation"

googlenetworksecuritymirroringendpointgroupassociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleNetworkSecurityMirroringEndpointGroupAssociation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleNetworkSecurityMirroringEndpointGroupAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleNetworkSecurityMirroringEndpointGroupAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_network_security_mirroring_endpoint_group_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleNetworkSecurityMirroringEndpointGroupAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.locations">Locations</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsList">GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.locationsDetails">LocationsDetails</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList">GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.reconciling">Reconciling</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference">GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.mirroringEndpointGroupAssociationIdInput">MirroringEndpointGroupAssociationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.mirroringEndpointGroupInput">MirroringEndpointGroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.networkInput">NetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.mirroringEndpointGroup">MirroringEndpointGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.mirroringEndpointGroupAssociationId">MirroringEndpointGroupAssociationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Locations`<sup>Required</sup> <a name="Locations" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.locations"></a>

```go
func Locations() GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsList">GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsList</a>

---

##### `LocationsDetails`<sup>Required</sup> <a name="LocationsDetails" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.locationsDetails"></a>

```go
func LocationsDetails() GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList">GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Reconciling`<sup>Required</sup> <a name="Reconciling" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.reconciling"></a>

```go
func Reconciling() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.timeouts"></a>

```go
func Timeouts() GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference">GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `MirroringEndpointGroupAssociationIdInput`<sup>Optional</sup> <a name="MirroringEndpointGroupAssociationIdInput" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.mirroringEndpointGroupAssociationIdInput"></a>

```go
func MirroringEndpointGroupAssociationIdInput() *string
```

- *Type:* *string

---

##### `MirroringEndpointGroupInput`<sup>Optional</sup> <a name="MirroringEndpointGroupInput" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.mirroringEndpointGroupInput"></a>

```go
func MirroringEndpointGroupInput() *string
```

- *Type:* *string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.networkInput"></a>

```go
func NetworkInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `MirroringEndpointGroup`<sup>Required</sup> <a name="MirroringEndpointGroup" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.mirroringEndpointGroup"></a>

```go
func MirroringEndpointGroup() *string
```

- *Type:* *string

---

##### `MirroringEndpointGroupAssociationId`<sup>Required</sup> <a name="MirroringEndpointGroupAssociationId" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.mirroringEndpointGroupAssociationId"></a>

```go
func MirroringEndpointGroupAssociationId() *string
```

- *Type:* *string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociation.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkSecurityMirroringEndpointGroupAssociationConfig <a name="GoogleNetworkSecurityMirroringEndpointGroupAssociationConfig" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlenetworksecuritymirroringendpointgroupassociation"

&googlenetworksecuritymirroringendpointgroupassociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	MirroringEndpointGroup: *string,
	Network: *string,
	Id: *string,
	Labels: *map[string]*string,
	MirroringEndpointGroupAssociationId: *string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationConfig.property.location">Location</a></code> | <code>*string</code> | The cloud location of the association, currently restricted to 'global'. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationConfig.property.mirroringEndpointGroup">MirroringEndpointGroup</a></code> | <code>*string</code> | The endpoint group that this association is connected to, for example: 'projects/123456789/locations/global/mirroringEndpointGroups/my-eg'. See https://google.aip.dev/124. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationConfig.property.network">Network</a></code> | <code>*string</code> | The VPC network that is associated. for example: 'projects/123456789/global/networks/my-network'. See https://google.aip.dev/124. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_network_security_mirroring_endpoint_group_association#id GoogleNetworkSecurityMirroringEndpointGroupAssociation#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Labels are key/value pairs that help to organize and filter resources. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationConfig.property.mirroringEndpointGroupAssociationId">MirroringEndpointGroupAssociationId</a></code> | <code>*string</code> | The ID to use for the new association, which will become the final component of the endpoint group's resource name. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_network_security_mirroring_endpoint_group_association#project GoogleNetworkSecurityMirroringEndpointGroupAssociation#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeouts">GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The cloud location of the association, currently restricted to 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_network_security_mirroring_endpoint_group_association#location GoogleNetworkSecurityMirroringEndpointGroupAssociation#location}

---

##### `MirroringEndpointGroup`<sup>Required</sup> <a name="MirroringEndpointGroup" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationConfig.property.mirroringEndpointGroup"></a>

```go
MirroringEndpointGroup *string
```

- *Type:* *string

The endpoint group that this association is connected to, for example: 'projects/123456789/locations/global/mirroringEndpointGroups/my-eg'. See https://google.aip.dev/124.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_network_security_mirroring_endpoint_group_association#mirroring_endpoint_group GoogleNetworkSecurityMirroringEndpointGroupAssociation#mirroring_endpoint_group}

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationConfig.property.network"></a>

```go
Network *string
```

- *Type:* *string

The VPC network that is associated. for example: 'projects/123456789/global/networks/my-network'. See https://google.aip.dev/124.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_network_security_mirroring_endpoint_group_association#network GoogleNetworkSecurityMirroringEndpointGroupAssociation#network}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_network_security_mirroring_endpoint_group_association#id GoogleNetworkSecurityMirroringEndpointGroupAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Labels are key/value pairs that help to organize and filter resources.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_network_security_mirroring_endpoint_group_association#labels GoogleNetworkSecurityMirroringEndpointGroupAssociation#labels}

---

##### `MirroringEndpointGroupAssociationId`<sup>Optional</sup> <a name="MirroringEndpointGroupAssociationId" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationConfig.property.mirroringEndpointGroupAssociationId"></a>

```go
MirroringEndpointGroupAssociationId *string
```

- *Type:* *string

The ID to use for the new association, which will become the final component of the endpoint group's resource name.

If not provided, the
server will generate a unique ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_network_security_mirroring_endpoint_group_association#mirroring_endpoint_group_association_id GoogleNetworkSecurityMirroringEndpointGroupAssociation#mirroring_endpoint_group_association_id}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_network_security_mirroring_endpoint_group_association#project GoogleNetworkSecurityMirroringEndpointGroupAssociation#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationConfig.property.timeouts"></a>

```go
Timeouts GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeouts">GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_network_security_mirroring_endpoint_group_association#timeouts GoogleNetworkSecurityMirroringEndpointGroupAssociation#timeouts}

---

### GoogleNetworkSecurityMirroringEndpointGroupAssociationLocations <a name="GoogleNetworkSecurityMirroringEndpointGroupAssociationLocations" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocations.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlenetworksecuritymirroringendpointgroupassociation"

&googlenetworksecuritymirroringendpointgroupassociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocations {

}
```


### GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetails <a name="GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetails" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetails.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlenetworksecuritymirroringendpointgroupassociation"

&googlenetworksecuritymirroringendpointgroupassociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetails {

}
```


### GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeouts <a name="GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlenetworksecuritymirroringendpointgroupassociation"

&googlenetworksecuritymirroringendpointgroupassociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_network_security_mirroring_endpoint_group_association#create GoogleNetworkSecurityMirroringEndpointGroupAssociation#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_network_security_mirroring_endpoint_group_association#delete GoogleNetworkSecurityMirroringEndpointGroupAssociation#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_network_security_mirroring_endpoint_group_association#update GoogleNetworkSecurityMirroringEndpointGroupAssociation#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_network_security_mirroring_endpoint_group_association#create GoogleNetworkSecurityMirroringEndpointGroupAssociation#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_network_security_mirroring_endpoint_group_association#delete GoogleNetworkSecurityMirroringEndpointGroupAssociation#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_network_security_mirroring_endpoint_group_association#update GoogleNetworkSecurityMirroringEndpointGroupAssociation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList <a name="GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlenetworksecuritymirroringendpointgroupassociation"

googlenetworksecuritymirroringendpointgroupassociation.NewGoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList.get"></a>

```go
func Get(index *f64) GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference <a name="GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlenetworksecuritymirroringendpointgroupassociation"

googlenetworksecuritymirroringendpointgroupassociation.NewGoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetails">GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetails
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetails">GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsDetails</a>

---


### GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsList <a name="GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsList" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlenetworksecuritymirroringendpointgroupassociation"

googlenetworksecuritymirroringendpointgroupassociation.NewGoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsList.get"></a>

```go
func Get(index *f64) GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference <a name="GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlenetworksecuritymirroringendpointgroupassociation"

googlenetworksecuritymirroringendpointgroupassociation.NewGoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocations">GoogleNetworkSecurityMirroringEndpointGroupAssociationLocations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocationsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleNetworkSecurityMirroringEndpointGroupAssociationLocations
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationLocations">GoogleNetworkSecurityMirroringEndpointGroupAssociationLocations</a>

---


### GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference <a name="GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googlenetworksecuritymirroringendpointgroupassociation"

googlenetworksecuritymirroringendpointgroupassociation.NewGoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroupAssociation.GoogleNetworkSecurityMirroringEndpointGroupAssociationTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



