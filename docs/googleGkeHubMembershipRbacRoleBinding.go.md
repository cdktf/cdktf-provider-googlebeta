# `googleGkeHubMembershipRbacRoleBinding` Submodule <a name="`googleGkeHubMembershipRbacRoleBinding` Submodule" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleGkeHubMembershipRbacRoleBinding <a name="GoogleGkeHubMembershipRbacRoleBinding" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_gke_hub_membership_rbac_role_binding google_gke_hub_membership_rbac_role_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkehubmembershiprbacrolebinding"

googlegkehubmembershiprbacrolebinding.NewGoogleGkeHubMembershipRbacRoleBinding(scope Construct, id *string, config GoogleGkeHubMembershipRbacRoleBindingConfig) GoogleGkeHubMembershipRbacRoleBinding
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingConfig">GoogleGkeHubMembershipRbacRoleBindingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingConfig">GoogleGkeHubMembershipRbacRoleBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.putRole">PutRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRole` <a name="PutRole" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.putRole"></a>

```go
func PutRole(value GoogleGkeHubMembershipRbacRoleBindingRole)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.putRole.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRole">GoogleGkeHubMembershipRbacRoleBindingRole</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.putTimeouts"></a>

```go
func PutTimeouts(value GoogleGkeHubMembershipRbacRoleBindingTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeouts">GoogleGkeHubMembershipRbacRoleBindingTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleGkeHubMembershipRbacRoleBinding resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkehubmembershiprbacrolebinding"

googlegkehubmembershiprbacrolebinding.GoogleGkeHubMembershipRbacRoleBinding_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkehubmembershiprbacrolebinding"

googlegkehubmembershiprbacrolebinding.GoogleGkeHubMembershipRbacRoleBinding_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkehubmembershiprbacrolebinding"

googlegkehubmembershiprbacrolebinding.GoogleGkeHubMembershipRbacRoleBinding_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkehubmembershiprbacrolebinding"

googlegkehubmembershiprbacrolebinding.GoogleGkeHubMembershipRbacRoleBinding_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleGkeHubMembershipRbacRoleBinding resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleGkeHubMembershipRbacRoleBinding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleGkeHubMembershipRbacRoleBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_gke_hub_membership_rbac_role_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleGkeHubMembershipRbacRoleBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.deleteTime">DeleteTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.role">Role</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference">GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.state">State</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateList">GoogleGkeHubMembershipRbacRoleBindingStateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference">GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.membershipIdInput">MembershipIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.membershipRbacRoleBindingIdInput">MembershipRbacRoleBindingIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.roleInput">RoleInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRole">GoogleGkeHubMembershipRbacRoleBindingRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.userInput">UserInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.membershipId">MembershipId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.membershipRbacRoleBindingId">MembershipRbacRoleBindingId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.user">User</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `DeleteTime`<sup>Required</sup> <a name="DeleteTime" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.deleteTime"></a>

```go
func DeleteTime() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.role"></a>

```go
func Role() GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference">GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.state"></a>

```go
func State() GoogleGkeHubMembershipRbacRoleBindingStateList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateList">GoogleGkeHubMembershipRbacRoleBindingStateList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.timeouts"></a>

```go
func Timeouts() GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference">GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `MembershipIdInput`<sup>Optional</sup> <a name="MembershipIdInput" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.membershipIdInput"></a>

```go
func MembershipIdInput() *string
```

- *Type:* *string

---

##### `MembershipRbacRoleBindingIdInput`<sup>Optional</sup> <a name="MembershipRbacRoleBindingIdInput" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.membershipRbacRoleBindingIdInput"></a>

```go
func MembershipRbacRoleBindingIdInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.roleInput"></a>

```go
func RoleInput() GoogleGkeHubMembershipRbacRoleBindingRole
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRole">GoogleGkeHubMembershipRbacRoleBindingRole</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `UserInput`<sup>Optional</sup> <a name="UserInput" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.userInput"></a>

```go
func UserInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `MembershipId`<sup>Required</sup> <a name="MembershipId" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.membershipId"></a>

```go
func MembershipId() *string
```

- *Type:* *string

---

##### `MembershipRbacRoleBindingId`<sup>Required</sup> <a name="MembershipRbacRoleBindingId" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.membershipRbacRoleBindingId"></a>

```go
func MembershipRbacRoleBindingId() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `User`<sup>Required</sup> <a name="User" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.user"></a>

```go
func User() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleGkeHubMembershipRbacRoleBindingConfig <a name="GoogleGkeHubMembershipRbacRoleBindingConfig" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkehubmembershiprbacrolebinding"

&googlegkehubmembershiprbacrolebinding.GoogleGkeHubMembershipRbacRoleBindingConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	MembershipId: *string,
	MembershipRbacRoleBindingId: *string,
	Role: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRole,
	User: *string,
	Id: *string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingConfig.property.location">Location</a></code> | <code>*string</code> | Location of the Membership. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingConfig.property.membershipId">MembershipId</a></code> | <code>*string</code> | Id of the membership. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingConfig.property.membershipRbacRoleBindingId">MembershipRbacRoleBindingId</a></code> | <code>*string</code> | The client-provided identifier of the RBAC Role Binding. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingConfig.property.role">Role</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRole">GoogleGkeHubMembershipRbacRoleBindingRole</a></code> | role block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingConfig.property.user">User</a></code> | <code>*string</code> | Principal that is be authorized in the cluster (at least of one the oneof is required). |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_gke_hub_membership_rbac_role_binding#id GoogleGkeHubMembershipRbacRoleBinding#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_gke_hub_membership_rbac_role_binding#project GoogleGkeHubMembershipRbacRoleBinding#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeouts">GoogleGkeHubMembershipRbacRoleBindingTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Location of the Membership.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_gke_hub_membership_rbac_role_binding#location GoogleGkeHubMembershipRbacRoleBinding#location}

---

##### `MembershipId`<sup>Required</sup> <a name="MembershipId" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingConfig.property.membershipId"></a>

```go
MembershipId *string
```

- *Type:* *string

Id of the membership.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_gke_hub_membership_rbac_role_binding#membership_id GoogleGkeHubMembershipRbacRoleBinding#membership_id}

---

##### `MembershipRbacRoleBindingId`<sup>Required</sup> <a name="MembershipRbacRoleBindingId" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingConfig.property.membershipRbacRoleBindingId"></a>

```go
MembershipRbacRoleBindingId *string
```

- *Type:* *string

The client-provided identifier of the RBAC Role Binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_gke_hub_membership_rbac_role_binding#membership_rbac_role_binding_id GoogleGkeHubMembershipRbacRoleBinding#membership_rbac_role_binding_id}

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingConfig.property.role"></a>

```go
Role GoogleGkeHubMembershipRbacRoleBindingRole
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRole">GoogleGkeHubMembershipRbacRoleBindingRole</a>

role block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_gke_hub_membership_rbac_role_binding#role GoogleGkeHubMembershipRbacRoleBinding#role}

---

##### `User`<sup>Required</sup> <a name="User" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingConfig.property.user"></a>

```go
User *string
```

- *Type:* *string

Principal that is be authorized in the cluster (at least of one the oneof is required).

Updating one will unset the other automatically.
user is the name of the user as seen by the kubernetes cluster, example
"alice" or "alice@domain.tld"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_gke_hub_membership_rbac_role_binding#user GoogleGkeHubMembershipRbacRoleBinding#user}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_gke_hub_membership_rbac_role_binding#id GoogleGkeHubMembershipRbacRoleBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_gke_hub_membership_rbac_role_binding#project GoogleGkeHubMembershipRbacRoleBinding#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingConfig.property.timeouts"></a>

```go
Timeouts GoogleGkeHubMembershipRbacRoleBindingTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeouts">GoogleGkeHubMembershipRbacRoleBindingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_gke_hub_membership_rbac_role_binding#timeouts GoogleGkeHubMembershipRbacRoleBinding#timeouts}

---

### GoogleGkeHubMembershipRbacRoleBindingRole <a name="GoogleGkeHubMembershipRbacRoleBindingRole" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRole"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRole.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkehubmembershiprbacrolebinding"

&googlegkehubmembershiprbacrolebinding.GoogleGkeHubMembershipRbacRoleBindingRole {
	PredefinedRole: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRole.property.predefinedRole">PredefinedRole</a></code> | <code>*string</code> | PredefinedRole is an ENUM representation of the default Kubernetes Roles Possible values: ["UNKNOWN", "ADMIN", "EDIT", "VIEW", "ANTHOS_SUPPORT"]. |

---

##### `PredefinedRole`<sup>Required</sup> <a name="PredefinedRole" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRole.property.predefinedRole"></a>

```go
PredefinedRole *string
```

- *Type:* *string

PredefinedRole is an ENUM representation of the default Kubernetes Roles Possible values: ["UNKNOWN", "ADMIN", "EDIT", "VIEW", "ANTHOS_SUPPORT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_gke_hub_membership_rbac_role_binding#predefined_role GoogleGkeHubMembershipRbacRoleBinding#predefined_role}

---

### GoogleGkeHubMembershipRbacRoleBindingState <a name="GoogleGkeHubMembershipRbacRoleBindingState" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingState"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingState.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkehubmembershiprbacrolebinding"

&googlegkehubmembershiprbacrolebinding.GoogleGkeHubMembershipRbacRoleBindingState {

}
```


### GoogleGkeHubMembershipRbacRoleBindingTimeouts <a name="GoogleGkeHubMembershipRbacRoleBindingTimeouts" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkehubmembershiprbacrolebinding"

&googlegkehubmembershiprbacrolebinding.GoogleGkeHubMembershipRbacRoleBindingTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_gke_hub_membership_rbac_role_binding#create GoogleGkeHubMembershipRbacRoleBinding#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_gke_hub_membership_rbac_role_binding#delete GoogleGkeHubMembershipRbacRoleBinding#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_gke_hub_membership_rbac_role_binding#create GoogleGkeHubMembershipRbacRoleBinding#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_gke_hub_membership_rbac_role_binding#delete GoogleGkeHubMembershipRbacRoleBinding#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference <a name="GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkehubmembershiprbacrolebinding"

googlegkehubmembershiprbacrolebinding.NewGoogleGkeHubMembershipRbacRoleBindingRoleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.property.predefinedRoleInput">PredefinedRoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.property.predefinedRole">PredefinedRole</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRole">GoogleGkeHubMembershipRbacRoleBindingRole</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PredefinedRoleInput`<sup>Optional</sup> <a name="PredefinedRoleInput" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.property.predefinedRoleInput"></a>

```go
func PredefinedRoleInput() *string
```

- *Type:* *string

---

##### `PredefinedRole`<sup>Required</sup> <a name="PredefinedRole" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.property.predefinedRole"></a>

```go
func PredefinedRole() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleGkeHubMembershipRbacRoleBindingRole
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRole">GoogleGkeHubMembershipRbacRoleBindingRole</a>

---


### GoogleGkeHubMembershipRbacRoleBindingStateList <a name="GoogleGkeHubMembershipRbacRoleBindingStateList" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkehubmembershiprbacrolebinding"

googlegkehubmembershiprbacrolebinding.NewGoogleGkeHubMembershipRbacRoleBindingStateList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleGkeHubMembershipRbacRoleBindingStateList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateList.get"></a>

```go
func Get(index *f64) GoogleGkeHubMembershipRbacRoleBindingStateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleGkeHubMembershipRbacRoleBindingStateOutputReference <a name="GoogleGkeHubMembershipRbacRoleBindingStateOutputReference" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkehubmembershiprbacrolebinding"

googlegkehubmembershiprbacrolebinding.NewGoogleGkeHubMembershipRbacRoleBindingStateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleGkeHubMembershipRbacRoleBindingStateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.property.code">Code</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingState">GoogleGkeHubMembershipRbacRoleBindingState</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.property.code"></a>

```go
func Code() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleGkeHubMembershipRbacRoleBindingState
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingState">GoogleGkeHubMembershipRbacRoleBindingState</a>

---


### GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference <a name="GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlegkehubmembershiprbacrolebinding"

googlegkehubmembershiprbacrolebinding.NewGoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



