# `dataGooglePrivilegedAccessManagerEntitlement` Submodule <a name="`dataGooglePrivilegedAccessManagerEntitlement` Submodule" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGooglePrivilegedAccessManagerEntitlement <a name="DataGooglePrivilegedAccessManagerEntitlement" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/data-sources/google_privileged_access_manager_entitlement google_privileged_access_manager_entitlement}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.Initializer"></a>

```typescript
import { dataGooglePrivilegedAccessManagerEntitlement } from '@cdktf/provider-google-beta'

new dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement(scope: Construct, id: string, config?: DataGooglePrivilegedAccessManagerEntitlementConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementConfig">DataGooglePrivilegedAccessManagerEntitlementConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementConfig">DataGooglePrivilegedAccessManagerEntitlementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.resetEntitlementId">resetEntitlementId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.resetParent">resetParent</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetEntitlementId` <a name="resetEntitlementId" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.resetEntitlementId"></a>

```typescript
public resetEntitlementId(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetParent` <a name="resetParent" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.resetParent"></a>

```typescript
public resetParent(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGooglePrivilegedAccessManagerEntitlement resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.isConstruct"></a>

```typescript
import { dataGooglePrivilegedAccessManagerEntitlement } from '@cdktf/provider-google-beta'

dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.isTerraformElement"></a>

```typescript
import { dataGooglePrivilegedAccessManagerEntitlement } from '@cdktf/provider-google-beta'

dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.isTerraformDataSource"></a>

```typescript
import { dataGooglePrivilegedAccessManagerEntitlement } from '@cdktf/provider-google-beta'

dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.generateConfigForImport"></a>

```typescript
import { dataGooglePrivilegedAccessManagerEntitlement } from '@cdktf/provider-google-beta'

dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataGooglePrivilegedAccessManagerEntitlement resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGooglePrivilegedAccessManagerEntitlement to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGooglePrivilegedAccessManagerEntitlement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/data-sources/google_privileged_access_manager_entitlement#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGooglePrivilegedAccessManagerEntitlement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.additionalNotificationTargets">additionalNotificationTargets</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsList">DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.approvalWorkflow">approvalWorkflow</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowList">DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.eligibleUsers">eligibleUsers</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersList">DataGooglePrivilegedAccessManagerEntitlementEligibleUsersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.maxRequestDuration">maxRequestDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.privilegedAccess">privilegedAccess</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessList">DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.requesterJustificationConfig">requesterJustificationConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigList">DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.entitlementIdInput">entitlementIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.parentInput">parentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.entitlementId">entitlementId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.parent">parent</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `additionalNotificationTargets`<sup>Required</sup> <a name="additionalNotificationTargets" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.additionalNotificationTargets"></a>

```typescript
public readonly additionalNotificationTargets: DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsList">DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsList</a>

---

##### `approvalWorkflow`<sup>Required</sup> <a name="approvalWorkflow" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.approvalWorkflow"></a>

```typescript
public readonly approvalWorkflow: DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowList">DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowList</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `eligibleUsers`<sup>Required</sup> <a name="eligibleUsers" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.eligibleUsers"></a>

```typescript
public readonly eligibleUsers: DataGooglePrivilegedAccessManagerEntitlementEligibleUsersList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersList">DataGooglePrivilegedAccessManagerEntitlementEligibleUsersList</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `maxRequestDuration`<sup>Required</sup> <a name="maxRequestDuration" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.maxRequestDuration"></a>

```typescript
public readonly maxRequestDuration: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `privilegedAccess`<sup>Required</sup> <a name="privilegedAccess" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.privilegedAccess"></a>

```typescript
public readonly privilegedAccess: DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessList">DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessList</a>

---

##### `requesterJustificationConfig`<sup>Required</sup> <a name="requesterJustificationConfig" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.requesterJustificationConfig"></a>

```typescript
public readonly requesterJustificationConfig: DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigList">DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `entitlementIdInput`<sup>Optional</sup> <a name="entitlementIdInput" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.entitlementIdInput"></a>

```typescript
public readonly entitlementIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.parentInput"></a>

```typescript
public readonly parentInput: string;
```

- *Type:* string

---

##### `entitlementId`<sup>Required</sup> <a name="entitlementId" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.entitlementId"></a>

```typescript
public readonly entitlementId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlement.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets <a name="DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets.Initializer"></a>

```typescript
import { dataGooglePrivilegedAccessManagerEntitlement } from '@cdktf/provider-google-beta'

const dataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets: dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets = { ... }
```


### DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflow <a name="DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflow" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflow.Initializer"></a>

```typescript
import { dataGooglePrivilegedAccessManagerEntitlement } from '@cdktf/provider-google-beta'

