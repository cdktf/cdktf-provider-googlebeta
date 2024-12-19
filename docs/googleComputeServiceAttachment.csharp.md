# `googleComputeServiceAttachment` Submodule <a name="`googleComputeServiceAttachment` Submodule" id="@cdktf/provider-google-beta.googleComputeServiceAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeServiceAttachment <a name="GoogleComputeServiceAttachment" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_service_attachment google_compute_service_attachment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeServiceAttachment(Construct Scope, string Id, GoogleComputeServiceAttachmentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig">GoogleComputeServiceAttachmentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig">GoogleComputeServiceAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.putConsumerAcceptLists">PutConsumerAcceptLists</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.resetConsumerAcceptLists">ResetConsumerAcceptLists</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.resetConsumerRejectLists">ResetConsumerRejectLists</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.resetDomainNames">ResetDomainNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.resetPropagatedConnectionLimit">ResetPropagatedConnectionLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.resetReconcileConnections">ResetReconcileConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConsumerAcceptLists` <a name="PutConsumerAcceptLists" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.putConsumerAcceptLists"></a>

```csharp
private void PutConsumerAcceptLists(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.putConsumerAcceptLists.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleComputeServiceAttachmentTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeouts">GoogleComputeServiceAttachmentTimeouts</a>

---

##### `ResetConsumerAcceptLists` <a name="ResetConsumerAcceptLists" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.resetConsumerAcceptLists"></a>

```csharp
private void ResetConsumerAcceptLists()
```

##### `ResetConsumerRejectLists` <a name="ResetConsumerRejectLists" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.resetConsumerRejectLists"></a>

```csharp
private void ResetConsumerRejectLists()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDomainNames` <a name="ResetDomainNames" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.resetDomainNames"></a>

```csharp
private void ResetDomainNames()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetPropagatedConnectionLimit` <a name="ResetPropagatedConnectionLimit" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.resetPropagatedConnectionLimit"></a>

```csharp
private void ResetPropagatedConnectionLimit()
```

##### `ResetReconcileConnections` <a name="ResetReconcileConnections" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.resetReconcileConnections"></a>

```csharp
private void ResetReconcileConnections()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComputeServiceAttachment resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleComputeServiceAttachment.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleComputeServiceAttachment.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleComputeServiceAttachment.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleComputeServiceAttachment.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleComputeServiceAttachment resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleComputeServiceAttachment to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleComputeServiceAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_service_attachment#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeServiceAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.connectedEndpoints">ConnectedEndpoints</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsList">GoogleComputeServiceAttachmentConnectedEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.consumerAcceptLists">ConsumerAcceptLists</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsList">GoogleComputeServiceAttachmentConsumerAcceptListsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.fingerprint">Fingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.selfLink">SelfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference">GoogleComputeServiceAttachmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.connectionPreferenceInput">ConnectionPreferenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.consumerAcceptListsInput">ConsumerAcceptListsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.consumerRejectListsInput">ConsumerRejectListsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.domainNamesInput">DomainNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.enableProxyProtocolInput">EnableProxyProtocolInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.natSubnetsInput">NatSubnetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.propagatedConnectionLimitInput">PropagatedConnectionLimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.reconcileConnectionsInput">ReconcileConnectionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.targetServiceInput">TargetServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.connectionPreference">ConnectionPreference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.consumerRejectLists">ConsumerRejectLists</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.domainNames">DomainNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.enableProxyProtocol">EnableProxyProtocol</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.natSubnets">NatSubnets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.propagatedConnectionLimit">PropagatedConnectionLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.reconcileConnections">ReconcileConnections</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.targetService">TargetService</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ConnectedEndpoints`<sup>Required</sup> <a name="ConnectedEndpoints" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.connectedEndpoints"></a>

