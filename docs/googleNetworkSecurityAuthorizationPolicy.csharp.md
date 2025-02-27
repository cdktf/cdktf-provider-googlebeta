# `googleNetworkSecurityAuthorizationPolicy` Submodule <a name="`googleNetworkSecurityAuthorizationPolicy` Submodule" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkSecurityAuthorizationPolicy <a name="GoogleNetworkSecurityAuthorizationPolicy" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_security_authorization_policy google_network_security_authorization_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkSecurityAuthorizationPolicy(Construct Scope, string Id, GoogleNetworkSecurityAuthorizationPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig">GoogleNetworkSecurityAuthorizationPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig">GoogleNetworkSecurityAuthorizationPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.putRules">PutRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.resetRules">ResetRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRules` <a name="PutRules" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.putRules"></a>

```csharp
private void PutRules(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.putRules.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleNetworkSecurityAuthorizationPolicyTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeouts">GoogleNetworkSecurityAuthorizationPolicyTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRules` <a name="ResetRules" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.resetRules"></a>

```csharp
private void ResetRules()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleNetworkSecurityAuthorizationPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleNetworkSecurityAuthorizationPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleNetworkSecurityAuthorizationPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleNetworkSecurityAuthorizationPolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleNetworkSecurityAuthorizationPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleNetworkSecurityAuthorizationPolicy resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleNetworkSecurityAuthorizationPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleNetworkSecurityAuthorizationPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_security_authorization_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleNetworkSecurityAuthorizationPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.rules">Rules</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesList">GoogleNetworkSecurityAuthorizationPolicyRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference">GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.actionInput">ActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.rulesInput">RulesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.rules"></a>

```csharp
public GoogleNetworkSecurityAuthorizationPolicyRulesList Rules { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesList">GoogleNetworkSecurityAuthorizationPolicyRulesList</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.timeouts"></a>

```csharp
public GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference">GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.actionInput"></a>

```csharp
public string ActionInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RulesInput`<sup>Optional</sup> <a name="RulesInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.rulesInput"></a>

```csharp
public object RulesInput { get; }
```

- *Type:* object

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkSecurityAuthorizationPolicyConfig <a name="GoogleNetworkSecurityAuthorizationPolicyConfig" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkSecurityAuthorizationPolicyConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Action,
    string Name,
    string Description = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Location = null,
    string Project = null,
    object Rules = null,
    GoogleNetworkSecurityAuthorizationPolicyTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.property.action">Action</a></code> | <code>string</code> | The action to take when a rule match is found. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.property.name">Name</a></code> | <code>string</code> | Name of the AuthorizationPolicy resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.property.description">Description</a></code> | <code>string</code> | A free-text description of the resource. Max length 1024 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_security_authorization_policy#id GoogleNetworkSecurityAuthorizationPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Set of label tags associated with the AuthorizationPolicy resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.property.location">Location</a></code> | <code>string</code> | The location of the authorization policy. The default value is 'global'. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_security_authorization_policy#project GoogleNetworkSecurityAuthorizationPolicy#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.property.rules">Rules</a></code> | <code>object</code> | rules block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeouts">GoogleNetworkSecurityAuthorizationPolicyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.property.action"></a>

```csharp
public string Action { get; set; }
```

- *Type:* string

The action to take when a rule match is found.

Possible values are "ALLOW" or "DENY". Possible values: ["ALLOW", "DENY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_security_authorization_policy#action GoogleNetworkSecurityAuthorizationPolicy#action}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the AuthorizationPolicy resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_security_authorization_policy#name GoogleNetworkSecurityAuthorizationPolicy#name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A free-text description of the resource. Max length 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_security_authorization_policy#description GoogleNetworkSecurityAuthorizationPolicy#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_security_authorization_policy#id GoogleNetworkSecurityAuthorizationPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Set of label tags associated with the AuthorizationPolicy resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_security_authorization_policy#labels GoogleNetworkSecurityAuthorizationPolicy#labels}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location of the authorization policy. The default value is 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_security_authorization_policy#location GoogleNetworkSecurityAuthorizationPolicy#location}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_security_authorization_policy#project GoogleNetworkSecurityAuthorizationPolicy#project}.

---

##### `Rules`<sup>Optional</sup> <a name="Rules" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.property.rules"></a>

```csharp
public object Rules { get; set; }
```

- *Type:* object

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_security_authorization_policy#rules GoogleNetworkSecurityAuthorizationPolicy#rules}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.property.timeouts"></a>

```csharp
public GoogleNetworkSecurityAuthorizationPolicyTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeouts">GoogleNetworkSecurityAuthorizationPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_security_authorization_policy#timeouts GoogleNetworkSecurityAuthorizationPolicy#timeouts}

---

### GoogleNetworkSecurityAuthorizationPolicyRules <a name="GoogleNetworkSecurityAuthorizationPolicyRules" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkSecurityAuthorizationPolicyRules {
    object Destinations = null,
    object Sources = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRules.property.destinations">Destinations</a></code> | <code>object</code> | destinations block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRules.property.sources">Sources</a></code> | <code>object</code> | sources block. |

---

##### `Destinations`<sup>Optional</sup> <a name="Destinations" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRules.property.destinations"></a>

```csharp
public object Destinations { get; set; }
```

- *Type:* object

destinations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_security_authorization_policy#destinations GoogleNetworkSecurityAuthorizationPolicy#destinations}

---

##### `Sources`<sup>Optional</sup> <a name="Sources" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRules.property.sources"></a>

```csharp
public object Sources { get; set; }
```

- *Type:* object

sources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_security_authorization_policy#sources GoogleNetworkSecurityAuthorizationPolicy#sources}

---

### GoogleNetworkSecurityAuthorizationPolicyRulesDestinations <a name="GoogleNetworkSecurityAuthorizationPolicyRulesDestinations" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkSecurityAuthorizationPolicyRulesDestinations {
    string[] Hosts,
    string[] Methods,
    double[] Ports,
    GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatch HttpHeaderMatch = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinations.property.hosts">Hosts</a></code> | <code>string[]</code> | List of host names to match. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinations.property.methods">Methods</a></code> | <code>string[]</code> | A list of HTTP methods to match. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinations.property.ports">Ports</a></code> | <code>double[]</code> | List of destination ports to match. At least one port should match. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinations.property.httpHeaderMatch">HttpHeaderMatch</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatch">GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatch</a></code> | http_header_match block. |

---

##### `Hosts`<sup>Required</sup> <a name="Hosts" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinations.property.hosts"></a>

```csharp
public string[] Hosts { get; set; }
```

- *Type:* string[]

List of host names to match.

Matched against the ":authority" header in http requests. At least one host should match. Each host can be an exact match, or a prefix match (example "mydomain.*") or a suffix match (example "*.myorg.com") or a presence (any) match "*".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_security_authorization_policy#hosts GoogleNetworkSecurityAuthorizationPolicy#hosts}

---

##### `Methods`<sup>Required</sup> <a name="Methods" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinations.property.methods"></a>

```csharp
public string[] Methods { get; set; }
```

- *Type:* string[]

A list of HTTP methods to match.

At least one method should match. Should not be set for gRPC services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_security_authorization_policy#methods GoogleNetworkSecurityAuthorizationPolicy#methods}

---

##### `Ports`<sup>Required</sup> <a name="Ports" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinations.property.ports"></a>

```csharp
public double[] Ports { get; set; }
```

- *Type:* double[]

List of destination ports to match. At least one port should match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_security_authorization_policy#ports GoogleNetworkSecurityAuthorizationPolicy#ports}

---

##### `HttpHeaderMatch`<sup>Optional</sup> <a name="HttpHeaderMatch" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinations.property.httpHeaderMatch"></a>

```csharp
public GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatch HttpHeaderMatch { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatch">GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatch</a>

http_header_match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_security_authorization_policy#http_header_match GoogleNetworkSecurityAuthorizationPolicy#http_header_match}

---

### GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatch <a name="GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatch" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatch.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatch {
    string HeaderName,
    string RegexMatch
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatch.property.headerName">HeaderName</a></code> | <code>string</code> | The name of the HTTP header to match. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatch.property.regexMatch">RegexMatch</a></code> | <code>string</code> | The value of the header must match the regular expression specified in regexMatch. |

---

##### `HeaderName`<sup>Required</sup> <a name="HeaderName" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatch.property.headerName"></a>

```csharp
public string HeaderName { get; set; }
```

- *Type:* string

The name of the HTTP header to match.

For matching against the HTTP request's authority, use a headerMatch with the header name ":authority". For matching a request's method, use the headerName ":method".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_security_authorization_policy#header_name GoogleNetworkSecurityAuthorizationPolicy#header_name}

---

##### `RegexMatch`<sup>Required</sup> <a name="RegexMatch" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatch.property.regexMatch"></a>

```csharp
public string RegexMatch { get; set; }
```

- *Type:* string

The value of the header must match the regular expression specified in regexMatch.

For regular expression grammar, please see: en.cppreference.com/w/cpp/regex/ecmascript For matching against a port specified in the HTTP request, use a headerMatch with headerName set to Host and a regular expression that satisfies the RFC2616 Host header's port specifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_security_authorization_policy#regex_match GoogleNetworkSecurityAuthorizationPolicy#regex_match}

---

### GoogleNetworkSecurityAuthorizationPolicyRulesSources <a name="GoogleNetworkSecurityAuthorizationPolicyRulesSources" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSources.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkSecurityAuthorizationPolicyRulesSources {
    string[] IpBlocks = null,
    string[] Principals = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSources.property.ipBlocks">IpBlocks</a></code> | <code>string[]</code> | List of CIDR ranges to match based on source IP address. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSources.property.principals">Principals</a></code> | <code>string[]</code> | List of peer identities to match for authorization. |

---

##### `IpBlocks`<sup>Optional</sup> <a name="IpBlocks" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSources.property.ipBlocks"></a>

```csharp
public string[] IpBlocks { get; set; }
```

- *Type:* string[]

List of CIDR ranges to match based on source IP address.

At least one IP block should match. Single IP (e.g., "1.2.3.4") and CIDR (e.g., "1.2.3.0/24") are supported. Authorization based on source IP alone should be avoided.
The IP addresses of any load balancers or proxies should be considered untrusted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_security_authorization_policy#ip_blocks GoogleNetworkSecurityAuthorizationPolicy#ip_blocks}

---

##### `Principals`<sup>Optional</sup> <a name="Principals" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSources.property.principals"></a>

```csharp
public string[] Principals { get; set; }
```

- *Type:* string[]

List of peer identities to match for authorization.

At least one principal should match. Each peer can be an exact match, or a prefix match (example, "namespace/*") or a suffix match (example, "* /service-account") or a presence match "*".
Authorization based on the principal name without certificate validation (configured by ServerTlsPolicy resource) is considered insecure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_security_authorization_policy#principals GoogleNetworkSecurityAuthorizationPolicy#principals}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### GoogleNetworkSecurityAuthorizationPolicyTimeouts <a name="GoogleNetworkSecurityAuthorizationPolicyTimeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkSecurityAuthorizationPolicyTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_security_authorization_policy#create GoogleNetworkSecurityAuthorizationPolicy#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_security_authorization_policy#delete GoogleNetworkSecurityAuthorizationPolicy#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_security_authorization_policy#update GoogleNetworkSecurityAuthorizationPolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_security_authorization_policy#create GoogleNetworkSecurityAuthorizationPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_security_authorization_policy#delete GoogleNetworkSecurityAuthorizationPolicy#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_security_authorization_policy#update GoogleNetworkSecurityAuthorizationPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference <a name="GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.property.headerNameInput">HeaderNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.property.regexMatchInput">RegexMatchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.property.headerName">HeaderName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.property.regexMatch">RegexMatch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatch">GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatch</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HeaderNameInput`<sup>Optional</sup> <a name="HeaderNameInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.property.headerNameInput"></a>

```csharp
public string HeaderNameInput { get; }
```

- *Type:* string

---

##### `RegexMatchInput`<sup>Optional</sup> <a name="RegexMatchInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.property.regexMatchInput"></a>

```csharp
public string RegexMatchInput { get; }
```

- *Type:* string

---

##### `HeaderName`<sup>Required</sup> <a name="HeaderName" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.property.headerName"></a>

```csharp
public string HeaderName { get; }
```

- *Type:* string

---

##### `RegexMatch`<sup>Required</sup> <a name="RegexMatch" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.property.regexMatch"></a>

```csharp
public string RegexMatch { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.property.internalValue"></a>

```csharp
public GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatch InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatch">GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatch</a>

---


### GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList <a name="GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList.get"></a>

```csharp
private GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference <a name="GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.putHttpHeaderMatch">PutHttpHeaderMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.resetHttpHeaderMatch">ResetHttpHeaderMatch</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHttpHeaderMatch` <a name="PutHttpHeaderMatch" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.putHttpHeaderMatch"></a>

```csharp
private void PutHttpHeaderMatch(GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatch Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.putHttpHeaderMatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatch">GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatch</a>

---

##### `ResetHttpHeaderMatch` <a name="ResetHttpHeaderMatch" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.resetHttpHeaderMatch"></a>

```csharp
private void ResetHttpHeaderMatch()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.property.httpHeaderMatch">HttpHeaderMatch</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference">GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.property.hostsInput">HostsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.property.httpHeaderMatchInput">HttpHeaderMatchInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatch">GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.property.methodsInput">MethodsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.property.portsInput">PortsInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.property.hosts">Hosts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.property.methods">Methods</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.property.ports">Ports</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HttpHeaderMatch`<sup>Required</sup> <a name="HttpHeaderMatch" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.property.httpHeaderMatch"></a>

```csharp
public GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference HttpHeaderMatch { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference">GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference</a>

---

##### `HostsInput`<sup>Optional</sup> <a name="HostsInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.property.hostsInput"></a>

```csharp
public string[] HostsInput { get; }
```

- *Type:* string[]

---

##### `HttpHeaderMatchInput`<sup>Optional</sup> <a name="HttpHeaderMatchInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.property.httpHeaderMatchInput"></a>

```csharp
public GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatch HttpHeaderMatchInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatch">GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatch</a>

---

##### `MethodsInput`<sup>Optional</sup> <a name="MethodsInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.property.methodsInput"></a>

```csharp
public string[] MethodsInput { get; }
```

- *Type:* string[]

---

##### `PortsInput`<sup>Optional</sup> <a name="PortsInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.property.portsInput"></a>

```csharp
public double[] PortsInput { get; }
```

- *Type:* double[]

---

##### `Hosts`<sup>Required</sup> <a name="Hosts" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.property.hosts"></a>

```csharp
public string[] Hosts { get; }
```

- *Type:* string[]

---

##### `Methods`<sup>Required</sup> <a name="Methods" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.property.methods"></a>

```csharp
public string[] Methods { get; }
```

- *Type:* string[]

---

##### `Ports`<sup>Required</sup> <a name="Ports" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.property.ports"></a>

```csharp
public double[] Ports { get; }
```

- *Type:* double[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleNetworkSecurityAuthorizationPolicyRulesList <a name="GoogleNetworkSecurityAuthorizationPolicyRulesList" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkSecurityAuthorizationPolicyRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesList.get"></a>

```csharp
private GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference <a name="GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.putDestinations">PutDestinations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.putSources">PutSources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.resetDestinations">ResetDestinations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.resetSources">ResetSources</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDestinations` <a name="PutDestinations" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.putDestinations"></a>

```csharp
private void PutDestinations(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.putDestinations.parameter.value"></a>

- *Type:* object

---

##### `PutSources` <a name="PutSources" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.putSources"></a>

```csharp
private void PutSources(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.putSources.parameter.value"></a>

- *Type:* object

---

##### `ResetDestinations` <a name="ResetDestinations" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.resetDestinations"></a>

```csharp
private void ResetDestinations()
```

##### `ResetSources` <a name="ResetSources" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.resetSources"></a>

```csharp
private void ResetSources()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.property.destinations">Destinations</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList">GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.property.sources">Sources</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList">GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.property.destinationsInput">DestinationsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.property.sourcesInput">SourcesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Destinations`<sup>Required</sup> <a name="Destinations" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.property.destinations"></a>

```csharp
public GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList Destinations { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList">GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList</a>

---

##### `Sources`<sup>Required</sup> <a name="Sources" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.property.sources"></a>

```csharp
public GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList Sources { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList">GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList</a>

---

##### `DestinationsInput`<sup>Optional</sup> <a name="DestinationsInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.property.destinationsInput"></a>

```csharp
public object DestinationsInput { get; }
```

- *Type:* object

---

##### `SourcesInput`<sup>Optional</sup> <a name="SourcesInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.property.sourcesInput"></a>

```csharp
public object SourcesInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList <a name="GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList.get"></a>

```csharp
private GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference <a name="GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.resetIpBlocks">ResetIpBlocks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.resetPrincipals">ResetPrincipals</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIpBlocks` <a name="ResetIpBlocks" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.resetIpBlocks"></a>

```csharp
private void ResetIpBlocks()
```

##### `ResetPrincipals` <a name="ResetPrincipals" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.resetPrincipals"></a>

```csharp
private void ResetPrincipals()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.property.ipBlocksInput">IpBlocksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.property.principalsInput">PrincipalsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.property.ipBlocks">IpBlocks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.property.principals">Principals</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IpBlocksInput`<sup>Optional</sup> <a name="IpBlocksInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.property.ipBlocksInput"></a>

```csharp
public string[] IpBlocksInput { get; }
```

- *Type:* string[]

---

##### `PrincipalsInput`<sup>Optional</sup> <a name="PrincipalsInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.property.principalsInput"></a>

```csharp
public string[] PrincipalsInput { get; }
```

- *Type:* string[]

---

##### `IpBlocks`<sup>Required</sup> <a name="IpBlocks" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.property.ipBlocks"></a>

```csharp
public string[] IpBlocks { get; }
```

- *Type:* string[]

---

##### `Principals`<sup>Required</sup> <a name="Principals" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.property.principals"></a>

```csharp
public string[] Principals { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference <a name="GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



