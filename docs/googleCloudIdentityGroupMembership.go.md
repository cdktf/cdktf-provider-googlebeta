# `googleCloudIdentityGroupMembership` Submodule <a name="`googleCloudIdentityGroupMembership` Submodule" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleCloudIdentityGroupMembership <a name="GoogleCloudIdentityGroupMembership" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_cloud_identity_group_membership google_cloud_identity_group_membership}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudidentitygroupmembership"

googlecloudidentitygroupmembership.NewGoogleCloudIdentityGroupMembership(scope Construct, id *string, config GoogleCloudIdentityGroupMembershipConfig) GoogleCloudIdentityGroupMembership
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipConfig">GoogleCloudIdentityGroupMembershipConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipConfig">GoogleCloudIdentityGroupMembershipConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.putMemberKey">PutMemberKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.putPreferredMemberKey">PutPreferredMemberKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.putRoles">PutRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.resetMemberKey">ResetMemberKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.resetPreferredMemberKey">ResetPreferredMemberKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutMemberKey` <a name="PutMemberKey" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.putMemberKey"></a>

```go
func PutMemberKey(value GoogleCloudIdentityGroupMembershipMemberKey)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.putMemberKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKey">GoogleCloudIdentityGroupMembershipMemberKey</a>

---

##### `PutPreferredMemberKey` <a name="PutPreferredMemberKey" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.putPreferredMemberKey"></a>

```go
func PutPreferredMemberKey(value GoogleCloudIdentityGroupMembershipPreferredMemberKey)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.putPreferredMemberKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKey">GoogleCloudIdentityGroupMembershipPreferredMemberKey</a>

---

##### `PutRoles` <a name="PutRoles" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.putRoles"></a>