const dataGooglePrivilegedAccessManagerEntitlementApprovalWorkflow: dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflow = { ... }
```


### DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals <a name="DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals.Initializer"></a>

```typescript
import { dataGooglePrivilegedAccessManagerEntitlement } from '@cdktf/provider-google-beta'

const dataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals: dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals = { ... }
```


### DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps <a name="DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps.Initializer"></a>

```typescript
import { dataGooglePrivilegedAccessManagerEntitlement } from '@cdktf/provider-google-beta'

const dataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps: dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps = { ... }
```


### DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers <a name="DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers.Initializer"></a>

```typescript
import { dataGooglePrivilegedAccessManagerEntitlement } from '@cdktf/provider-google-beta'

const dataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers: dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers = { ... }
```


### DataGooglePrivilegedAccessManagerEntitlementConfig <a name="DataGooglePrivilegedAccessManagerEntitlementConfig" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementConfig.Initializer"></a>

```typescript
import { dataGooglePrivilegedAccessManagerEntitlement } from '@cdktf/provider-google-beta'

const dataGooglePrivilegedAccessManagerEntitlementConfig: dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementConfig.property.entitlementId">entitlementId</a></code> | <code>string</code> | The ID to use for this Entitlement. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/data-sources/google_privileged_access_manager_entitlement#id DataGooglePrivilegedAccessManagerEntitlement#id}. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementConfig.property.location">location</a></code> | <code>string</code> | The region of the Entitlement resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementConfig.property.parent">parent</a></code> | <code>string</code> | Format: projects/{project-id\|project-number} or organizations/{organization-number} or folders/{folder-number}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `entitlementId`<sup>Optional</sup> <a name="entitlementId" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementConfig.property.entitlementId"></a>

```typescript
public readonly entitlementId: string;
```

- *Type:* string

The ID to use for this Entitlement.

This will become the last part of the resource name.
This value should be 4-63 characters, and valid characters are "[a-z]", "[0-9]", and "-". The first character should be from [a-z].
This value should be unique among all other Entitlements under the specified 'parent'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/data-sources/google_privileged_access_manager_entitlement#entitlement_id DataGooglePrivilegedAccessManagerEntitlement#entitlement_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/data-sources/google_privileged_access_manager_entitlement#id DataGooglePrivilegedAccessManagerEntitlement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The region of the Entitlement resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/data-sources/google_privileged_access_manager_entitlement#location DataGooglePrivilegedAccessManagerEntitlement#location}

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementConfig.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

Format: projects/{project-id|project-number} or organizations/{organization-number} or folders/{folder-number}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/data-sources/google_privileged_access_manager_entitlement#parent DataGooglePrivilegedAccessManagerEntitlement#parent}

---

### DataGooglePrivilegedAccessManagerEntitlementEligibleUsers <a name="DataGooglePrivilegedAccessManagerEntitlementEligibleUsers" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsers.Initializer"></a>

```typescript
import { dataGooglePrivilegedAccessManagerEntitlement } from '@cdktf/provider-google-beta'

const dataGooglePrivilegedAccessManagerEntitlementEligibleUsers: dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsers = { ... }
```


### DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccess <a name="DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccess" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccess.Initializer"></a>

```typescript
import { dataGooglePrivilegedAccessManagerEntitlement } from '@cdktf/provider-google-beta'

const dataGooglePrivilegedAccessManagerEntitlementPrivilegedAccess: dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccess = { ... }
```


### DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess <a name="DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess.Initializer"></a>

```typescript
import { dataGooglePrivilegedAccessManagerEntitlement } from '@cdktf/provider-google-beta'

const dataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess: dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess = { ... }
```


### DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings <a name="DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings.Initializer"></a>

```typescript
import { dataGooglePrivilegedAccessManagerEntitlement } from '@cdktf/provider-google-beta'

const dataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings: dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings = { ... }
```


### DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig <a name="DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig.Initializer"></a>

```typescript
import { dataGooglePrivilegedAccessManagerEntitlement } from '@cdktf/provider-google-beta'

const dataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig: dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig = { ... }
```


### DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory <a name="DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory.Initializer"></a>

```typescript
import { dataGooglePrivilegedAccessManagerEntitlement } from '@cdktf/provider-google-beta'

const dataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory: dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory = { ... }
```


### DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured <a name="DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured.Initializer"></a>

```typescript
import { dataGooglePrivilegedAccessManagerEntitlement } from '@cdktf/provider-google-beta'

const dataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured: dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsList <a name="DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsList" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsList.Initializer"></a>

```typescript
import { dataGooglePrivilegedAccessManagerEntitlement } from '@cdktf/provider-google-beta'

new dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsList.get"></a>

```typescript
public get(index: number): DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference <a name="DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.Initializer"></a>

```typescript
import { dataGooglePrivilegedAccessManagerEntitlement } from '@cdktf/provider-google-beta'

new dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.property.adminEmailRecipients">adminEmailRecipients</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.property.requesterEmailRecipients">requesterEmailRecipients</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets">DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `adminEmailRecipients`<sup>Required</sup> <a name="adminEmailRecipients" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.property.adminEmailRecipients"></a>

```typescript
public readonly adminEmailRecipients: string[];
```

- *Type:* string[]

---

##### `requesterEmailRecipients`<sup>Required</sup> <a name="requesterEmailRecipients" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.property.requesterEmailRecipients"></a>

```typescript
public readonly requesterEmailRecipients: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets">DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets</a>

---


### DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowList <a name="DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowList" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowList.Initializer"></a>

```typescript
import { dataGooglePrivilegedAccessManagerEntitlement } from '@cdktf/provider-google-beta'

new dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowList.get"></a>

```typescript
public get(index: number): DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsList <a name="DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsList" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsList.Initializer"></a>

```typescript
import { dataGooglePrivilegedAccessManagerEntitlement } from '@cdktf/provider-google-beta'

new dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsList.get"></a>

```typescript
public get(index: number): DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference <a name="DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.Initializer"></a>

```typescript
import { dataGooglePrivilegedAccessManagerEntitlement } from '@cdktf/provider-google-beta'

new dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.property.requireApproverJustification">requireApproverJustification</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.property.steps">steps</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList">DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals">DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `requireApproverJustification`<sup>Required</sup> <a name="requireApproverJustification" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.property.requireApproverJustification"></a>

```typescript
public readonly requireApproverJustification: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `steps`<sup>Required</sup> <a name="steps" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.property.steps"></a>

```typescript
public readonly steps: DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList">DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals">DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals</a>

---


### DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversList <a name="DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversList" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversList.Initializer"></a>

```typescript
import { dataGooglePrivilegedAccessManagerEntitlement } from '@cdktf/provider-google-beta'

new dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversList.get"></a>

```typescript
public get(index: number): DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference <a name="DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.Initializer"></a>

```typescript
import { dataGooglePrivilegedAccessManagerEntitlement } from '@cdktf/provider-google-beta'

new dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.property.principals">principals</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers">DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `principals`<sup>Required</sup> <a name="principals" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.property.principals"></a>

```typescript
public readonly principals: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers">DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers</a>

---


### DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList <a name="DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.Initializer"></a>

```typescript
import { dataGooglePrivilegedAccessManagerEntitlement } from '@cdktf/provider-google-beta'

new dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.get"></a>

```typescript
public get(index: number): DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference <a name="DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.Initializer"></a>

```typescript
import { dataGooglePrivilegedAccessManagerEntitlement } from '@cdktf/provider-google-beta'

new dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.property.approvalsNeeded">approvalsNeeded</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.property.approverEmailRecipients">approverEmailRecipients</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.property.approvers">approvers</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversList">DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps">DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `approvalsNeeded`<sup>Required</sup> <a name="approvalsNeeded" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.property.approvalsNeeded"></a>

```typescript
public readonly approvalsNeeded: number;
```

- *Type:* number

---

##### `approverEmailRecipients`<sup>Required</sup> <a name="approverEmailRecipients" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.property.approverEmailRecipients"></a>

```typescript
public readonly approverEmailRecipients: string[];
```

- *Type:* string[]

---

##### `approvers`<sup>Required</sup> <a name="approvers" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.property.approvers"></a>

```typescript
public readonly approvers: DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversList">DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps">DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps</a>

---


### DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference <a name="DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.Initializer"></a>

```typescript
import { dataGooglePrivilegedAccessManagerEntitlement } from '@cdktf/provider-google-beta'

new dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.property.manualApprovals">manualApprovals</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsList">DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflow">DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `manualApprovals`<sup>Required</sup> <a name="manualApprovals" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.property.manualApprovals"></a>

```typescript
public readonly manualApprovals: DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsList">DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflow;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflow">DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflow</a>

---


### DataGooglePrivilegedAccessManagerEntitlementEligibleUsersList <a name="DataGooglePrivilegedAccessManagerEntitlementEligibleUsersList" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersList.Initializer"></a>

```typescript
import { dataGooglePrivilegedAccessManagerEntitlement } from '@cdktf/provider-google-beta'

new dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersList.get"></a>

```typescript
public get(index: number): DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference <a name="DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.Initializer"></a>