```csharp
public GoogleComputeServiceAttachmentConnectedEndpointsList ConnectedEndpoints { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsList">GoogleComputeServiceAttachmentConnectedEndpointsList</a>

---

##### `ConsumerAcceptLists`<sup>Required</sup> <a name="ConsumerAcceptLists" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.consumerAcceptLists"></a>

```csharp
public GoogleComputeServiceAttachmentConsumerAcceptListsList ConsumerAcceptLists { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsList">GoogleComputeServiceAttachmentConsumerAcceptListsList</a>

---

##### `Fingerprint`<sup>Required</sup> <a name="Fingerprint" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.fingerprint"></a>

```csharp
public string Fingerprint { get; }
```

- *Type:* string

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.selfLink"></a>

```csharp
public string SelfLink { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.timeouts"></a>

```csharp
public GoogleComputeServiceAttachmentTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference">GoogleComputeServiceAttachmentTimeoutsOutputReference</a>

---

##### `ConnectionPreferenceInput`<sup>Optional</sup> <a name="ConnectionPreferenceInput" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.connectionPreferenceInput"></a>

```csharp
public string ConnectionPreferenceInput { get; }
```

- *Type:* string

---

##### `ConsumerAcceptListsInput`<sup>Optional</sup> <a name="ConsumerAcceptListsInput" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.consumerAcceptListsInput"></a>

```csharp
public object ConsumerAcceptListsInput { get; }
```

- *Type:* object

---

##### `ConsumerRejectListsInput`<sup>Optional</sup> <a name="ConsumerRejectListsInput" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.consumerRejectListsInput"></a>

```csharp
public string[] ConsumerRejectListsInput { get; }
```

- *Type:* string[]

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DomainNamesInput`<sup>Optional</sup> <a name="DomainNamesInput" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.domainNamesInput"></a>

```csharp
public string[] DomainNamesInput { get; }
```

- *Type:* string[]

---

##### `EnableProxyProtocolInput`<sup>Optional</sup> <a name="EnableProxyProtocolInput" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.enableProxyProtocolInput"></a>

```csharp
public object EnableProxyProtocolInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NatSubnetsInput`<sup>Optional</sup> <a name="NatSubnetsInput" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.natSubnetsInput"></a>

```csharp
public string[] NatSubnetsInput { get; }
```

- *Type:* string[]

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `PropagatedConnectionLimitInput`<sup>Optional</sup> <a name="PropagatedConnectionLimitInput" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.propagatedConnectionLimitInput"></a>

```csharp
public double PropagatedConnectionLimitInput { get; }
```

- *Type:* double

---

##### `ReconcileConnectionsInput`<sup>Optional</sup> <a name="ReconcileConnectionsInput" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.reconcileConnectionsInput"></a>

```csharp
public object ReconcileConnectionsInput { get; }
```

- *Type:* object

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TargetServiceInput`<sup>Optional</sup> <a name="TargetServiceInput" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.targetServiceInput"></a>

```csharp
public string TargetServiceInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ConnectionPreference`<sup>Required</sup> <a name="ConnectionPreference" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.connectionPreference"></a>

```csharp
public string ConnectionPreference { get; }
```

- *Type:* string

---

##### `ConsumerRejectLists`<sup>Required</sup> <a name="ConsumerRejectLists" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.consumerRejectLists"></a>

```csharp
public string[] ConsumerRejectLists { get; }
```

- *Type:* string[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DomainNames`<sup>Required</sup> <a name="DomainNames" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.domainNames"></a>

```csharp
public string[] DomainNames { get; }
```

- *Type:* string[]

---

##### `EnableProxyProtocol`<sup>Required</sup> <a name="EnableProxyProtocol" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.enableProxyProtocol"></a>

```csharp
public object EnableProxyProtocol { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NatSubnets`<sup>Required</sup> <a name="NatSubnets" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.natSubnets"></a>

```csharp
public string[] NatSubnets { get; }
```

- *Type:* string[]

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `PropagatedConnectionLimit`<sup>Required</sup> <a name="PropagatedConnectionLimit" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.propagatedConnectionLimit"></a>

```csharp
public double PropagatedConnectionLimit { get; }
```

- *Type:* double

---

##### `ReconcileConnections`<sup>Required</sup> <a name="ReconcileConnections" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.reconcileConnections"></a>

```csharp
public object ReconcileConnections { get; }
```

- *Type:* object

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `TargetService`<sup>Required</sup> <a name="TargetService" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.targetService"></a>

```csharp
public string TargetService { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachment.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeServiceAttachmentConfig <a name="GoogleComputeServiceAttachmentConfig" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeServiceAttachmentConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ConnectionPreference,
    object EnableProxyProtocol,
    string Name,
    string[] NatSubnets,
    string TargetService,
    object ConsumerAcceptLists = null,
    string[] ConsumerRejectLists = null,
    string Description = null,
    string[] DomainNames = null,
    string Id = null,
    string Project = null,
    double PropagatedConnectionLimit = null,
    object ReconcileConnections = null,
    string Region = null,
    GoogleComputeServiceAttachmentTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.connectionPreference">ConnectionPreference</a></code> | <code>string</code> | The connection preference to use for this service attachment. Valid values include "ACCEPT_AUTOMATIC", "ACCEPT_MANUAL". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.enableProxyProtocol">EnableProxyProtocol</a></code> | <code>object</code> | If true, enable the proxy protocol which is for supplying client TCP/IP address data in TCP connections that traverse proxies on their way to destination servers. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.name">Name</a></code> | <code>string</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.natSubnets">NatSubnets</a></code> | <code>string[]</code> | An array of subnets that is provided for NAT in this service attachment. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.targetService">TargetService</a></code> | <code>string</code> | The URL of a service serving the endpoint identified by this service attachment. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.consumerAcceptLists">ConsumerAcceptLists</a></code> | <code>object</code> | consumer_accept_lists block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.consumerRejectLists">ConsumerRejectLists</a></code> | <code>string[]</code> | An array of projects that are not allowed to connect to this service attachment. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.description">Description</a></code> | <code>string</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.domainNames">DomainNames</a></code> | <code>string[]</code> | If specified, the domain name will be used during the integration between the PSC connected endpoints and the Cloud DNS. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_service_attachment#id GoogleComputeServiceAttachment#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_service_attachment#project GoogleComputeServiceAttachment#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.propagatedConnectionLimit">PropagatedConnectionLimit</a></code> | <code>double</code> | The number of consumer spokes that connected Private Service Connect endpoints can be propagated to through Network Connectivity Center. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.reconcileConnections">ReconcileConnections</a></code> | <code>object</code> | This flag determines whether a consumer accept/reject list change can reconcile the statuses of existing ACCEPTED or REJECTED PSC endpoints. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.region">Region</a></code> | <code>string</code> | URL of the region where the resource resides. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeouts">GoogleComputeServiceAttachmentTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ConnectionPreference`<sup>Required</sup> <a name="ConnectionPreference" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.connectionPreference"></a>

```csharp
public string ConnectionPreference { get; set; }
```

- *Type:* string

The connection preference to use for this service attachment. Valid values include "ACCEPT_AUTOMATIC", "ACCEPT_MANUAL".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_service_attachment#connection_preference GoogleComputeServiceAttachment#connection_preference}

---

##### `EnableProxyProtocol`<sup>Required</sup> <a name="EnableProxyProtocol" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.enableProxyProtocol"></a>

```csharp
public object EnableProxyProtocol { get; set; }
```

- *Type:* object

If true, enable the proxy protocol which is for supplying client TCP/IP address data in TCP connections that traverse proxies on their way to destination servers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_service_attachment#enable_proxy_protocol GoogleComputeServiceAttachment#enable_proxy_protocol}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the resource.

The name must be 1-63 characters long, and
comply with RFC1035. Specifically, the name must be 1-63 characters
long and match the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?'
which means the first character must be a lowercase letter, and all
following characters must be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_service_attachment#name GoogleComputeServiceAttachment#name}

---

##### `NatSubnets`<sup>Required</sup> <a name="NatSubnets" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.natSubnets"></a>

```csharp
public string[] NatSubnets { get; set; }
```

- *Type:* string[]

An array of subnets that is provided for NAT in this service attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_service_attachment#nat_subnets GoogleComputeServiceAttachment#nat_subnets}

---

##### `TargetService`<sup>Required</sup> <a name="TargetService" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.targetService"></a>

```csharp
public string TargetService { get; set; }
```

- *Type:* string

The URL of a service serving the endpoint identified by this service attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_service_attachment#target_service GoogleComputeServiceAttachment#target_service}

---

##### `ConsumerAcceptLists`<sup>Optional</sup> <a name="ConsumerAcceptLists" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.consumerAcceptLists"></a>

```csharp
public object ConsumerAcceptLists { get; set; }
```

- *Type:* object

consumer_accept_lists block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_service_attachment#consumer_accept_lists GoogleComputeServiceAttachment#consumer_accept_lists}

---

##### `ConsumerRejectLists`<sup>Optional</sup> <a name="ConsumerRejectLists" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.consumerRejectLists"></a>

```csharp
public string[] ConsumerRejectLists { get; set; }
```

- *Type:* string[]

An array of projects that are not allowed to connect to this service attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_service_attachment#consumer_reject_lists GoogleComputeServiceAttachment#consumer_reject_lists}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_service_attachment#description GoogleComputeServiceAttachment#description}

---

##### `DomainNames`<sup>Optional</sup> <a name="DomainNames" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.domainNames"></a>

```csharp
public string[] DomainNames { get; set; }
```

- *Type:* string[]

If specified, the domain name will be used during the integration between the PSC connected endpoints and the Cloud DNS.

For example, this is a
valid domain name: "p.mycompany.com.". Current max number of domain names
supported is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_service_attachment#domain_names GoogleComputeServiceAttachment#domain_names}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_service_attachment#id GoogleComputeServiceAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_service_attachment#project GoogleComputeServiceAttachment#project}.

---

##### `PropagatedConnectionLimit`<sup>Optional</sup> <a name="PropagatedConnectionLimit" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.propagatedConnectionLimit"></a>

```csharp
public double PropagatedConnectionLimit { get; set; }
```

- *Type:* double

The number of consumer spokes that connected Private Service Connect endpoints can be propagated to through Network Connectivity Center.

This limit lets the service producer limit how many propagated Private Service Connect connections can be established to this service attachment from a single consumer.

If the connection preference of the service attachment is ACCEPT_MANUAL, the limit applies to each project or network that is listed in the consumer accept list.
If the connection preference of the service attachment is ACCEPT_AUTOMATIC, the limit applies to each project that contains a connected endpoint.

If unspecified, the default propagated connection limit is 250.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_service_attachment#propagated_connection_limit GoogleComputeServiceAttachment#propagated_connection_limit}

---

##### `ReconcileConnections`<sup>Optional</sup> <a name="ReconcileConnections" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.reconcileConnections"></a>

```csharp
public object ReconcileConnections { get; set; }
```

- *Type:* object

This flag determines whether a consumer accept/reject list change can reconcile the statuses of existing ACCEPTED or REJECTED PSC endpoints.

If false, connection policy update will only affect existing PENDING PSC endpoints. Existing ACCEPTED/REJECTED endpoints will remain untouched regardless how the connection policy is modified .
If true, update will affect both PENDING and ACCEPTED/REJECTED PSC endpoints. For example, an ACCEPTED PSC endpoint will be moved to REJECTED if its project is added to the reject list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_service_attachment#reconcile_connections GoogleComputeServiceAttachment#reconcile_connections}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

URL of the region where the resource resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_service_attachment#region GoogleComputeServiceAttachment#region}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConfig.property.timeouts"></a>

```csharp
public GoogleComputeServiceAttachmentTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeouts">GoogleComputeServiceAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_service_attachment#timeouts GoogleComputeServiceAttachment#timeouts}

---

### GoogleComputeServiceAttachmentConnectedEndpoints <a name="GoogleComputeServiceAttachmentConnectedEndpoints" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpoints.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeServiceAttachmentConnectedEndpoints {

};
```


### GoogleComputeServiceAttachmentConsumerAcceptLists <a name="GoogleComputeServiceAttachmentConsumerAcceptLists" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptLists"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptLists.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeServiceAttachmentConsumerAcceptLists {
    double ConnectionLimit,
    string NetworkUrl = null,
    string ProjectIdOrNum = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptLists.property.connectionLimit">ConnectionLimit</a></code> | <code>double</code> | The number of consumer forwarding rules the consumer project can create. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptLists.property.networkUrl">NetworkUrl</a></code> | <code>string</code> | The network that is allowed to connect to this service attachment. Only one of project_id_or_num and network_url may be set. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptLists.property.projectIdOrNum">ProjectIdOrNum</a></code> | <code>string</code> | A project that is allowed to connect to this service attachment. Only one of project_id_or_num and network_url may be set. |

---

##### `ConnectionLimit`<sup>Required</sup> <a name="ConnectionLimit" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptLists.property.connectionLimit"></a>

```csharp
public double ConnectionLimit { get; set; }
```

- *Type:* double

The number of consumer forwarding rules the consumer project can create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_service_attachment#connection_limit GoogleComputeServiceAttachment#connection_limit}

---

##### `NetworkUrl`<sup>Optional</sup> <a name="NetworkUrl" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptLists.property.networkUrl"></a>

```csharp
public string NetworkUrl { get; set; }
```

- *Type:* string

The network that is allowed to connect to this service attachment. Only one of project_id_or_num and network_url may be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_service_attachment#network_url GoogleComputeServiceAttachment#network_url}

---

##### `ProjectIdOrNum`<sup>Optional</sup> <a name="ProjectIdOrNum" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptLists.property.projectIdOrNum"></a>

```csharp
public string ProjectIdOrNum { get; set; }
```

- *Type:* string

A project that is allowed to connect to this service attachment. Only one of project_id_or_num and network_url may be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_service_attachment#project_id_or_num GoogleComputeServiceAttachment#project_id_or_num}

---

### GoogleComputeServiceAttachmentTimeouts <a name="GoogleComputeServiceAttachmentTimeouts" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeServiceAttachmentTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_service_attachment#create GoogleComputeServiceAttachment#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_service_attachment#delete GoogleComputeServiceAttachment#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_service_attachment#update GoogleComputeServiceAttachment#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_service_attachment#create GoogleComputeServiceAttachment#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_service_attachment#delete GoogleComputeServiceAttachment#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_service_attachment#update GoogleComputeServiceAttachment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeServiceAttachmentConnectedEndpointsList <a name="GoogleComputeServiceAttachmentConnectedEndpointsList" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeServiceAttachmentConnectedEndpointsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsList.get"></a>

```csharp
private GoogleComputeServiceAttachmentConnectedEndpointsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleComputeServiceAttachmentConnectedEndpointsOutputReference <a name="GoogleComputeServiceAttachmentConnectedEndpointsOutputReference" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeServiceAttachmentConnectedEndpointsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.property.consumerNetwork">ConsumerNetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.property.endpoint">Endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.property.propagatedConnectionCount">PropagatedConnectionCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.property.pscConnectionId">PscConnectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpoints">GoogleComputeServiceAttachmentConnectedEndpoints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConsumerNetwork`<sup>Required</sup> <a name="ConsumerNetwork" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.property.consumerNetwork"></a>

```csharp
public string ConsumerNetwork { get; }
```

- *Type:* string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.property.endpoint"></a>

```csharp
public string Endpoint { get; }
```

- *Type:* string

---

##### `PropagatedConnectionCount`<sup>Required</sup> <a name="PropagatedConnectionCount" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.property.propagatedConnectionCount"></a>

```csharp
public double PropagatedConnectionCount { get; }
```

- *Type:* double

---

##### `PscConnectionId`<sup>Required</sup> <a name="PscConnectionId" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.property.pscConnectionId"></a>

```csharp
public string PscConnectionId { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpointsOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeServiceAttachmentConnectedEndpoints InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConnectedEndpoints">GoogleComputeServiceAttachmentConnectedEndpoints</a>

---


### GoogleComputeServiceAttachmentConsumerAcceptListsList <a name="GoogleComputeServiceAttachmentConsumerAcceptListsList" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeServiceAttachmentConsumerAcceptListsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsList.get"></a>

```csharp
private GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference <a name="GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.resetNetworkUrl">ResetNetworkUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.resetProjectIdOrNum">ResetProjectIdOrNum</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNetworkUrl` <a name="ResetNetworkUrl" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.resetNetworkUrl"></a>

```csharp
private void ResetNetworkUrl()
```

##### `ResetProjectIdOrNum` <a name="ResetProjectIdOrNum" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.resetProjectIdOrNum"></a>

```csharp
private void ResetProjectIdOrNum()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.property.connectionLimitInput">ConnectionLimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.property.networkUrlInput">NetworkUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.property.projectIdOrNumInput">ProjectIdOrNumInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.property.connectionLimit">ConnectionLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.property.networkUrl">NetworkUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.property.projectIdOrNum">ProjectIdOrNum</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConnectionLimitInput`<sup>Optional</sup> <a name="ConnectionLimitInput" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.property.connectionLimitInput"></a>

```csharp
public double ConnectionLimitInput { get; }
```

- *Type:* double

---

##### `NetworkUrlInput`<sup>Optional</sup> <a name="NetworkUrlInput" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.property.networkUrlInput"></a>

```csharp
public string NetworkUrlInput { get; }
```

- *Type:* string

---

##### `ProjectIdOrNumInput`<sup>Optional</sup> <a name="ProjectIdOrNumInput" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.property.projectIdOrNumInput"></a>

```csharp
public string ProjectIdOrNumInput { get; }
```

- *Type:* string

---

##### `ConnectionLimit`<sup>Required</sup> <a name="ConnectionLimit" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.property.connectionLimit"></a>

```csharp
public double ConnectionLimit { get; }
```

- *Type:* double

---

##### `NetworkUrl`<sup>Required</sup> <a name="NetworkUrl" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.property.networkUrl"></a>

```csharp
public string NetworkUrl { get; }
```

- *Type:* string

---

##### `ProjectIdOrNum`<sup>Required</sup> <a name="ProjectIdOrNum" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.property.projectIdOrNum"></a>

```csharp
public string ProjectIdOrNum { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentConsumerAcceptListsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeServiceAttachmentTimeoutsOutputReference <a name="GoogleComputeServiceAttachmentTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeServiceAttachmentTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeServiceAttachment.GoogleComputeServiceAttachmentTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