```go
func PutRoles(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.putRoles.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.putTimeouts"></a>

```go
func PutTimeouts(value GoogleCloudIdentityGroupMembershipTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeouts">GoogleCloudIdentityGroupMembershipTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.resetId"></a>

```go
func ResetId()
```

##### `ResetMemberKey` <a name="ResetMemberKey" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.resetMemberKey"></a>

```go
func ResetMemberKey()
```

##### `ResetPreferredMemberKey` <a name="ResetPreferredMemberKey" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.resetPreferredMemberKey"></a>

```go
func ResetPreferredMemberKey()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleCloudIdentityGroupMembership resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudidentitygroupmembership"

googlecloudidentitygroupmembership.GoogleCloudIdentityGroupMembership_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudidentitygroupmembership"

googlecloudidentitygroupmembership.GoogleCloudIdentityGroupMembership_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudidentitygroupmembership"

googlecloudidentitygroupmembership.GoogleCloudIdentityGroupMembership_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudidentitygroupmembership"

googlecloudidentitygroupmembership.GoogleCloudIdentityGroupMembership_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleCloudIdentityGroupMembership resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleCloudIdentityGroupMembership to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleCloudIdentityGroupMembership that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_cloud_identity_group_membership#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleCloudIdentityGroupMembership to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.memberKey">MemberKey</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference">GoogleCloudIdentityGroupMembershipMemberKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.preferredMemberKey">PreferredMemberKey</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference">GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.roles">Roles</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesList">GoogleCloudIdentityGroupMembershipRolesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference">GoogleCloudIdentityGroupMembershipTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.groupInput">GroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.memberKeyInput">MemberKeyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKey">GoogleCloudIdentityGroupMembershipMemberKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.preferredMemberKeyInput">PreferredMemberKeyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKey">GoogleCloudIdentityGroupMembershipPreferredMemberKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.rolesInput">RolesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.group">Group</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `MemberKey`<sup>Required</sup> <a name="MemberKey" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.memberKey"></a>

```go
func MemberKey() GoogleCloudIdentityGroupMembershipMemberKeyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference">GoogleCloudIdentityGroupMembershipMemberKeyOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PreferredMemberKey`<sup>Required</sup> <a name="PreferredMemberKey" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.preferredMemberKey"></a>

```go
func PreferredMemberKey() GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference">GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference</a>

---

##### `Roles`<sup>Required</sup> <a name="Roles" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.roles"></a>

```go
func Roles() GoogleCloudIdentityGroupMembershipRolesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesList">GoogleCloudIdentityGroupMembershipRolesList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.timeouts"></a>

```go
func Timeouts() GoogleCloudIdentityGroupMembershipTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference">GoogleCloudIdentityGroupMembershipTimeoutsOutputReference</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `GroupInput`<sup>Optional</sup> <a name="GroupInput" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.groupInput"></a>

```go
func GroupInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MemberKeyInput`<sup>Optional</sup> <a name="MemberKeyInput" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.memberKeyInput"></a>

```go
func MemberKeyInput() GoogleCloudIdentityGroupMembershipMemberKey
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKey">GoogleCloudIdentityGroupMembershipMemberKey</a>

---

##### `PreferredMemberKeyInput`<sup>Optional</sup> <a name="PreferredMemberKeyInput" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.preferredMemberKeyInput"></a>

```go
func PreferredMemberKeyInput() GoogleCloudIdentityGroupMembershipPreferredMemberKey
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKey">GoogleCloudIdentityGroupMembershipPreferredMemberKey</a>

---

##### `RolesInput`<sup>Optional</sup> <a name="RolesInput" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.rolesInput"></a>

```go
func RolesInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Group`<sup>Required</sup> <a name="Group" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.group"></a>

```go
func Group() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembership.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleCloudIdentityGroupMembershipConfig <a name="GoogleCloudIdentityGroupMembershipConfig" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudidentitygroupmembership"

&googlecloudidentitygroupmembership.GoogleCloudIdentityGroupMembershipConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Group: *string,
	Roles: interface{},
	Id: *string,
	MemberKey: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKey,
	PreferredMemberKey: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKey,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipConfig.property.group">Group</a></code> | <code>*string</code> | The name of the Group to create this membership in. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipConfig.property.roles">Roles</a></code> | <code>interface{}</code> | roles block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_cloud_identity_group_membership#id GoogleCloudIdentityGroupMembership#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipConfig.property.memberKey">MemberKey</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKey">GoogleCloudIdentityGroupMembershipMemberKey</a></code> | member_key block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipConfig.property.preferredMemberKey">PreferredMemberKey</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKey">GoogleCloudIdentityGroupMembershipPreferredMemberKey</a></code> | preferred_member_key block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeouts">GoogleCloudIdentityGroupMembershipTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Group`<sup>Required</sup> <a name="Group" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipConfig.property.group"></a>

```go
Group *string
```

- *Type:* *string

The name of the Group to create this membership in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_cloud_identity_group_membership#group GoogleCloudIdentityGroupMembership#group}

---

##### `Roles`<sup>Required</sup> <a name="Roles" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipConfig.property.roles"></a>

```go
Roles interface{}
```

- *Type:* interface{}

roles block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_cloud_identity_group_membership#roles GoogleCloudIdentityGroupMembership#roles}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_cloud_identity_group_membership#id GoogleCloudIdentityGroupMembership#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MemberKey`<sup>Optional</sup> <a name="MemberKey" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipConfig.property.memberKey"></a>

```go
MemberKey GoogleCloudIdentityGroupMembershipMemberKey
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKey">GoogleCloudIdentityGroupMembershipMemberKey</a>

member_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_cloud_identity_group_membership#member_key GoogleCloudIdentityGroupMembership#member_key}

---

##### `PreferredMemberKey`<sup>Optional</sup> <a name="PreferredMemberKey" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipConfig.property.preferredMemberKey"></a>

```go
PreferredMemberKey GoogleCloudIdentityGroupMembershipPreferredMemberKey
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKey">GoogleCloudIdentityGroupMembershipPreferredMemberKey</a>

preferred_member_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_cloud_identity_group_membership#preferred_member_key GoogleCloudIdentityGroupMembership#preferred_member_key}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipConfig.property.timeouts"></a>

```go
Timeouts GoogleCloudIdentityGroupMembershipTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeouts">GoogleCloudIdentityGroupMembershipTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_cloud_identity_group_membership#timeouts GoogleCloudIdentityGroupMembership#timeouts}

---

### GoogleCloudIdentityGroupMembershipMemberKey <a name="GoogleCloudIdentityGroupMembershipMemberKey" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKey.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudidentitygroupmembership"

&googlecloudidentitygroupmembership.GoogleCloudIdentityGroupMembershipMemberKey {
	Id: *string,
	Namespace: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKey.property.id">Id</a></code> | <code>*string</code> | The ID of the entity. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKey.property.namespace">Namespace</a></code> | <code>*string</code> | The namespace in which the entity exists. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKey.property.id"></a>

```go
Id *string
```

- *Type:* *string

The ID of the entity.

For Google-managed entities, the id must be the email address of an existing
group or user.

For external-identity-mapped entities, the id must be a string conforming
to the Identity Source's requirements.

Must be unique within a namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_cloud_identity_group_membership#id GoogleCloudIdentityGroupMembership#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKey.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

The namespace in which the entity exists.

If not specified, the EntityKey represents a Google-managed entity
such as a Google user or a Google Group.

If specified, the EntityKey represents an external-identity-mapped group.
The namespace must correspond to an identity source created in Admin Console
and must be in the form of 'identitysources/{identity_source_id}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_cloud_identity_group_membership#namespace GoogleCloudIdentityGroupMembership#namespace}

---

### GoogleCloudIdentityGroupMembershipPreferredMemberKey <a name="GoogleCloudIdentityGroupMembershipPreferredMemberKey" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKey.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudidentitygroupmembership"

&googlecloudidentitygroupmembership.GoogleCloudIdentityGroupMembershipPreferredMemberKey {
	Id: *string,
	Namespace: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKey.property.id">Id</a></code> | <code>*string</code> | The ID of the entity. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKey.property.namespace">Namespace</a></code> | <code>*string</code> | The namespace in which the entity exists. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKey.property.id"></a>

```go
Id *string
```

- *Type:* *string

The ID of the entity.

For Google-managed entities, the id must be the email address of an existing
group or user.

For external-identity-mapped entities, the id must be a string conforming
to the Identity Source's requirements.

Must be unique within a namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_cloud_identity_group_membership#id GoogleCloudIdentityGroupMembership#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKey.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

The namespace in which the entity exists.

If not specified, the EntityKey represents a Google-managed entity
such as a Google user or a Google Group.

If specified, the EntityKey represents an external-identity-mapped group.
The namespace must correspond to an identity source created in Admin Console
and must be in the form of 'identitysources/{identity_source_id}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_cloud_identity_group_membership#namespace GoogleCloudIdentityGroupMembership#namespace}

---

### GoogleCloudIdentityGroupMembershipRoles <a name="GoogleCloudIdentityGroupMembershipRoles" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRoles"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRoles.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudidentitygroupmembership"

&googlecloudidentitygroupmembership.GoogleCloudIdentityGroupMembershipRoles {
	Name: *string,
	ExpiryDetail: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetail,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRoles.property.name">Name</a></code> | <code>*string</code> | The name of the MembershipRole. Must be one of OWNER, MANAGER, MEMBER. Possible values: ["OWNER", "MANAGER", "MEMBER"]. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRoles.property.expiryDetail">ExpiryDetail</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetail">GoogleCloudIdentityGroupMembershipRolesExpiryDetail</a></code> | expiry_detail block. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRoles.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the MembershipRole. Must be one of OWNER, MANAGER, MEMBER. Possible values: ["OWNER", "MANAGER", "MEMBER"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_cloud_identity_group_membership#name GoogleCloudIdentityGroupMembership#name}

---

##### `ExpiryDetail`<sup>Optional</sup> <a name="ExpiryDetail" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRoles.property.expiryDetail"></a>

```go
ExpiryDetail GoogleCloudIdentityGroupMembershipRolesExpiryDetail
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetail">GoogleCloudIdentityGroupMembershipRolesExpiryDetail</a>

expiry_detail block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_cloud_identity_group_membership#expiry_detail GoogleCloudIdentityGroupMembership#expiry_detail}

---

### GoogleCloudIdentityGroupMembershipRolesExpiryDetail <a name="GoogleCloudIdentityGroupMembershipRolesExpiryDetail" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetail"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetail.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudidentitygroupmembership"

&googlecloudidentitygroupmembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetail {
	ExpireTime: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetail.property.expireTime">ExpireTime</a></code> | <code>*string</code> | The time at which the MembershipRole will expire. |

---

##### `ExpireTime`<sup>Required</sup> <a name="ExpireTime" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetail.property.expireTime"></a>

```go
ExpireTime *string
```

- *Type:* *string

The time at which the MembershipRole will expire.

A timestamp in RFC3339 UTC "Zulu" format, with nanosecond
resolution and up to nine fractional digits.

Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_cloud_identity_group_membership#expire_time GoogleCloudIdentityGroupMembership#expire_time}

---

### GoogleCloudIdentityGroupMembershipTimeouts <a name="GoogleCloudIdentityGroupMembershipTimeouts" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudidentitygroupmembership"

&googlecloudidentitygroupmembership.GoogleCloudIdentityGroupMembershipTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_cloud_identity_group_membership#create GoogleCloudIdentityGroupMembership#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_cloud_identity_group_membership#delete GoogleCloudIdentityGroupMembership#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_cloud_identity_group_membership#update GoogleCloudIdentityGroupMembership#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_cloud_identity_group_membership#create GoogleCloudIdentityGroupMembership#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_cloud_identity_group_membership#delete GoogleCloudIdentityGroupMembership#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_cloud_identity_group_membership#update GoogleCloudIdentityGroupMembership#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleCloudIdentityGroupMembershipMemberKeyOutputReference <a name="GoogleCloudIdentityGroupMembershipMemberKeyOutputReference" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudidentitygroupmembership"

googlecloudidentitygroupmembership.NewGoogleCloudIdentityGroupMembershipMemberKeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudIdentityGroupMembershipMemberKeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.resetNamespace"></a>

```go
func ResetNamespace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKey">GoogleCloudIdentityGroupMembershipMemberKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKeyOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudIdentityGroupMembershipMemberKey
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipMemberKey">GoogleCloudIdentityGroupMembershipMemberKey</a>

---


### GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference <a name="GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudidentitygroupmembership"

googlecloudidentitygroupmembership.NewGoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.resetNamespace"></a>

```go
func ResetNamespace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKey">GoogleCloudIdentityGroupMembershipPreferredMemberKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKeyOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudIdentityGroupMembershipPreferredMemberKey
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipPreferredMemberKey">GoogleCloudIdentityGroupMembershipPreferredMemberKey</a>

---


### GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference <a name="GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudidentitygroupmembership"

googlecloudidentitygroupmembership.NewGoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.property.expireTimeInput">ExpireTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.property.expireTime">ExpireTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetail">GoogleCloudIdentityGroupMembershipRolesExpiryDetail</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExpireTimeInput`<sup>Optional</sup> <a name="ExpireTimeInput" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.property.expireTimeInput"></a>

```go
func ExpireTimeInput() *string
```

- *Type:* *string

---

##### `ExpireTime`<sup>Required</sup> <a name="ExpireTime" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.property.expireTime"></a>

```go
func ExpireTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudIdentityGroupMembershipRolesExpiryDetail
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetail">GoogleCloudIdentityGroupMembershipRolesExpiryDetail</a>

---


### GoogleCloudIdentityGroupMembershipRolesList <a name="GoogleCloudIdentityGroupMembershipRolesList" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudidentitygroupmembership"

googlecloudidentitygroupmembership.NewGoogleCloudIdentityGroupMembershipRolesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleCloudIdentityGroupMembershipRolesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesList.get"></a>

```go
func Get(index *f64) GoogleCloudIdentityGroupMembershipRolesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleCloudIdentityGroupMembershipRolesOutputReference <a name="GoogleCloudIdentityGroupMembershipRolesOutputReference" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudidentitygroupmembership"

googlecloudidentitygroupmembership.NewGoogleCloudIdentityGroupMembershipRolesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleCloudIdentityGroupMembershipRolesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.putExpiryDetail">PutExpiryDetail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.resetExpiryDetail">ResetExpiryDetail</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExpiryDetail` <a name="PutExpiryDetail" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.putExpiryDetail"></a>

```go
func PutExpiryDetail(value GoogleCloudIdentityGroupMembershipRolesExpiryDetail)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.putExpiryDetail.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetail">GoogleCloudIdentityGroupMembershipRolesExpiryDetail</a>

---

##### `ResetExpiryDetail` <a name="ResetExpiryDetail" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.resetExpiryDetail"></a>

```go
func ResetExpiryDetail()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.property.expiryDetail">ExpiryDetail</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference">GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.property.expiryDetailInput">ExpiryDetailInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetail">GoogleCloudIdentityGroupMembershipRolesExpiryDetail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExpiryDetail`<sup>Required</sup> <a name="ExpiryDetail" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.property.expiryDetail"></a>

```go
func ExpiryDetail() GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference">GoogleCloudIdentityGroupMembershipRolesExpiryDetailOutputReference</a>

---

##### `ExpiryDetailInput`<sup>Optional</sup> <a name="ExpiryDetailInput" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.property.expiryDetailInput"></a>

```go
func ExpiryDetailInput() GoogleCloudIdentityGroupMembershipRolesExpiryDetail
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesExpiryDetail">GoogleCloudIdentityGroupMembershipRolesExpiryDetail</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipRolesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleCloudIdentityGroupMembershipTimeoutsOutputReference <a name="GoogleCloudIdentityGroupMembershipTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecloudidentitygroupmembership"

googlecloudidentitygroupmembership.NewGoogleCloudIdentityGroupMembershipTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudIdentityGroupMembershipTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudIdentityGroupMembership.GoogleCloudIdentityGroupMembershipTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



