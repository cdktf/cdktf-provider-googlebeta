# `googleProjectOrganizationPolicy` Submodule <a name="`googleProjectOrganizationPolicy` Submodule" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleProjectOrganizationPolicy <a name="GoogleProjectOrganizationPolicy" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_project_organization_policy google_project_organization_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleProjectOrganizationPolicy(Construct Scope, string Id, GoogleProjectOrganizationPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyConfig">GoogleProjectOrganizationPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyConfig">GoogleProjectOrganizationPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.putBooleanPolicy">PutBooleanPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.putListPolicy">PutListPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.putRestorePolicy">PutRestorePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.resetBooleanPolicy">ResetBooleanPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.resetListPolicy">ResetListPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.resetRestorePolicy">ResetRestorePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBooleanPolicy` <a name="PutBooleanPolicy" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.putBooleanPolicy"></a>

```csharp
private void PutBooleanPolicy(GoogleProjectOrganizationPolicyBooleanPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.putBooleanPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicy">GoogleProjectOrganizationPolicyBooleanPolicy</a>

---

##### `PutListPolicy` <a name="PutListPolicy" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.putListPolicy"></a>

```csharp
private void PutListPolicy(GoogleProjectOrganizationPolicyListPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.putListPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicy">GoogleProjectOrganizationPolicyListPolicy</a>

---

##### `PutRestorePolicy` <a name="PutRestorePolicy" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.putRestorePolicy"></a>

```csharp
private void PutRestorePolicy(GoogleProjectOrganizationPolicyRestorePolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.putRestorePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicy">GoogleProjectOrganizationPolicyRestorePolicy</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleProjectOrganizationPolicyTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeouts">GoogleProjectOrganizationPolicyTimeouts</a>

---

##### `ResetBooleanPolicy` <a name="ResetBooleanPolicy" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.resetBooleanPolicy"></a>

```csharp
private void ResetBooleanPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetListPolicy` <a name="ResetListPolicy" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.resetListPolicy"></a>

```csharp
private void ResetListPolicy()
```

##### `ResetRestorePolicy` <a name="ResetRestorePolicy" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.resetRestorePolicy"></a>

```csharp
private void ResetRestorePolicy()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.resetVersion"></a>

```csharp
private void ResetVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleProjectOrganizationPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleProjectOrganizationPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleProjectOrganizationPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleProjectOrganizationPolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleProjectOrganizationPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleProjectOrganizationPolicy resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleProjectOrganizationPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleProjectOrganizationPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_project_organization_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleProjectOrganizationPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.booleanPolicy">BooleanPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference">GoogleProjectOrganizationPolicyBooleanPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.listPolicy">ListPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference">GoogleProjectOrganizationPolicyListPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.restorePolicy">RestorePolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference">GoogleProjectOrganizationPolicyRestorePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference">GoogleProjectOrganizationPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.booleanPolicyInput">BooleanPolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicy">GoogleProjectOrganizationPolicyBooleanPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.constraintInput">ConstraintInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.listPolicyInput">ListPolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicy">GoogleProjectOrganizationPolicyListPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.restorePolicyInput">RestorePolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicy">GoogleProjectOrganizationPolicyRestorePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.versionInput">VersionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.constraint">Constraint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.version">Version</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `BooleanPolicy`<sup>Required</sup> <a name="BooleanPolicy" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.booleanPolicy"></a>

```csharp
public GoogleProjectOrganizationPolicyBooleanPolicyOutputReference BooleanPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference">GoogleProjectOrganizationPolicyBooleanPolicyOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `ListPolicy`<sup>Required</sup> <a name="ListPolicy" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.listPolicy"></a>

```csharp
public GoogleProjectOrganizationPolicyListPolicyOutputReference ListPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference">GoogleProjectOrganizationPolicyListPolicyOutputReference</a>

---

##### `RestorePolicy`<sup>Required</sup> <a name="RestorePolicy" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.restorePolicy"></a>

```csharp
public GoogleProjectOrganizationPolicyRestorePolicyOutputReference RestorePolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference">GoogleProjectOrganizationPolicyRestorePolicyOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.timeouts"></a>

```csharp
public GoogleProjectOrganizationPolicyTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference">GoogleProjectOrganizationPolicyTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `BooleanPolicyInput`<sup>Optional</sup> <a name="BooleanPolicyInput" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.booleanPolicyInput"></a>

```csharp
public GoogleProjectOrganizationPolicyBooleanPolicy BooleanPolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicy">GoogleProjectOrganizationPolicyBooleanPolicy</a>

---

##### `ConstraintInput`<sup>Optional</sup> <a name="ConstraintInput" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.constraintInput"></a>

```csharp
public string ConstraintInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ListPolicyInput`<sup>Optional</sup> <a name="ListPolicyInput" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.listPolicyInput"></a>

```csharp
public GoogleProjectOrganizationPolicyListPolicy ListPolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicy">GoogleProjectOrganizationPolicyListPolicy</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RestorePolicyInput`<sup>Optional</sup> <a name="RestorePolicyInput" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.restorePolicyInput"></a>

```csharp
public GoogleProjectOrganizationPolicyRestorePolicy RestorePolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicy">GoogleProjectOrganizationPolicyRestorePolicy</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.versionInput"></a>

```csharp
public double VersionInput { get; }
```

- *Type:* double

---

##### `Constraint`<sup>Required</sup> <a name="Constraint" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.constraint"></a>

```csharp
public string Constraint { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.version"></a>

```csharp
public double Version { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleProjectOrganizationPolicyBooleanPolicy <a name="GoogleProjectOrganizationPolicyBooleanPolicy" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleProjectOrganizationPolicyBooleanPolicy {
    object Enforced
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicy.property.enforced">Enforced</a></code> | <code>object</code> | If true, then the Policy is enforced. If false, then any configuration is acceptable. |

---

##### `Enforced`<sup>Required</sup> <a name="Enforced" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicy.property.enforced"></a>

```csharp
public object Enforced { get; set; }
```

- *Type:* object

If true, then the Policy is enforced. If false, then any configuration is acceptable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_project_organization_policy#enforced GoogleProjectOrganizationPolicy#enforced}

---

### GoogleProjectOrganizationPolicyConfig <a name="GoogleProjectOrganizationPolicyConfig" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleProjectOrganizationPolicyConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Constraint,
    string Project,
    GoogleProjectOrganizationPolicyBooleanPolicy BooleanPolicy = null,
    string Id = null,
    GoogleProjectOrganizationPolicyListPolicy ListPolicy = null,
    GoogleProjectOrganizationPolicyRestorePolicy RestorePolicy = null,
    GoogleProjectOrganizationPolicyTimeouts Timeouts = null,
    double Version = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyConfig.property.constraint">Constraint</a></code> | <code>string</code> | The name of the Constraint the Policy is configuring, for example, serviceuser.services. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyConfig.property.project">Project</a></code> | <code>string</code> | The project ID. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyConfig.property.booleanPolicy">BooleanPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicy">GoogleProjectOrganizationPolicyBooleanPolicy</a></code> | boolean_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_project_organization_policy#id GoogleProjectOrganizationPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyConfig.property.listPolicy">ListPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicy">GoogleProjectOrganizationPolicyListPolicy</a></code> | list_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyConfig.property.restorePolicy">RestorePolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicy">GoogleProjectOrganizationPolicyRestorePolicy</a></code> | restore_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeouts">GoogleProjectOrganizationPolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyConfig.property.version">Version</a></code> | <code>double</code> | Version of the Policy. Default version is 0. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Constraint`<sup>Required</sup> <a name="Constraint" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyConfig.property.constraint"></a>

```csharp
public string Constraint { get; set; }
```

- *Type:* string

The name of the Constraint the Policy is configuring, for example, serviceuser.services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_project_organization_policy#constraint GoogleProjectOrganizationPolicy#constraint}

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

The project ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_project_organization_policy#project GoogleProjectOrganizationPolicy#project}

---

##### `BooleanPolicy`<sup>Optional</sup> <a name="BooleanPolicy" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyConfig.property.booleanPolicy"></a>

```csharp
public GoogleProjectOrganizationPolicyBooleanPolicy BooleanPolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicy">GoogleProjectOrganizationPolicyBooleanPolicy</a>

boolean_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_project_organization_policy#boolean_policy GoogleProjectOrganizationPolicy#boolean_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_project_organization_policy#id GoogleProjectOrganizationPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ListPolicy`<sup>Optional</sup> <a name="ListPolicy" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyConfig.property.listPolicy"></a>

```csharp
public GoogleProjectOrganizationPolicyListPolicy ListPolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicy">GoogleProjectOrganizationPolicyListPolicy</a>

list_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_project_organization_policy#list_policy GoogleProjectOrganizationPolicy#list_policy}

---

##### `RestorePolicy`<sup>Optional</sup> <a name="RestorePolicy" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyConfig.property.restorePolicy"></a>

```csharp
public GoogleProjectOrganizationPolicyRestorePolicy RestorePolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicy">GoogleProjectOrganizationPolicyRestorePolicy</a>

restore_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_project_organization_policy#restore_policy GoogleProjectOrganizationPolicy#restore_policy}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyConfig.property.timeouts"></a>

```csharp
public GoogleProjectOrganizationPolicyTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeouts">GoogleProjectOrganizationPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_project_organization_policy#timeouts GoogleProjectOrganizationPolicy#timeouts}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyConfig.property.version"></a>

```csharp
public double Version { get; set; }
```

- *Type:* double

Version of the Policy. Default version is 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_project_organization_policy#version GoogleProjectOrganizationPolicy#version}

---

### GoogleProjectOrganizationPolicyListPolicy <a name="GoogleProjectOrganizationPolicyListPolicy" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleProjectOrganizationPolicyListPolicy {
    GoogleProjectOrganizationPolicyListPolicyAllow Allow = null,
    GoogleProjectOrganizationPolicyListPolicyDeny Deny = null,
    object InheritFromParent = null,
    string SuggestedValue = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicy.property.allow">Allow</a></code> | <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllow">GoogleProjectOrganizationPolicyListPolicyAllow</a></code> | allow block. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicy.property.deny">Deny</a></code> | <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDeny">GoogleProjectOrganizationPolicyListPolicyDeny</a></code> | deny block. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicy.property.inheritFromParent">InheritFromParent</a></code> | <code>object</code> | If set to true, the values from the effective Policy of the parent resource are inherited, meaning the values set in this Policy are added to the values inherited up the hierarchy. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicy.property.suggestedValue">SuggestedValue</a></code> | <code>string</code> | The Google Cloud Console will try to default to a configuration that matches the value specified in this field. |

---

##### `Allow`<sup>Optional</sup> <a name="Allow" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicy.property.allow"></a>

```csharp
public GoogleProjectOrganizationPolicyListPolicyAllow Allow { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllow">GoogleProjectOrganizationPolicyListPolicyAllow</a>

allow block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_project_organization_policy#allow GoogleProjectOrganizationPolicy#allow}

---

##### `Deny`<sup>Optional</sup> <a name="Deny" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicy.property.deny"></a>

```csharp
public GoogleProjectOrganizationPolicyListPolicyDeny Deny { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDeny">GoogleProjectOrganizationPolicyListPolicyDeny</a>

deny block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_project_organization_policy#deny GoogleProjectOrganizationPolicy#deny}

---

##### `InheritFromParent`<sup>Optional</sup> <a name="InheritFromParent" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicy.property.inheritFromParent"></a>

```csharp
public object InheritFromParent { get; set; }
```

- *Type:* object

If set to true, the values from the effective Policy of the parent resource are inherited, meaning the values set in this Policy are added to the values inherited up the hierarchy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_project_organization_policy#inherit_from_parent GoogleProjectOrganizationPolicy#inherit_from_parent}

---

##### `SuggestedValue`<sup>Optional</sup> <a name="SuggestedValue" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicy.property.suggestedValue"></a>

```csharp
public string SuggestedValue { get; set; }
```

- *Type:* string

The Google Cloud Console will try to default to a configuration that matches the value specified in this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_project_organization_policy#suggested_value GoogleProjectOrganizationPolicy#suggested_value}

---

### GoogleProjectOrganizationPolicyListPolicyAllow <a name="GoogleProjectOrganizationPolicyListPolicyAllow" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllow.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleProjectOrganizationPolicyListPolicyAllow {
    object All = null,
    string[] Values = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllow.property.all">All</a></code> | <code>object</code> | The policy allows or denies all values. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllow.property.values">Values</a></code> | <code>string[]</code> | The policy can define specific values that are allowed or denied. |

---

##### `All`<sup>Optional</sup> <a name="All" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllow.property.all"></a>

```csharp
public object All { get; set; }
```

- *Type:* object

The policy allows or denies all values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_project_organization_policy#all GoogleProjectOrganizationPolicy#all}

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllow.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

The policy can define specific values that are allowed or denied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_project_organization_policy#values GoogleProjectOrganizationPolicy#values}

---

### GoogleProjectOrganizationPolicyListPolicyDeny <a name="GoogleProjectOrganizationPolicyListPolicyDeny" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDeny"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDeny.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleProjectOrganizationPolicyListPolicyDeny {
    object All = null,
    string[] Values = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDeny.property.all">All</a></code> | <code>object</code> | The policy allows or denies all values. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDeny.property.values">Values</a></code> | <code>string[]</code> | The policy can define specific values that are allowed or denied. |

---

##### `All`<sup>Optional</sup> <a name="All" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDeny.property.all"></a>

```csharp
public object All { get; set; }
```

- *Type:* object

The policy allows or denies all values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_project_organization_policy#all GoogleProjectOrganizationPolicy#all}

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDeny.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

The policy can define specific values that are allowed or denied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_project_organization_policy#values GoogleProjectOrganizationPolicy#values}

---

### GoogleProjectOrganizationPolicyRestorePolicy <a name="GoogleProjectOrganizationPolicyRestorePolicy" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleProjectOrganizationPolicyRestorePolicy {
    object Default
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicy.property.default">Default</a></code> | <code>object</code> | May only be set to true. If set, then the default Policy is restored. |

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicy.property.default"></a>

```csharp
public object Default { get; set; }
```

- *Type:* object

May only be set to true. If set, then the default Policy is restored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_project_organization_policy#default GoogleProjectOrganizationPolicy#default}

---

### GoogleProjectOrganizationPolicyTimeouts <a name="GoogleProjectOrganizationPolicyTimeouts" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleProjectOrganizationPolicyTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_project_organization_policy#create GoogleProjectOrganizationPolicy#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_project_organization_policy#delete GoogleProjectOrganizationPolicy#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_project_organization_policy#read GoogleProjectOrganizationPolicy#read}. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_project_organization_policy#update GoogleProjectOrganizationPolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_project_organization_policy#create GoogleProjectOrganizationPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_project_organization_policy#delete GoogleProjectOrganizationPolicy#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_project_organization_policy#read GoogleProjectOrganizationPolicy#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_project_organization_policy#update GoogleProjectOrganizationPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleProjectOrganizationPolicyBooleanPolicyOutputReference <a name="GoogleProjectOrganizationPolicyBooleanPolicyOutputReference" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleProjectOrganizationPolicyBooleanPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.property.enforcedInput">EnforcedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.property.enforced">Enforced</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicy">GoogleProjectOrganizationPolicyBooleanPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnforcedInput`<sup>Optional</sup> <a name="EnforcedInput" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.property.enforcedInput"></a>

```csharp
public object EnforcedInput { get; }
```

- *Type:* object

---

##### `Enforced`<sup>Required</sup> <a name="Enforced" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.property.enforced"></a>

```csharp
public object Enforced { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.property.internalValue"></a>

```csharp
public GoogleProjectOrganizationPolicyBooleanPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicy">GoogleProjectOrganizationPolicyBooleanPolicy</a>

---


### GoogleProjectOrganizationPolicyListPolicyAllowOutputReference <a name="GoogleProjectOrganizationPolicyListPolicyAllowOutputReference" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleProjectOrganizationPolicyListPolicyAllowOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.resetAll">ResetAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAll` <a name="ResetAll" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.resetAll"></a>

```csharp
private void ResetAll()
```

##### `ResetValues` <a name="ResetValues" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.resetValues"></a>

```csharp
private void ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.property.allInput">AllInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.property.all">All</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllow">GoogleProjectOrganizationPolicyListPolicyAllow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllInput`<sup>Optional</sup> <a name="AllInput" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.property.allInput"></a>

```csharp
public object AllInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `All`<sup>Required</sup> <a name="All" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.property.all"></a>

```csharp
public object All { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.property.internalValue"></a>

```csharp
public GoogleProjectOrganizationPolicyListPolicyAllow InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllow">GoogleProjectOrganizationPolicyListPolicyAllow</a>

---


### GoogleProjectOrganizationPolicyListPolicyDenyOutputReference <a name="GoogleProjectOrganizationPolicyListPolicyDenyOutputReference" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleProjectOrganizationPolicyListPolicyDenyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.resetAll">ResetAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAll` <a name="ResetAll" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.resetAll"></a>

```csharp
private void ResetAll()
```

##### `ResetValues` <a name="ResetValues" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.resetValues"></a>

```csharp
private void ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.property.allInput">AllInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.property.all">All</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDeny">GoogleProjectOrganizationPolicyListPolicyDeny</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllInput`<sup>Optional</sup> <a name="AllInput" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.property.allInput"></a>

```csharp
public object AllInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `All`<sup>Required</sup> <a name="All" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.property.all"></a>

```csharp
public object All { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.property.internalValue"></a>

```csharp
public GoogleProjectOrganizationPolicyListPolicyDeny InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDeny">GoogleProjectOrganizationPolicyListPolicyDeny</a>

---


### GoogleProjectOrganizationPolicyListPolicyOutputReference <a name="GoogleProjectOrganizationPolicyListPolicyOutputReference" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleProjectOrganizationPolicyListPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.putAllow">PutAllow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.putDeny">PutDeny</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.resetAllow">ResetAllow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.resetDeny">ResetDeny</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.resetInheritFromParent">ResetInheritFromParent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.resetSuggestedValue">ResetSuggestedValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAllow` <a name="PutAllow" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.putAllow"></a>

```csharp
private void PutAllow(GoogleProjectOrganizationPolicyListPolicyAllow Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.putAllow.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllow">GoogleProjectOrganizationPolicyListPolicyAllow</a>

---

##### `PutDeny` <a name="PutDeny" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.putDeny"></a>

```csharp
private void PutDeny(GoogleProjectOrganizationPolicyListPolicyDeny Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.putDeny.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDeny">GoogleProjectOrganizationPolicyListPolicyDeny</a>

---

##### `ResetAllow` <a name="ResetAllow" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.resetAllow"></a>

```csharp
private void ResetAllow()
```

##### `ResetDeny` <a name="ResetDeny" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.resetDeny"></a>

```csharp
private void ResetDeny()
```

##### `ResetInheritFromParent` <a name="ResetInheritFromParent" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.resetInheritFromParent"></a>

```csharp
private void ResetInheritFromParent()
```

##### `ResetSuggestedValue` <a name="ResetSuggestedValue" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.resetSuggestedValue"></a>

```csharp
private void ResetSuggestedValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.property.allow">Allow</a></code> | <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference">GoogleProjectOrganizationPolicyListPolicyAllowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.property.deny">Deny</a></code> | <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference">GoogleProjectOrganizationPolicyListPolicyDenyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.property.allowInput">AllowInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllow">GoogleProjectOrganizationPolicyListPolicyAllow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.property.denyInput">DenyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDeny">GoogleProjectOrganizationPolicyListPolicyDeny</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.property.inheritFromParentInput">InheritFromParentInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.property.suggestedValueInput">SuggestedValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.property.inheritFromParent">InheritFromParent</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.property.suggestedValue">SuggestedValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicy">GoogleProjectOrganizationPolicyListPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Allow`<sup>Required</sup> <a name="Allow" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.property.allow"></a>

```csharp
public GoogleProjectOrganizationPolicyListPolicyAllowOutputReference Allow { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference">GoogleProjectOrganizationPolicyListPolicyAllowOutputReference</a>

---

##### `Deny`<sup>Required</sup> <a name="Deny" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.property.deny"></a>

```csharp
public GoogleProjectOrganizationPolicyListPolicyDenyOutputReference Deny { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference">GoogleProjectOrganizationPolicyListPolicyDenyOutputReference</a>

---

##### `AllowInput`<sup>Optional</sup> <a name="AllowInput" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.property.allowInput"></a>

```csharp
public GoogleProjectOrganizationPolicyListPolicyAllow AllowInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllow">GoogleProjectOrganizationPolicyListPolicyAllow</a>

---

##### `DenyInput`<sup>Optional</sup> <a name="DenyInput" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.property.denyInput"></a>

```csharp
public GoogleProjectOrganizationPolicyListPolicyDeny DenyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDeny">GoogleProjectOrganizationPolicyListPolicyDeny</a>

---

##### `InheritFromParentInput`<sup>Optional</sup> <a name="InheritFromParentInput" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.property.inheritFromParentInput"></a>

```csharp
public object InheritFromParentInput { get; }
```

- *Type:* object

---

##### `SuggestedValueInput`<sup>Optional</sup> <a name="SuggestedValueInput" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.property.suggestedValueInput"></a>

```csharp
public string SuggestedValueInput { get; }
```

- *Type:* string

---

##### `InheritFromParent`<sup>Required</sup> <a name="InheritFromParent" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.property.inheritFromParent"></a>

```csharp
public object InheritFromParent { get; }
```

- *Type:* object

---

##### `SuggestedValue`<sup>Required</sup> <a name="SuggestedValue" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.property.suggestedValue"></a>

```csharp
public string SuggestedValue { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.property.internalValue"></a>

```csharp
public GoogleProjectOrganizationPolicyListPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicy">GoogleProjectOrganizationPolicyListPolicy</a>

---


### GoogleProjectOrganizationPolicyRestorePolicyOutputReference <a name="GoogleProjectOrganizationPolicyRestorePolicyOutputReference" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleProjectOrganizationPolicyRestorePolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.property.defaultInput">DefaultInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.property.default">Default</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicy">GoogleProjectOrganizationPolicyRestorePolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DefaultInput`<sup>Optional</sup> <a name="DefaultInput" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.property.defaultInput"></a>

```csharp
public object DefaultInput { get; }
```

- *Type:* object

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.property.default"></a>

```csharp
public object Default { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.property.internalValue"></a>

```csharp
public GoogleProjectOrganizationPolicyRestorePolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicy">GoogleProjectOrganizationPolicyRestorePolicy</a>

---


### GoogleProjectOrganizationPolicyTimeoutsOutputReference <a name="GoogleProjectOrganizationPolicyTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleProjectOrganizationPolicyTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