```typescript
import { dataGooglePrivilegedAccessManagerEntitlement } from '@cdktf/provider-google-beta'

new dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.property.principals">principals</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsers">DataGooglePrivilegedAccessManagerEntitlementEligibleUsers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `principals`<sup>Required</sup> <a name="principals" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.property.principals"></a>

```typescript
public readonly principals: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGooglePrivilegedAccessManagerEntitlementEligibleUsers;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementEligibleUsers">DataGooglePrivilegedAccessManagerEntitlementEligibleUsers</a>

---


### DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessList <a name="DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessList" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessList.Initializer"></a>

```typescript
import { dataGooglePrivilegedAccessManagerEntitlement } from '@cdktf/provider-google-beta'

new dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessList.get"></a>

```typescript
public get(index: number): DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference <a name="DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.Initializer"></a>

```typescript
import { dataGooglePrivilegedAccessManagerEntitlement } from '@cdktf/provider-google-beta'

new dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.property.resource">resource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.property.roleBindings">roleBindings</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList">DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess">DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.property.resource"></a>

```typescript
public readonly resource: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `roleBindings`<sup>Required</sup> <a name="roleBindings" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.property.roleBindings"></a>

```typescript
public readonly roleBindings: DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList">DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess">DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess</a>

---


### DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList <a name="DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.Initializer"></a>

```typescript
import { dataGooglePrivilegedAccessManagerEntitlement } from '@cdktf/provider-google-beta'

new dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.get"></a>

```typescript
public get(index: number): DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference <a name="DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.Initializer"></a>

```typescript
import { dataGooglePrivilegedAccessManagerEntitlement } from '@cdktf/provider-google-beta'

new dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.property.conditionExpression">conditionExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings">DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `conditionExpression`<sup>Required</sup> <a name="conditionExpression" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.property.conditionExpression"></a>

```typescript
public readonly conditionExpression: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings">DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings</a>

---


### DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessList <a name="DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessList" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessList.Initializer"></a>

```typescript
import { dataGooglePrivilegedAccessManagerEntitlement } from '@cdktf/provider-google-beta'

new dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessList.get"></a>

```typescript
public get(index: number): DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference <a name="DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.Initializer"></a>

```typescript
import { dataGooglePrivilegedAccessManagerEntitlement } from '@cdktf/provider-google-beta'

new dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.property.gcpIamAccess">gcpIamAccess</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessList">DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccess">DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccess</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `gcpIamAccess`<sup>Required</sup> <a name="gcpIamAccess" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.property.gcpIamAccess"></a>

```typescript
public readonly gcpIamAccess: DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessList">DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccess;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccess">DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccess</a>

---


### DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigList <a name="DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigList" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigList.Initializer"></a>

```typescript
import { dataGooglePrivilegedAccessManagerEntitlement } from '@cdktf/provider-google-beta'

new dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigList.get"></a>

```typescript
public get(index: number): DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryList <a name="DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryList" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryList.Initializer"></a>

```typescript
import { dataGooglePrivilegedAccessManagerEntitlement } from '@cdktf/provider-google-beta'

new dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryList.get"></a>

```typescript
public get(index: number): DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference <a name="DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.Initializer"></a>

```typescript
import { dataGooglePrivilegedAccessManagerEntitlement } from '@cdktf/provider-google-beta'

new dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory">DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory">DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory</a>

---


### DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference <a name="DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.Initializer"></a>

```typescript
import { dataGooglePrivilegedAccessManagerEntitlement } from '@cdktf/provider-google-beta'

new dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.property.notMandatory">notMandatory</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryList">DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.property.unstructured">unstructured</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredList">DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig">DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `notMandatory`<sup>Required</sup> <a name="notMandatory" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.property.notMandatory"></a>

```typescript
public readonly notMandatory: DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryList">DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryList</a>

---

##### `unstructured`<sup>Required</sup> <a name="unstructured" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.property.unstructured"></a>

```typescript
public readonly unstructured: DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredList">DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig">DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig</a>

---


### DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredList <a name="DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredList" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredList.Initializer"></a>

```typescript
import { dataGooglePrivilegedAccessManagerEntitlement } from '@cdktf/provider-google-beta'

new dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredList.get"></a>

```typescript
public get(index: number): DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference <a name="DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.Initializer"></a>

```typescript
import { dataGooglePrivilegedAccessManagerEntitlement } from '@cdktf/provider-google-beta'

new dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured">DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGooglePrivilegedAccessManagerEntitlement.DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured">DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured</a>

---



