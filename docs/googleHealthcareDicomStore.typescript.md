# `googleHealthcareDicomStore` Submodule <a name="`googleHealthcareDicomStore` Submodule" id="@cdktf/provider-google-beta.googleHealthcareDicomStore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleHealthcareDicomStore <a name="GoogleHealthcareDicomStore" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_healthcare_dicom_store google_healthcare_dicom_store}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.Initializer"></a>

```typescript
import { googleHealthcareDicomStore } from '@cdktf/provider-google-beta'

new googleHealthcareDicomStore.GoogleHealthcareDicomStore(scope: Construct, id: string, config: GoogleHealthcareDicomStoreConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreConfig">GoogleHealthcareDicomStoreConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreConfig">GoogleHealthcareDicomStoreConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.putNotificationConfig">putNotificationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.putStreamConfigs">putStreamConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.resetNotificationConfig">resetNotificationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.resetStreamConfigs">resetStreamConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putNotificationConfig` <a name="putNotificationConfig" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.putNotificationConfig"></a>

```typescript
public putNotificationConfig(value: GoogleHealthcareDicomStoreNotificationConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.putNotificationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfig">GoogleHealthcareDicomStoreNotificationConfig</a>

---

##### `putStreamConfigs` <a name="putStreamConfigs" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.putStreamConfigs"></a>

```typescript
public putStreamConfigs(value: IResolvable | GoogleHealthcareDicomStoreStreamConfigs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.putStreamConfigs.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigs">GoogleHealthcareDicomStoreStreamConfigs</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleHealthcareDicomStoreTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeouts">GoogleHealthcareDicomStoreTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetNotificationConfig` <a name="resetNotificationConfig" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.resetNotificationConfig"></a>

```typescript
public resetNotificationConfig(): void
```

##### `resetStreamConfigs` <a name="resetStreamConfigs" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.resetStreamConfigs"></a>

```typescript
public resetStreamConfigs(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleHealthcareDicomStore resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.isConstruct"></a>

```typescript
import { googleHealthcareDicomStore } from '@cdktf/provider-google-beta'

googleHealthcareDicomStore.GoogleHealthcareDicomStore.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.isTerraformElement"></a>

```typescript
import { googleHealthcareDicomStore } from '@cdktf/provider-google-beta'

googleHealthcareDicomStore.GoogleHealthcareDicomStore.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.isTerraformResource"></a>

```typescript
import { googleHealthcareDicomStore } from '@cdktf/provider-google-beta'

googleHealthcareDicomStore.GoogleHealthcareDicomStore.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.generateConfigForImport"></a>

```typescript
import { googleHealthcareDicomStore } from '@cdktf/provider-google-beta'

googleHealthcareDicomStore.GoogleHealthcareDicomStore.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleHealthcareDicomStore resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleHealthcareDicomStore to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleHealthcareDicomStore that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_healthcare_dicom_store#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleHealthcareDicomStore to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.property.notificationConfig">notificationConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfigOutputReference">GoogleHealthcareDicomStoreNotificationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.property.selfLink">selfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.property.streamConfigs">streamConfigs</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsList">GoogleHealthcareDicomStoreStreamConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference">GoogleHealthcareDicomStoreTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.property.datasetInput">datasetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.property.notificationConfigInput">notificationConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfig">GoogleHealthcareDicomStoreNotificationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.property.streamConfigsInput">streamConfigsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigs">GoogleHealthcareDicomStoreStreamConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeouts">GoogleHealthcareDicomStoreTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.property.dataset">dataset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `notificationConfig`<sup>Required</sup> <a name="notificationConfig" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.property.notificationConfig"></a>

```typescript
public readonly notificationConfig: GoogleHealthcareDicomStoreNotificationConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfigOutputReference">GoogleHealthcareDicomStoreNotificationConfigOutputReference</a>

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.property.selfLink"></a>

```typescript
public readonly selfLink: string;
```

- *Type:* string

---

##### `streamConfigs`<sup>Required</sup> <a name="streamConfigs" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.property.streamConfigs"></a>

```typescript
public readonly streamConfigs: GoogleHealthcareDicomStoreStreamConfigsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsList">GoogleHealthcareDicomStoreStreamConfigsList</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleHealthcareDicomStoreTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference">GoogleHealthcareDicomStoreTimeoutsOutputReference</a>

---

##### `datasetInput`<sup>Optional</sup> <a name="datasetInput" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.property.datasetInput"></a>

```typescript
public readonly datasetInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `notificationConfigInput`<sup>Optional</sup> <a name="notificationConfigInput" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.property.notificationConfigInput"></a>

```typescript
public readonly notificationConfigInput: GoogleHealthcareDicomStoreNotificationConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfig">GoogleHealthcareDicomStoreNotificationConfig</a>

---

##### `streamConfigsInput`<sup>Optional</sup> <a name="streamConfigsInput" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.property.streamConfigsInput"></a>

```typescript
public readonly streamConfigsInput: IResolvable | GoogleHealthcareDicomStoreStreamConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigs">GoogleHealthcareDicomStoreStreamConfigs</a>[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleHealthcareDicomStoreTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeouts">GoogleHealthcareDicomStoreTimeouts</a>

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.property.dataset"></a>

```typescript
public readonly dataset: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleHealthcareDicomStoreConfig <a name="GoogleHealthcareDicomStoreConfig" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreConfig.Initializer"></a>

```typescript
import { googleHealthcareDicomStore } from '@cdktf/provider-google-beta'

const googleHealthcareDicomStoreConfig: googleHealthcareDicomStore.GoogleHealthcareDicomStoreConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreConfig.property.dataset">dataset</a></code> | <code>string</code> | Identifies the dataset addressed by this request. Must be in the format 'projects/{project}/locations/{location}/datasets/{dataset}'. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreConfig.property.name">name</a></code> | <code>string</code> | The resource name for the DicomStore. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_healthcare_dicom_store#id GoogleHealthcareDicomStore#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | User-supplied key-value pairs used to organize DICOM stores. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreConfig.property.notificationConfig">notificationConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfig">GoogleHealthcareDicomStoreNotificationConfig</a></code> | notification_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreConfig.property.streamConfigs">streamConfigs</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigs">GoogleHealthcareDicomStoreStreamConfigs</a>[]</code> | stream_configs block. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeouts">GoogleHealthcareDicomStoreTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreConfig.property.dataset"></a>

```typescript
public readonly dataset: string;
```

- *Type:* string

Identifies the dataset addressed by this request. Must be in the format 'projects/{project}/locations/{location}/datasets/{dataset}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_healthcare_dicom_store#dataset GoogleHealthcareDicomStore#dataset}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The resource name for the DicomStore.

** Changing this property may recreate the Dicom store (removing all data) **

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_healthcare_dicom_store#name GoogleHealthcareDicomStore#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_healthcare_dicom_store#id GoogleHealthcareDicomStore#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

User-supplied key-value pairs used to organize DICOM stores.

Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must
conform to the following PCRE regular expression: [\p{Ll}\p{Lo}][\p{Ll}\p{Lo}\p{N}_-]{0,62}

Label values are optional, must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128
bytes, and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}\p{N}_-]{0,63}

No more than 64 labels can be associated with a given store.

An object containing a list of "key": value pairs.
Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.


**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_healthcare_dicom_store#labels GoogleHealthcareDicomStore#labels}

---

##### `notificationConfig`<sup>Optional</sup> <a name="notificationConfig" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreConfig.property.notificationConfig"></a>

```typescript
public readonly notificationConfig: GoogleHealthcareDicomStoreNotificationConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfig">GoogleHealthcareDicomStoreNotificationConfig</a>

notification_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_healthcare_dicom_store#notification_config GoogleHealthcareDicomStore#notification_config}

---

##### `streamConfigs`<sup>Optional</sup> <a name="streamConfigs" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreConfig.property.streamConfigs"></a>

```typescript
public readonly streamConfigs: IResolvable | GoogleHealthcareDicomStoreStreamConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigs">GoogleHealthcareDicomStoreStreamConfigs</a>[]

stream_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_healthcare_dicom_store#stream_configs GoogleHealthcareDicomStore#stream_configs}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleHealthcareDicomStoreTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeouts">GoogleHealthcareDicomStoreTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_healthcare_dicom_store#timeouts GoogleHealthcareDicomStore#timeouts}

---

### GoogleHealthcareDicomStoreNotificationConfig <a name="GoogleHealthcareDicomStoreNotificationConfig" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfig.Initializer"></a>

```typescript
import { googleHealthcareDicomStore } from '@cdktf/provider-google-beta'

const googleHealthcareDicomStoreNotificationConfig: googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfig.property.pubsubTopic">pubsubTopic</a></code> | <code>string</code> | The Cloud Pub/Sub topic that notifications of changes are published on. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfig.property.sendForBulkImport">sendForBulkImport</a></code> | <code>boolean \| cdktf.IResolvable</code> | Indicates whether or not to send Pub/Sub notifications on bulk import. Only supported for DICOM imports. |

---

##### `pubsubTopic`<sup>Required</sup> <a name="pubsubTopic" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfig.property.pubsubTopic"></a>

```typescript
public readonly pubsubTopic: string;
```

- *Type:* string

The Cloud Pub/Sub topic that notifications of changes are published on.

Supplied by the client.
PubsubMessage.Data will contain the resource name. PubsubMessage.MessageId is the ID of this message.
It is guaranteed to be unique within the topic. PubsubMessage.PublishTime is the time at which the message
was published. Notifications are only sent if the topic is non-empty. Topic names must be scoped to a
project. service-PROJECT_NUMBER@gcp-sa-healthcare.iam.gserviceaccount.com must have publisher permissions on the given
Cloud Pub/Sub topic. Not having adequate permissions will cause the calls that send notifications to fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_healthcare_dicom_store#pubsub_topic GoogleHealthcareDicomStore#pubsub_topic}

---

##### `sendForBulkImport`<sup>Optional</sup> <a name="sendForBulkImport" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfig.property.sendForBulkImport"></a>

```typescript
public readonly sendForBulkImport: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Indicates whether or not to send Pub/Sub notifications on bulk import. Only supported for DICOM imports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_healthcare_dicom_store#send_for_bulk_import GoogleHealthcareDicomStore#send_for_bulk_import}

---

### GoogleHealthcareDicomStoreStreamConfigs <a name="GoogleHealthcareDicomStoreStreamConfigs" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigs.Initializer"></a>

```typescript
import { googleHealthcareDicomStore } from '@cdktf/provider-google-beta'

const googleHealthcareDicomStoreStreamConfigs: googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigs.property.bigqueryDestination">bigqueryDestination</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestination">GoogleHealthcareDicomStoreStreamConfigsBigqueryDestination</a></code> | bigquery_destination block. |

---

##### `bigqueryDestination`<sup>Required</sup> <a name="bigqueryDestination" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigs.property.bigqueryDestination"></a>

```typescript
public readonly bigqueryDestination: GoogleHealthcareDicomStoreStreamConfigsBigqueryDestination;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestination">GoogleHealthcareDicomStoreStreamConfigsBigqueryDestination</a>

bigquery_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_healthcare_dicom_store#bigquery_destination GoogleHealthcareDicomStore#bigquery_destination}

---

### GoogleHealthcareDicomStoreStreamConfigsBigqueryDestination <a name="GoogleHealthcareDicomStoreStreamConfigsBigqueryDestination" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestination.Initializer"></a>

```typescript
import { googleHealthcareDicomStore } from '@cdktf/provider-google-beta'

const googleHealthcareDicomStoreStreamConfigsBigqueryDestination: googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestination = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestination.property.tableUri">tableUri</a></code> | <code>string</code> | a fully qualified BigQuery table URI where DICOM instance metadata will be streamed. |

---

##### `tableUri`<sup>Required</sup> <a name="tableUri" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestination.property.tableUri"></a>

```typescript
public readonly tableUri: string;
```

- *Type:* string

a fully qualified BigQuery table URI where DICOM instance metadata will be streamed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_healthcare_dicom_store#table_uri GoogleHealthcareDicomStore#table_uri}

---

### GoogleHealthcareDicomStoreTimeouts <a name="GoogleHealthcareDicomStoreTimeouts" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeouts.Initializer"></a>

```typescript
import { googleHealthcareDicomStore } from '@cdktf/provider-google-beta'

const googleHealthcareDicomStoreTimeouts: googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_healthcare_dicom_store#create GoogleHealthcareDicomStore#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_healthcare_dicom_store#delete GoogleHealthcareDicomStore#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_healthcare_dicom_store#update GoogleHealthcareDicomStore#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_healthcare_dicom_store#create GoogleHealthcareDicomStore#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_healthcare_dicom_store#delete GoogleHealthcareDicomStore#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_healthcare_dicom_store#update GoogleHealthcareDicomStore#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleHealthcareDicomStoreNotificationConfigOutputReference <a name="GoogleHealthcareDicomStoreNotificationConfigOutputReference" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfigOutputReference.Initializer"></a>

```typescript
import { googleHealthcareDicomStore } from '@cdktf/provider-google-beta'

new googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfigOutputReference.resetSendForBulkImport">resetSendForBulkImport</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSendForBulkImport` <a name="resetSendForBulkImport" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfigOutputReference.resetSendForBulkImport"></a>

```typescript
public resetSendForBulkImport(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfigOutputReference.property.pubsubTopicInput">pubsubTopicInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfigOutputReference.property.sendForBulkImportInput">sendForBulkImportInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfigOutputReference.property.pubsubTopic">pubsubTopic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfigOutputReference.property.sendForBulkImport">sendForBulkImport</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfig">GoogleHealthcareDicomStoreNotificationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pubsubTopicInput`<sup>Optional</sup> <a name="pubsubTopicInput" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfigOutputReference.property.pubsubTopicInput"></a>

```typescript
public readonly pubsubTopicInput: string;
```

- *Type:* string

---

##### `sendForBulkImportInput`<sup>Optional</sup> <a name="sendForBulkImportInput" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfigOutputReference.property.sendForBulkImportInput"></a>

```typescript
public readonly sendForBulkImportInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `pubsubTopic`<sup>Required</sup> <a name="pubsubTopic" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfigOutputReference.property.pubsubTopic"></a>

```typescript
public readonly pubsubTopic: string;
```

- *Type:* string

---

##### `sendForBulkImport`<sup>Required</sup> <a name="sendForBulkImport" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfigOutputReference.property.sendForBulkImport"></a>

```typescript
public readonly sendForBulkImport: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleHealthcareDicomStoreNotificationConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfig">GoogleHealthcareDicomStoreNotificationConfig</a>

---


### GoogleHealthcareDicomStoreStreamConfigsBigqueryDestinationOutputReference <a name="GoogleHealthcareDicomStoreStreamConfigsBigqueryDestinationOutputReference" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestinationOutputReference.Initializer"></a>

```typescript
import { googleHealthcareDicomStore } from '@cdktf/provider-google-beta'

new googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestinationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestinationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestinationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestinationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestinationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestinationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestinationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestinationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestinationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestinationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestinationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestinationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestinationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestinationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestinationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestinationOutputReference.property.tableUriInput">tableUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestinationOutputReference.property.tableUri">tableUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestinationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestination">GoogleHealthcareDicomStoreStreamConfigsBigqueryDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestinationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestinationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tableUriInput`<sup>Optional</sup> <a name="tableUriInput" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestinationOutputReference.property.tableUriInput"></a>

```typescript
public readonly tableUriInput: string;
```

- *Type:* string

---

##### `tableUri`<sup>Required</sup> <a name="tableUri" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestinationOutputReference.property.tableUri"></a>

```typescript
public readonly tableUri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestinationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleHealthcareDicomStoreStreamConfigsBigqueryDestination;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestination">GoogleHealthcareDicomStoreStreamConfigsBigqueryDestination</a>

---


### GoogleHealthcareDicomStoreStreamConfigsList <a name="GoogleHealthcareDicomStoreStreamConfigsList" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsList.Initializer"></a>

```typescript
import { googleHealthcareDicomStore } from '@cdktf/provider-google-beta'

new googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsList.get"></a>

```typescript
public get(index: number): GoogleHealthcareDicomStoreStreamConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigs">GoogleHealthcareDicomStoreStreamConfigs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleHealthcareDicomStoreStreamConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigs">GoogleHealthcareDicomStoreStreamConfigs</a>[]

---


### GoogleHealthcareDicomStoreStreamConfigsOutputReference <a name="GoogleHealthcareDicomStoreStreamConfigsOutputReference" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsOutputReference.Initializer"></a>

```typescript
import { googleHealthcareDicomStore } from '@cdktf/provider-google-beta'

new googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsOutputReference.putBigqueryDestination">putBigqueryDestination</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBigqueryDestination` <a name="putBigqueryDestination" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsOutputReference.putBigqueryDestination"></a>

```typescript
public putBigqueryDestination(value: GoogleHealthcareDicomStoreStreamConfigsBigqueryDestination): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsOutputReference.putBigqueryDestination.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestination">GoogleHealthcareDicomStoreStreamConfigsBigqueryDestination</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsOutputReference.property.bigqueryDestination">bigqueryDestination</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestinationOutputReference">GoogleHealthcareDicomStoreStreamConfigsBigqueryDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsOutputReference.property.bigqueryDestinationInput">bigqueryDestinationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestination">GoogleHealthcareDicomStoreStreamConfigsBigqueryDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigs">GoogleHealthcareDicomStoreStreamConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bigqueryDestination`<sup>Required</sup> <a name="bigqueryDestination" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsOutputReference.property.bigqueryDestination"></a>

```typescript
public readonly bigqueryDestination: GoogleHealthcareDicomStoreStreamConfigsBigqueryDestinationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestinationOutputReference">GoogleHealthcareDicomStoreStreamConfigsBigqueryDestinationOutputReference</a>

---

##### `bigqueryDestinationInput`<sup>Optional</sup> <a name="bigqueryDestinationInput" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsOutputReference.property.bigqueryDestinationInput"></a>

```typescript
public readonly bigqueryDestinationInput: GoogleHealthcareDicomStoreStreamConfigsBigqueryDestination;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestination">GoogleHealthcareDicomStoreStreamConfigsBigqueryDestination</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleHealthcareDicomStoreStreamConfigs;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigs">GoogleHealthcareDicomStoreStreamConfigs</a>

---


### GoogleHealthcareDicomStoreTimeoutsOutputReference <a name="GoogleHealthcareDicomStoreTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleHealthcareDicomStore } from '@cdktf/provider-google-beta'

new googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeouts">GoogleHealthcareDicomStoreTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleHealthcareDicomStoreTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeouts">GoogleHealthcareDicomStoreTimeouts</a>

---



