# `google_identity_platform_tenant`

Refer to the Terraform Registory for docs: [`google_identity_platform_tenant`](https://registry.terraform.io/providers/hashicorp/google-beta/4.70.0/docs/resources/google_identity_platform_tenant).

# `googleIdentityPlatformTenant` Submodule <a name="`googleIdentityPlatformTenant` Submodule" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleIdentityPlatformTenant <a name="GoogleIdentityPlatformTenant" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.70.0/docs/resources/google_identity_platform_tenant google_identity_platform_tenant}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleidentityplatformtenant"

googleidentityplatformtenant.NewGoogleIdentityPlatformTenant(scope Construct, id *string, config GoogleIdentityPlatformTenantConfig) GoogleIdentityPlatformTenant
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantConfig">GoogleIdentityPlatformTenantConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantConfig">GoogleIdentityPlatformTenantConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.resetAllowPasswordSignup">ResetAllowPasswordSignup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.resetDisableAuth">ResetDisableAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.resetEnableEmailLinkSignin">ResetEnableEmailLinkSignin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.putTimeouts"></a>

```go
func PutTimeouts(value GoogleIdentityPlatformTenantTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeouts">GoogleIdentityPlatformTenantTimeouts</a>

---

##### `ResetAllowPasswordSignup` <a name="ResetAllowPasswordSignup" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.resetAllowPasswordSignup"></a>

```go
func ResetAllowPasswordSignup()
```

##### `ResetDisableAuth` <a name="ResetDisableAuth" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.resetDisableAuth"></a>

```go
func ResetDisableAuth()
```

##### `ResetEnableEmailLinkSignin` <a name="ResetEnableEmailLinkSignin" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.resetEnableEmailLinkSignin"></a>

```go
func ResetEnableEmailLinkSignin()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleidentityplatformtenant"

googleidentityplatformtenant.GoogleIdentityPlatformTenant_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleidentityplatformtenant"

googleidentityplatformtenant.GoogleIdentityPlatformTenant_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleidentityplatformtenant"

googleidentityplatformtenant.GoogleIdentityPlatformTenant_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference">GoogleIdentityPlatformTenantTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.allowPasswordSignupInput">AllowPasswordSignupInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.disableAuthInput">DisableAuthInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.enableEmailLinkSigninInput">EnableEmailLinkSigninInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.allowPasswordSignup">AllowPasswordSignup</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.disableAuth">DisableAuth</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.enableEmailLinkSignin">EnableEmailLinkSignin</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.timeouts"></a>

```go
func Timeouts() GoogleIdentityPlatformTenantTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference">GoogleIdentityPlatformTenantTimeoutsOutputReference</a>

---

##### `AllowPasswordSignupInput`<sup>Optional</sup> <a name="AllowPasswordSignupInput" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.allowPasswordSignupInput"></a>

```go
func AllowPasswordSignupInput() interface{}
```

- *Type:* interface{}

---

##### `DisableAuthInput`<sup>Optional</sup> <a name="DisableAuthInput" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.disableAuthInput"></a>

```go
func DisableAuthInput() interface{}
```

- *Type:* interface{}

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EnableEmailLinkSigninInput`<sup>Optional</sup> <a name="EnableEmailLinkSigninInput" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.enableEmailLinkSigninInput"></a>

```go
func EnableEmailLinkSigninInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AllowPasswordSignup`<sup>Required</sup> <a name="AllowPasswordSignup" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.allowPasswordSignup"></a>

```go
func AllowPasswordSignup() interface{}
```

- *Type:* interface{}

---

##### `DisableAuth`<sup>Required</sup> <a name="DisableAuth" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.disableAuth"></a>

```go
func DisableAuth() interface{}
```

- *Type:* interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `EnableEmailLinkSignin`<sup>Required</sup> <a name="EnableEmailLinkSignin" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.enableEmailLinkSignin"></a>

```go
func EnableEmailLinkSignin() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleIdentityPlatformTenantConfig <a name="GoogleIdentityPlatformTenantConfig" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleidentityplatformtenant"

&googleidentityplatformtenant.GoogleIdentityPlatformTenantConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DisplayName: *string,
	AllowPasswordSignup: interface{},
	DisableAuth: interface{},
	EnableEmailLinkSignin: interface{},
	Id: *string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Human friendly display name of the tenant. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantConfig.property.allowPasswordSignup">AllowPasswordSignup</a></code> | <code>interface{}</code> | Whether to allow email/password user authentication. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantConfig.property.disableAuth">DisableAuth</a></code> | <code>interface{}</code> | Whether authentication is disabled for the tenant. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantConfig.property.enableEmailLinkSignin">EnableEmailLinkSignin</a></code> | <code>interface{}</code> | Whether to enable email link user authentication. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.70.0/docs/resources/google_identity_platform_tenant#id GoogleIdentityPlatformTenant#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.70.0/docs/resources/google_identity_platform_tenant#project GoogleIdentityPlatformTenant#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeouts">GoogleIdentityPlatformTenantTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Human friendly display name of the tenant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.70.0/docs/resources/google_identity_platform_tenant#display_name GoogleIdentityPlatformTenant#display_name}

---

##### `AllowPasswordSignup`<sup>Optional</sup> <a name="AllowPasswordSignup" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantConfig.property.allowPasswordSignup"></a>

```go
AllowPasswordSignup interface{}
```

- *Type:* interface{}

Whether to allow email/password user authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.70.0/docs/resources/google_identity_platform_tenant#allow_password_signup GoogleIdentityPlatformTenant#allow_password_signup}

---

##### `DisableAuth`<sup>Optional</sup> <a name="DisableAuth" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantConfig.property.disableAuth"></a>

```go
DisableAuth interface{}
```

- *Type:* interface{}

Whether authentication is disabled for the tenant.

If true, the users under
the disabled tenant are not allowed to sign-in. Admins of the disabled tenant
are not able to manage its users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.70.0/docs/resources/google_identity_platform_tenant#disable_auth GoogleIdentityPlatformTenant#disable_auth}

---

##### `EnableEmailLinkSignin`<sup>Optional</sup> <a name="EnableEmailLinkSignin" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantConfig.property.enableEmailLinkSignin"></a>

```go
EnableEmailLinkSignin interface{}
```

- *Type:* interface{}

Whether to enable email link user authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.70.0/docs/resources/google_identity_platform_tenant#enable_email_link_signin GoogleIdentityPlatformTenant#enable_email_link_signin}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.70.0/docs/resources/google_identity_platform_tenant#id GoogleIdentityPlatformTenant#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.70.0/docs/resources/google_identity_platform_tenant#project GoogleIdentityPlatformTenant#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantConfig.property.timeouts"></a>

```go
Timeouts GoogleIdentityPlatformTenantTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeouts">GoogleIdentityPlatformTenantTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.70.0/docs/resources/google_identity_platform_tenant#timeouts GoogleIdentityPlatformTenant#timeouts}

---

### GoogleIdentityPlatformTenantTimeouts <a name="GoogleIdentityPlatformTenantTimeouts" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleidentityplatformtenant"

&googleidentityplatformtenant.GoogleIdentityPlatformTenantTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.70.0/docs/resources/google_identity_platform_tenant#create GoogleIdentityPlatformTenant#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.70.0/docs/resources/google_identity_platform_tenant#delete GoogleIdentityPlatformTenant#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.70.0/docs/resources/google_identity_platform_tenant#update GoogleIdentityPlatformTenant#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.70.0/docs/resources/google_identity_platform_tenant#create GoogleIdentityPlatformTenant#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.70.0/docs/resources/google_identity_platform_tenant#delete GoogleIdentityPlatformTenant#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.70.0/docs/resources/google_identity_platform_tenant#update GoogleIdentityPlatformTenant#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleIdentityPlatformTenantTimeoutsOutputReference <a name="GoogleIdentityPlatformTenantTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleidentityplatformtenant"

googleidentityplatformtenant.NewGoogleIdentityPlatformTenantTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleIdentityPlatformTenantTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



