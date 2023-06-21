# `google_identity_platform_tenant_default_supported_idp_config`

Refer to the Terraform Registory for docs: [`google_identity_platform_tenant_default_supported_idp_config`](https://registry.terraform.io/providers/hashicorp/google-beta/4.70.0/docs/resources/google_identity_platform_tenant_default_supported_idp_config).

# `googleIdentityPlatformTenantDefaultSupportedIdpConfig` Submodule <a name="`googleIdentityPlatformTenantDefaultSupportedIdpConfig` Submodule" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleIdentityPlatformTenantDefaultSupportedIdpConfig <a name="GoogleIdentityPlatformTenantDefaultSupportedIdpConfig" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.70.0/docs/resources/google_identity_platform_tenant_default_supported_idp_config google_identity_platform_tenant_default_supported_idp_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleidentityplatformtenantdefaultsupportedidpconfig"

googleidentityplatformtenantdefaultsupportedidpconfig.NewGoogleIdentityPlatformTenantDefaultSupportedIdpConfig(scope Construct, id *string, config GoogleIdentityPlatformTenantDefaultSupportedIdpConfigConfig) GoogleIdentityPlatformTenantDefaultSupportedIdpConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigConfig">GoogleIdentityPlatformTenantDefaultSupportedIdpConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigConfig">GoogleIdentityPlatformTenantDefaultSupportedIdpConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.putTimeouts"></a>

```go
func PutTimeouts(value GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeouts">GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeouts</a>

---

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleidentityplatformtenantdefaultsupportedidpconfig"

googleidentityplatformtenantdefaultsupportedidpconfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleidentityplatformtenantdefaultsupportedidpconfig"

googleidentityplatformtenantdefaultsupportedidpconfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleidentityplatformtenantdefaultsupportedidpconfig"

googleidentityplatformtenantdefaultsupportedidpconfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference">GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.clientIdInput">ClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.clientSecretInput">ClientSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.idpIdInput">IdpIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.tenantInput">TenantInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.idpId">IdpId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.tenant">Tenant</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.timeouts"></a>

```go
func Timeouts() GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference">GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference</a>

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.clientIdInput"></a>

```go
func ClientIdInput() *string
```

- *Type:* *string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.clientSecretInput"></a>

```go
func ClientSecretInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IdpIdInput`<sup>Optional</sup> <a name="IdpIdInput" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.idpIdInput"></a>

```go
func IdpIdInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TenantInput`<sup>Optional</sup> <a name="TenantInput" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.tenantInput"></a>

```go
func TenantInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.clientSecret"></a>

```go
func ClientSecret() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IdpId`<sup>Required</sup> <a name="IdpId" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.idpId"></a>

```go
func IdpId() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Tenant`<sup>Required</sup> <a name="Tenant" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.tenant"></a>

```go
func Tenant() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleIdentityPlatformTenantDefaultSupportedIdpConfigConfig <a name="GoogleIdentityPlatformTenantDefaultSupportedIdpConfigConfig" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleidentityplatformtenantdefaultsupportedidpconfig"

&googleidentityplatformtenantdefaultsupportedidpconfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ClientId: *string,
	ClientSecret: *string,
	IdpId: *string,
	Tenant: *string,
	Enabled: interface{},
	Id: *string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.clientId">ClientId</a></code> | <code>*string</code> | OAuth client ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | OAuth client secret. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.idpId">IdpId</a></code> | <code>*string</code> | ID of the IDP. Possible values include:. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.tenant">Tenant</a></code> | <code>*string</code> | The name of the tenant where this DefaultSupportedIdpConfig resource exists. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | If this IDP allows the user to sign in. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.70.0/docs/resources/google_identity_platform_tenant_default_supported_idp_config#id GoogleIdentityPlatformTenantDefaultSupportedIdpConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.70.0/docs/resources/google_identity_platform_tenant_default_supported_idp_config#project GoogleIdentityPlatformTenantDefaultSupportedIdpConfig#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeouts">GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.clientId"></a>

```go
ClientId *string
```

- *Type:* *string

OAuth client ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.70.0/docs/resources/google_identity_platform_tenant_default_supported_idp_config#client_id GoogleIdentityPlatformTenantDefaultSupportedIdpConfig#client_id}

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.clientSecret"></a>

```go
ClientSecret *string
```

- *Type:* *string

OAuth client secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.70.0/docs/resources/google_identity_platform_tenant_default_supported_idp_config#client_secret GoogleIdentityPlatformTenantDefaultSupportedIdpConfig#client_secret}

---

##### `IdpId`<sup>Required</sup> <a name="IdpId" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.idpId"></a>

```go
IdpId *string
```

- *Type:* *string

ID of the IDP. Possible values include:.

'apple.com'

'facebook.com'

'gc.apple.com'

'github.com'

'google.com'

'linkedin.com'

'microsoft.com'

'playgames.google.com'

'twitter.com'

'yahoo.com'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.70.0/docs/resources/google_identity_platform_tenant_default_supported_idp_config#idp_id GoogleIdentityPlatformTenantDefaultSupportedIdpConfig#idp_id}

---

##### `Tenant`<sup>Required</sup> <a name="Tenant" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.tenant"></a>

```go
Tenant *string
```

- *Type:* *string

The name of the tenant where this DefaultSupportedIdpConfig resource exists.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.70.0/docs/resources/google_identity_platform_tenant_default_supported_idp_config#tenant GoogleIdentityPlatformTenantDefaultSupportedIdpConfig#tenant}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

If this IDP allows the user to sign in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.70.0/docs/resources/google_identity_platform_tenant_default_supported_idp_config#enabled GoogleIdentityPlatformTenantDefaultSupportedIdpConfig#enabled}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.70.0/docs/resources/google_identity_platform_tenant_default_supported_idp_config#id GoogleIdentityPlatformTenantDefaultSupportedIdpConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.70.0/docs/resources/google_identity_platform_tenant_default_supported_idp_config#project GoogleIdentityPlatformTenantDefaultSupportedIdpConfig#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.timeouts"></a>

```go
Timeouts GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeouts">GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.70.0/docs/resources/google_identity_platform_tenant_default_supported_idp_config#timeouts GoogleIdentityPlatformTenantDefaultSupportedIdpConfig#timeouts}

---

### GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeouts <a name="GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeouts" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleidentityplatformtenantdefaultsupportedidpconfig"

&googleidentityplatformtenantdefaultsupportedidpconfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.70.0/docs/resources/google_identity_platform_tenant_default_supported_idp_config#create GoogleIdentityPlatformTenantDefaultSupportedIdpConfig#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.70.0/docs/resources/google_identity_platform_tenant_default_supported_idp_config#delete GoogleIdentityPlatformTenantDefaultSupportedIdpConfig#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.70.0/docs/resources/google_identity_platform_tenant_default_supported_idp_config#update GoogleIdentityPlatformTenantDefaultSupportedIdpConfig#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.70.0/docs/resources/google_identity_platform_tenant_default_supported_idp_config#create GoogleIdentityPlatformTenantDefaultSupportedIdpConfig#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.70.0/docs/resources/google_identity_platform_tenant_default_supported_idp_config#delete GoogleIdentityPlatformTenantDefaultSupportedIdpConfig#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.70.0/docs/resources/google_identity_platform_tenant_default_supported_idp_config#update GoogleIdentityPlatformTenantDefaultSupportedIdpConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference <a name="GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleidentityplatformtenantdefaultsupportedidpconfig"

googleidentityplatformtenantdefaultsupportedidpconfig.NewGoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



