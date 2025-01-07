# `googleSpannerInstance` Submodule <a name="`googleSpannerInstance` Submodule" id="@cdktf/provider-google-beta.googleSpannerInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleSpannerInstance <a name="GoogleSpannerInstance" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_spanner_instance google_spanner_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.Initializer"></a>

```typescript
import { googleSpannerInstance } from '@cdktf/provider-google-beta'

new googleSpannerInstance.GoogleSpannerInstance(scope: Construct, id: string, config: GoogleSpannerInstanceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceConfig">GoogleSpannerInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceConfig">GoogleSpannerInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.putAutoscalingConfig">putAutoscalingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.resetAutoscalingConfig">resetAutoscalingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.resetDefaultBackupScheduleType">resetDefaultBackupScheduleType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.resetEdition">resetEdition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.resetForceDestroy">resetForceDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.resetNumNodes">resetNumNodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.resetProcessingUnits">resetProcessingUnits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAutoscalingConfig` <a name="putAutoscalingConfig" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.putAutoscalingConfig"></a>

```typescript
public putAutoscalingConfig(value: GoogleSpannerInstanceAutoscalingConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.putAutoscalingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfig">GoogleSpannerInstanceAutoscalingConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleSpannerInstanceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeouts">GoogleSpannerInstanceTimeouts</a>

---

##### `resetAutoscalingConfig` <a name="resetAutoscalingConfig" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.resetAutoscalingConfig"></a>

```typescript
public resetAutoscalingConfig(): void
```

##### `resetDefaultBackupScheduleType` <a name="resetDefaultBackupScheduleType" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.resetDefaultBackupScheduleType"></a>

```typescript
public resetDefaultBackupScheduleType(): void
```

##### `resetEdition` <a name="resetEdition" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.resetEdition"></a>

```typescript
public resetEdition(): void
```

##### `resetForceDestroy` <a name="resetForceDestroy" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.resetForceDestroy"></a>

```typescript
public resetForceDestroy(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNumNodes` <a name="resetNumNodes" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.resetNumNodes"></a>

```typescript
public resetNumNodes(): void
```

##### `resetProcessingUnits` <a name="resetProcessingUnits" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.resetProcessingUnits"></a>

```typescript
public resetProcessingUnits(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleSpannerInstance resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.isConstruct"></a>

```typescript
import { googleSpannerInstance } from '@cdktf/provider-google-beta'

googleSpannerInstance.GoogleSpannerInstance.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.isTerraformElement"></a>

```typescript
import { googleSpannerInstance } from '@cdktf/provider-google-beta'

googleSpannerInstance.GoogleSpannerInstance.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.isTerraformResource"></a>

```typescript
import { googleSpannerInstance } from '@cdktf/provider-google-beta'

googleSpannerInstance.GoogleSpannerInstance.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.generateConfigForImport"></a>

```typescript
import { googleSpannerInstance } from '@cdktf/provider-google-beta'

googleSpannerInstance.GoogleSpannerInstance.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleSpannerInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleSpannerInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleSpannerInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_spanner_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleSpannerInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.autoscalingConfig">autoscalingConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference">GoogleSpannerInstanceAutoscalingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference">GoogleSpannerInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.autoscalingConfigInput">autoscalingConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfig">GoogleSpannerInstanceAutoscalingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.configInput">configInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.defaultBackupScheduleTypeInput">defaultBackupScheduleTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.editionInput">editionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.forceDestroyInput">forceDestroyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.numNodesInput">numNodesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.processingUnitsInput">processingUnitsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeouts">GoogleSpannerInstanceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.config">config</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.defaultBackupScheduleType">defaultBackupScheduleType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.edition">edition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.forceDestroy">forceDestroy</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.numNodes">numNodes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.processingUnits">processingUnits</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `autoscalingConfig`<sup>Required</sup> <a name="autoscalingConfig" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.autoscalingConfig"></a>

```typescript
public readonly autoscalingConfig: GoogleSpannerInstanceAutoscalingConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference">GoogleSpannerInstanceAutoscalingConfigOutputReference</a>

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleSpannerInstanceTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference">GoogleSpannerInstanceTimeoutsOutputReference</a>

---

##### `autoscalingConfigInput`<sup>Optional</sup> <a name="autoscalingConfigInput" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.autoscalingConfigInput"></a>

```typescript
public readonly autoscalingConfigInput: GoogleSpannerInstanceAutoscalingConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfig">GoogleSpannerInstanceAutoscalingConfig</a>

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.configInput"></a>

```typescript
public readonly configInput: string;
```

- *Type:* string

---

##### `defaultBackupScheduleTypeInput`<sup>Optional</sup> <a name="defaultBackupScheduleTypeInput" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.defaultBackupScheduleTypeInput"></a>

```typescript
public readonly defaultBackupScheduleTypeInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `editionInput`<sup>Optional</sup> <a name="editionInput" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.editionInput"></a>

```typescript
public readonly editionInput: string;
```

- *Type:* string

---

##### `forceDestroyInput`<sup>Optional</sup> <a name="forceDestroyInput" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.forceDestroyInput"></a>

```typescript
public readonly forceDestroyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `numNodesInput`<sup>Optional</sup> <a name="numNodesInput" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.numNodesInput"></a>

```typescript
public readonly numNodesInput: number;
```

- *Type:* number

---

##### `processingUnitsInput`<sup>Optional</sup> <a name="processingUnitsInput" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.processingUnitsInput"></a>

```typescript
public readonly processingUnitsInput: number;
```

- *Type:* number

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleSpannerInstanceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeouts">GoogleSpannerInstanceTimeouts</a>

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.config"></a>

```typescript
public readonly config: string;
```

- *Type:* string

---

##### `defaultBackupScheduleType`<sup>Required</sup> <a name="defaultBackupScheduleType" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.defaultBackupScheduleType"></a>

```typescript
public readonly defaultBackupScheduleType: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `edition`<sup>Required</sup> <a name="edition" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.edition"></a>

```typescript
public readonly edition: string;
```

- *Type:* string

---

##### `forceDestroy`<sup>Required</sup> <a name="forceDestroy" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.forceDestroy"></a>

```typescript
public readonly forceDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `numNodes`<sup>Required</sup> <a name="numNodes" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.numNodes"></a>

```typescript
public readonly numNodes: number;
```

- *Type:* number

---

##### `processingUnits`<sup>Required</sup> <a name="processingUnits" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.processingUnits"></a>

```typescript
public readonly processingUnits: number;
```

- *Type:* number

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstance.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleSpannerInstanceAutoscalingConfig <a name="GoogleSpannerInstanceAutoscalingConfig" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfig.Initializer"></a>

```typescript
import { googleSpannerInstance } from '@cdktf/provider-google-beta'

const googleSpannerInstanceAutoscalingConfig: googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfig.property.asymmetricAutoscalingOptions">asymmetricAutoscalingOptions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions">GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions</a>[]</code> | asymmetric_autoscaling_options block. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfig.property.autoscalingLimits">autoscalingLimits</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimits">GoogleSpannerInstanceAutoscalingConfigAutoscalingLimits</a></code> | autoscaling_limits block. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfig.property.autoscalingTargets">autoscalingTargets</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargets">GoogleSpannerInstanceAutoscalingConfigAutoscalingTargets</a></code> | autoscaling_targets block. |

---

##### `asymmetricAutoscalingOptions`<sup>Optional</sup> <a name="asymmetricAutoscalingOptions" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfig.property.asymmetricAutoscalingOptions"></a>

```typescript
public readonly asymmetricAutoscalingOptions: IResolvable | GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions">GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions</a>[]

asymmetric_autoscaling_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_spanner_instance#asymmetric_autoscaling_options GoogleSpannerInstance#asymmetric_autoscaling_options}

---

##### `autoscalingLimits`<sup>Optional</sup> <a name="autoscalingLimits" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfig.property.autoscalingLimits"></a>

```typescript
public readonly autoscalingLimits: GoogleSpannerInstanceAutoscalingConfigAutoscalingLimits;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimits">GoogleSpannerInstanceAutoscalingConfigAutoscalingLimits</a>

autoscaling_limits block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_spanner_instance#autoscaling_limits GoogleSpannerInstance#autoscaling_limits}

---

##### `autoscalingTargets`<sup>Optional</sup> <a name="autoscalingTargets" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfig.property.autoscalingTargets"></a>

```typescript
public readonly autoscalingTargets: GoogleSpannerInstanceAutoscalingConfigAutoscalingTargets;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargets">GoogleSpannerInstanceAutoscalingConfigAutoscalingTargets</a>

autoscaling_targets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_spanner_instance#autoscaling_targets GoogleSpannerInstance#autoscaling_targets}

---

### GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions <a name="GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions.Initializer"></a>

```typescript
import { googleSpannerInstance } from '@cdktf/provider-google-beta'

const googleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions: googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions.property.overrides">overrides</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides">GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides</a></code> | overrides block. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions.property.replicaSelection">replicaSelection</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelection">GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelection</a></code> | replica_selection block. |

---

##### `overrides`<sup>Required</sup> <a name="overrides" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions.property.overrides"></a>

```typescript
public readonly overrides: GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides">GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides</a>

overrides block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_spanner_instance#overrides GoogleSpannerInstance#overrides}

---

##### `replicaSelection`<sup>Required</sup> <a name="replicaSelection" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions.property.replicaSelection"></a>

```typescript
public readonly replicaSelection: GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelection;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelection">GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelection</a>

replica_selection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_spanner_instance#replica_selection GoogleSpannerInstance#replica_selection}

---

### GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides <a name="GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides.Initializer"></a>

```typescript
import { googleSpannerInstance } from '@cdktf/provider-google-beta'

const googleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides: googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides.property.autoscalingLimits">autoscalingLimits</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits">GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits</a></code> | autoscaling_limits block. |

---

##### `autoscalingLimits`<sup>Required</sup> <a name="autoscalingLimits" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides.property.autoscalingLimits"></a>

```typescript
public readonly autoscalingLimits: GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits">GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits</a>

autoscaling_limits block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_spanner_instance#autoscaling_limits GoogleSpannerInstance#autoscaling_limits}

---

### GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits <a name="GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits.Initializer"></a>

```typescript
import { googleSpannerInstance } from '@cdktf/provider-google-beta'

const googleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits: googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits.property.maxNodes">maxNodes</a></code> | <code>number</code> | The maximum number of nodes for this specific replica. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits.property.minNodes">minNodes</a></code> | <code>number</code> | The minimum number of nodes for this specific replica. |

---

##### `maxNodes`<sup>Required</sup> <a name="maxNodes" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits.property.maxNodes"></a>

```typescript
public readonly maxNodes: number;
```

- *Type:* number

The maximum number of nodes for this specific replica.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_spanner_instance#max_nodes GoogleSpannerInstance#max_nodes}

---

##### `minNodes`<sup>Required</sup> <a name="minNodes" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits.property.minNodes"></a>

```typescript
public readonly minNodes: number;
```

- *Type:* number

The minimum number of nodes for this specific replica.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_spanner_instance#min_nodes GoogleSpannerInstance#min_nodes}

---

### GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelection <a name="GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelection" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelection"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelection.Initializer"></a>

```typescript
import { googleSpannerInstance } from '@cdktf/provider-google-beta'

const googleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelection: googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelection = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelection.property.location">location</a></code> | <code>string</code> | The location of the replica to apply asymmetric autoscaling options. |

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelection.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location of the replica to apply asymmetric autoscaling options.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_spanner_instance#location GoogleSpannerInstance#location}

---

### GoogleSpannerInstanceAutoscalingConfigAutoscalingLimits <a name="GoogleSpannerInstanceAutoscalingConfigAutoscalingLimits" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimits.Initializer"></a>

```typescript
import { googleSpannerInstance } from '@cdktf/provider-google-beta'

const googleSpannerInstanceAutoscalingConfigAutoscalingLimits: googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimits = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimits.property.maxNodes">maxNodes</a></code> | <code>number</code> | Specifies maximum number of nodes allocated to the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimits.property.maxProcessingUnits">maxProcessingUnits</a></code> | <code>number</code> | Specifies maximum number of processing units allocated to the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimits.property.minNodes">minNodes</a></code> | <code>number</code> | Specifies number of nodes allocated to the instance. If set, this number should be greater than or equal to 1. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimits.property.minProcessingUnits">minProcessingUnits</a></code> | <code>number</code> | Specifies minimum number of processing units allocated to the instance. If set, this number should be multiples of 1000. |

---

##### `maxNodes`<sup>Optional</sup> <a name="maxNodes" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimits.property.maxNodes"></a>

```typescript
public readonly maxNodes: number;
```

- *Type:* number

Specifies maximum number of nodes allocated to the instance.

If set, this number
should be greater than or equal to min_nodes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_spanner_instance#max_nodes GoogleSpannerInstance#max_nodes}

---

##### `maxProcessingUnits`<sup>Optional</sup> <a name="maxProcessingUnits" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimits.property.maxProcessingUnits"></a>

```typescript
public readonly maxProcessingUnits: number;
```

- *Type:* number

Specifies maximum number of processing units allocated to the instance.

If set, this number should be multiples of 1000 and be greater than or equal to
min_processing_units.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_spanner_instance#max_processing_units GoogleSpannerInstance#max_processing_units}

---

##### `minNodes`<sup>Optional</sup> <a name="minNodes" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimits.property.minNodes"></a>

```typescript
public readonly minNodes: number;
```

- *Type:* number

Specifies number of nodes allocated to the instance. If set, this number should be greater than or equal to 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_spanner_instance#min_nodes GoogleSpannerInstance#min_nodes}

---

##### `minProcessingUnits`<sup>Optional</sup> <a name="minProcessingUnits" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimits.property.minProcessingUnits"></a>

```typescript
public readonly minProcessingUnits: number;
```

- *Type:* number

Specifies minimum number of processing units allocated to the instance. If set, this number should be multiples of 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_spanner_instance#min_processing_units GoogleSpannerInstance#min_processing_units}

---

### GoogleSpannerInstanceAutoscalingConfigAutoscalingTargets <a name="GoogleSpannerInstanceAutoscalingConfigAutoscalingTargets" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargets.Initializer"></a>

```typescript
import { googleSpannerInstance } from '@cdktf/provider-google-beta'

const googleSpannerInstanceAutoscalingConfigAutoscalingTargets: googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargets = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargets.property.highPriorityCpuUtilizationPercent">highPriorityCpuUtilizationPercent</a></code> | <code>number</code> | Specifies the target high priority cpu utilization percentage that the autoscaler should be trying to achieve for the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargets.property.storageUtilizationPercent">storageUtilizationPercent</a></code> | <code>number</code> | Specifies the target storage utilization percentage that the autoscaler should be trying to achieve for the instance. |

---

##### `highPriorityCpuUtilizationPercent`<sup>Optional</sup> <a name="highPriorityCpuUtilizationPercent" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargets.property.highPriorityCpuUtilizationPercent"></a>

```typescript
public readonly highPriorityCpuUtilizationPercent: number;
```

- *Type:* number

Specifies the target high priority cpu utilization percentage that the autoscaler should be trying to achieve for the instance.

This number is on a scale from 0 (no utilization) to 100 (full utilization)..

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_spanner_instance#high_priority_cpu_utilization_percent GoogleSpannerInstance#high_priority_cpu_utilization_percent}

---

##### `storageUtilizationPercent`<sup>Optional</sup> <a name="storageUtilizationPercent" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargets.property.storageUtilizationPercent"></a>

```typescript
public readonly storageUtilizationPercent: number;
```

- *Type:* number

Specifies the target storage utilization percentage that the autoscaler should be trying to achieve for the instance.

This number is on a scale from 0 (no utilization) to 100 (full utilization).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_spanner_instance#storage_utilization_percent GoogleSpannerInstance#storage_utilization_percent}

---

### GoogleSpannerInstanceConfig <a name="GoogleSpannerInstanceConfig" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceConfig.Initializer"></a>

```typescript
import { googleSpannerInstance } from '@cdktf/provider-google-beta'

const googleSpannerInstanceConfig: googleSpannerInstance.GoogleSpannerInstanceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceConfig.property.config">config</a></code> | <code>string</code> | The name of the instance's configuration (similar but not quite the same as a region) which defines the geographic placement and replication of your databases in this instance. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceConfig.property.displayName">displayName</a></code> | <code>string</code> | The descriptive name for this instance as it appears in UIs. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceConfig.property.autoscalingConfig">autoscalingConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfig">GoogleSpannerInstanceAutoscalingConfig</a></code> | autoscaling_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceConfig.property.defaultBackupScheduleType">defaultBackupScheduleType</a></code> | <code>string</code> | Controls the default backup behavior for new databases within the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceConfig.property.edition">edition</a></code> | <code>string</code> | The edition selected for this instance. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceConfig.property.forceDestroy">forceDestroy</a></code> | <code>boolean \| cdktf.IResolvable</code> | When deleting a spanner instance, this boolean option will delete all backups of this instance. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_spanner_instance#id GoogleSpannerInstance#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceConfig.property.name">name</a></code> | <code>string</code> | A unique identifier for the instance, which cannot be changed after the instance is created. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceConfig.property.numNodes">numNodes</a></code> | <code>number</code> | The number of nodes allocated to this instance. Exactly one of either node_count or processing_units must be present in terraform. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceConfig.property.processingUnits">processingUnits</a></code> | <code>number</code> | The number of processing units allocated to this instance. Exactly one of processing_units or node_count must be present in terraform. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_spanner_instance#project GoogleSpannerInstance#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeouts">GoogleSpannerInstanceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceConfig.property.config"></a>

```typescript
public readonly config: string;
```

- *Type:* string

The name of the instance's configuration (similar but not quite the same as a region) which defines the geographic placement and replication of your databases in this instance.

It determines where your data
is stored. Values are typically of the form 'regional-europe-west1' , 'us-central' etc.
In order to obtain a valid list please consult the
[Configuration section of the docs](https://cloud.google.com/spanner/docs/instances).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_spanner_instance#config GoogleSpannerInstance#config}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The descriptive name for this instance as it appears in UIs.

Must be
unique per project and between 4 and 30 characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_spanner_instance#display_name GoogleSpannerInstance#display_name}

---

##### `autoscalingConfig`<sup>Optional</sup> <a name="autoscalingConfig" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceConfig.property.autoscalingConfig"></a>

```typescript
public readonly autoscalingConfig: GoogleSpannerInstanceAutoscalingConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfig">GoogleSpannerInstanceAutoscalingConfig</a>

autoscaling_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_spanner_instance#autoscaling_config GoogleSpannerInstance#autoscaling_config}

---

##### `defaultBackupScheduleType`<sup>Optional</sup> <a name="defaultBackupScheduleType" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceConfig.property.defaultBackupScheduleType"></a>

```typescript
public readonly defaultBackupScheduleType: string;
```

- *Type:* string

Controls the default backup behavior for new databases within the instance.

Note that 'AUTOMATIC' is not permitted for free instances, as backups and backup schedules are not allowed for free instances.
if unset or NONE, no default backup schedule will be created for new databases within the instance. Possible values: ["NONE", "AUTOMATIC"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_spanner_instance#default_backup_schedule_type GoogleSpannerInstance#default_backup_schedule_type}

---

##### `edition`<sup>Optional</sup> <a name="edition" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceConfig.property.edition"></a>

```typescript
public readonly edition: string;
```

- *Type:* string

The edition selected for this instance.

Different editions provide different capabilities at different price points. Possible values: ["EDITION_UNSPECIFIED", "STANDARD", "ENTERPRISE", "ENTERPRISE_PLUS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_spanner_instance#edition GoogleSpannerInstance#edition}

---

##### `forceDestroy`<sup>Optional</sup> <a name="forceDestroy" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceConfig.property.forceDestroy"></a>

```typescript
public readonly forceDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

When deleting a spanner instance, this boolean option will delete all backups of this instance.

This must be set to true if you created a backup manually in the console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_spanner_instance#force_destroy GoogleSpannerInstance#force_destroy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_spanner_instance#id GoogleSpannerInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_spanner_instance#labels GoogleSpannerInstance#labels}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

A unique identifier for the instance, which cannot be changed after the instance is created.

The name must be between 6 and 30 characters
in length.
If not provided, a random string starting with 'tf-' will be selected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_spanner_instance#name GoogleSpannerInstance#name}

---

##### `numNodes`<sup>Optional</sup> <a name="numNodes" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceConfig.property.numNodes"></a>

```typescript
public readonly numNodes: number;
```

- *Type:* number

The number of nodes allocated to this instance. Exactly one of either node_count or processing_units must be present in terraform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_spanner_instance#num_nodes GoogleSpannerInstance#num_nodes}

---

##### `processingUnits`<sup>Optional</sup> <a name="processingUnits" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceConfig.property.processingUnits"></a>

```typescript
public readonly processingUnits: number;
```

- *Type:* number

The number of processing units allocated to this instance. Exactly one of processing_units or node_count must be present in terraform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_spanner_instance#processing_units GoogleSpannerInstance#processing_units}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_spanner_instance#project GoogleSpannerInstance#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleSpannerInstanceTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeouts">GoogleSpannerInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_spanner_instance#timeouts GoogleSpannerInstance#timeouts}

---

### GoogleSpannerInstanceTimeouts <a name="GoogleSpannerInstanceTimeouts" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeouts.Initializer"></a>

```typescript
import { googleSpannerInstance } from '@cdktf/provider-google-beta'

const googleSpannerInstanceTimeouts: googleSpannerInstance.GoogleSpannerInstanceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_spanner_instance#create GoogleSpannerInstance#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_spanner_instance#delete GoogleSpannerInstance#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_spanner_instance#update GoogleSpannerInstance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_spanner_instance#create GoogleSpannerInstance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_spanner_instance#delete GoogleSpannerInstance#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_spanner_instance#update GoogleSpannerInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList <a name="GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList.Initializer"></a>

```typescript
import { googleSpannerInstance } from '@cdktf/provider-google-beta'

new googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList.get"></a>

```typescript
public get(index: number): GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions">GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions">GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions</a>[]

---


### GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference <a name="GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.Initializer"></a>

```typescript
import { googleSpannerInstance } from '@cdktf/provider-google-beta'

new googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.putOverrides">putOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.putReplicaSelection">putReplicaSelection</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOverrides` <a name="putOverrides" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.putOverrides"></a>

```typescript
public putOverrides(value: GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.putOverrides.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides">GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides</a>

---

##### `putReplicaSelection` <a name="putReplicaSelection" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.putReplicaSelection"></a>

```typescript
public putReplicaSelection(value: GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelection): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.putReplicaSelection.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelection">GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelection</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.property.overrides">overrides</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference">GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.property.replicaSelection">replicaSelection</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference">GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.property.overridesInput">overridesInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides">GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.property.replicaSelectionInput">replicaSelectionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelection">GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions">GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `overrides`<sup>Required</sup> <a name="overrides" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.property.overrides"></a>

```typescript
public readonly overrides: GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference">GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference</a>

---

##### `replicaSelection`<sup>Required</sup> <a name="replicaSelection" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.property.replicaSelection"></a>

```typescript
public readonly replicaSelection: GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference">GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference</a>

---

##### `overridesInput`<sup>Optional</sup> <a name="overridesInput" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.property.overridesInput"></a>

```typescript
public readonly overridesInput: GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides">GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides</a>

---

##### `replicaSelectionInput`<sup>Optional</sup> <a name="replicaSelectionInput" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.property.replicaSelectionInput"></a>

```typescript
public readonly replicaSelectionInput: GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelection;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelection">GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelection</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions">GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions</a>

---


### GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference <a name="GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.Initializer"></a>

```typescript
import { googleSpannerInstance } from '@cdktf/provider-google-beta'

new googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.property.maxNodesInput">maxNodesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.property.minNodesInput">minNodesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.property.maxNodes">maxNodes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.property.minNodes">minNodes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits">GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxNodesInput`<sup>Optional</sup> <a name="maxNodesInput" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.property.maxNodesInput"></a>

```typescript
public readonly maxNodesInput: number;
```

- *Type:* number

---

##### `minNodesInput`<sup>Optional</sup> <a name="minNodesInput" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.property.minNodesInput"></a>

```typescript
public readonly minNodesInput: number;
```

- *Type:* number

---

##### `maxNodes`<sup>Required</sup> <a name="maxNodes" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.property.maxNodes"></a>

```typescript
public readonly maxNodes: number;
```

- *Type:* number

---

##### `minNodes`<sup>Required</sup> <a name="minNodes" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.property.minNodes"></a>

```typescript
public readonly minNodes: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits">GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits</a>

---


### GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference <a name="GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.Initializer"></a>

```typescript
import { googleSpannerInstance } from '@cdktf/provider-google-beta'

new googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.putAutoscalingLimits">putAutoscalingLimits</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAutoscalingLimits` <a name="putAutoscalingLimits" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.putAutoscalingLimits"></a>

```typescript
public putAutoscalingLimits(value: GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.putAutoscalingLimits.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits">GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.property.autoscalingLimits">autoscalingLimits</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference">GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.property.autoscalingLimitsInput">autoscalingLimitsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits">GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides">GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `autoscalingLimits`<sup>Required</sup> <a name="autoscalingLimits" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.property.autoscalingLimits"></a>

```typescript
public readonly autoscalingLimits: GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference">GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimitsOutputReference</a>

---

##### `autoscalingLimitsInput`<sup>Optional</sup> <a name="autoscalingLimitsInput" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.property.autoscalingLimitsInput"></a>

```typescript
public readonly autoscalingLimitsInput: GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits">GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesAutoscalingLimits</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverridesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides">GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsOverrides</a>

---


### GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference <a name="GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.Initializer"></a>

```typescript
import { googleSpannerInstance } from '@cdktf/provider-google-beta'

new googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelection">GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelection;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelection">GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelection</a>

---


### GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference <a name="GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.Initializer"></a>

```typescript
import { googleSpannerInstance } from '@cdktf/provider-google-beta'

new googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.resetMaxNodes">resetMaxNodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.resetMaxProcessingUnits">resetMaxProcessingUnits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.resetMinNodes">resetMinNodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.resetMinProcessingUnits">resetMinProcessingUnits</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxNodes` <a name="resetMaxNodes" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.resetMaxNodes"></a>

```typescript
public resetMaxNodes(): void
```

##### `resetMaxProcessingUnits` <a name="resetMaxProcessingUnits" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.resetMaxProcessingUnits"></a>

```typescript
public resetMaxProcessingUnits(): void
```

##### `resetMinNodes` <a name="resetMinNodes" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.resetMinNodes"></a>

```typescript
public resetMinNodes(): void
```

##### `resetMinProcessingUnits` <a name="resetMinProcessingUnits" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.resetMinProcessingUnits"></a>

```typescript
public resetMinProcessingUnits(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.property.maxNodesInput">maxNodesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.property.maxProcessingUnitsInput">maxProcessingUnitsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.property.minNodesInput">minNodesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.property.minProcessingUnitsInput">minProcessingUnitsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.property.maxNodes">maxNodes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.property.maxProcessingUnits">maxProcessingUnits</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.property.minNodes">minNodes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.property.minProcessingUnits">minProcessingUnits</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimits">GoogleSpannerInstanceAutoscalingConfigAutoscalingLimits</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxNodesInput`<sup>Optional</sup> <a name="maxNodesInput" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.property.maxNodesInput"></a>

```typescript
public readonly maxNodesInput: number;
```

- *Type:* number

---

##### `maxProcessingUnitsInput`<sup>Optional</sup> <a name="maxProcessingUnitsInput" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.property.maxProcessingUnitsInput"></a>

```typescript
public readonly maxProcessingUnitsInput: number;
```

- *Type:* number

---

##### `minNodesInput`<sup>Optional</sup> <a name="minNodesInput" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.property.minNodesInput"></a>

```typescript
public readonly minNodesInput: number;
```

- *Type:* number

---

##### `minProcessingUnitsInput`<sup>Optional</sup> <a name="minProcessingUnitsInput" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.property.minProcessingUnitsInput"></a>

```typescript
public readonly minProcessingUnitsInput: number;
```

- *Type:* number

---

##### `maxNodes`<sup>Required</sup> <a name="maxNodes" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.property.maxNodes"></a>

```typescript
public readonly maxNodes: number;
```

- *Type:* number

---

##### `maxProcessingUnits`<sup>Required</sup> <a name="maxProcessingUnits" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.property.maxProcessingUnits"></a>

```typescript
public readonly maxProcessingUnits: number;
```

- *Type:* number

---

##### `minNodes`<sup>Required</sup> <a name="minNodes" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.property.minNodes"></a>

```typescript
public readonly minNodes: number;
```

- *Type:* number

---

##### `minProcessingUnits`<sup>Required</sup> <a name="minProcessingUnits" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.property.minProcessingUnits"></a>

```typescript
public readonly minProcessingUnits: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleSpannerInstanceAutoscalingConfigAutoscalingLimits;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimits">GoogleSpannerInstanceAutoscalingConfigAutoscalingLimits</a>

---


### GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference <a name="GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.Initializer"></a>

```typescript
import { googleSpannerInstance } from '@cdktf/provider-google-beta'

new googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.resetHighPriorityCpuUtilizationPercent">resetHighPriorityCpuUtilizationPercent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.resetStorageUtilizationPercent">resetStorageUtilizationPercent</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHighPriorityCpuUtilizationPercent` <a name="resetHighPriorityCpuUtilizationPercent" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.resetHighPriorityCpuUtilizationPercent"></a>

```typescript
public resetHighPriorityCpuUtilizationPercent(): void
```

##### `resetStorageUtilizationPercent` <a name="resetStorageUtilizationPercent" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.resetStorageUtilizationPercent"></a>

```typescript
public resetStorageUtilizationPercent(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.property.highPriorityCpuUtilizationPercentInput">highPriorityCpuUtilizationPercentInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.property.storageUtilizationPercentInput">storageUtilizationPercentInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.property.highPriorityCpuUtilizationPercent">highPriorityCpuUtilizationPercent</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.property.storageUtilizationPercent">storageUtilizationPercent</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargets">GoogleSpannerInstanceAutoscalingConfigAutoscalingTargets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `highPriorityCpuUtilizationPercentInput`<sup>Optional</sup> <a name="highPriorityCpuUtilizationPercentInput" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.property.highPriorityCpuUtilizationPercentInput"></a>

```typescript
public readonly highPriorityCpuUtilizationPercentInput: number;
```

- *Type:* number

---

##### `storageUtilizationPercentInput`<sup>Optional</sup> <a name="storageUtilizationPercentInput" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.property.storageUtilizationPercentInput"></a>

```typescript
public readonly storageUtilizationPercentInput: number;
```

- *Type:* number

---

##### `highPriorityCpuUtilizationPercent`<sup>Required</sup> <a name="highPriorityCpuUtilizationPercent" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.property.highPriorityCpuUtilizationPercent"></a>

```typescript
public readonly highPriorityCpuUtilizationPercent: number;
```

- *Type:* number

---

##### `storageUtilizationPercent`<sup>Required</sup> <a name="storageUtilizationPercent" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.property.storageUtilizationPercent"></a>

```typescript
public readonly storageUtilizationPercent: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleSpannerInstanceAutoscalingConfigAutoscalingTargets;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargets">GoogleSpannerInstanceAutoscalingConfigAutoscalingTargets</a>

---


### GoogleSpannerInstanceAutoscalingConfigOutputReference <a name="GoogleSpannerInstanceAutoscalingConfigOutputReference" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.Initializer"></a>

```typescript
import { googleSpannerInstance } from '@cdktf/provider-google-beta'

new googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.putAsymmetricAutoscalingOptions">putAsymmetricAutoscalingOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.putAutoscalingLimits">putAutoscalingLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.putAutoscalingTargets">putAutoscalingTargets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.resetAsymmetricAutoscalingOptions">resetAsymmetricAutoscalingOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.resetAutoscalingLimits">resetAutoscalingLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.resetAutoscalingTargets">resetAutoscalingTargets</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAsymmetricAutoscalingOptions` <a name="putAsymmetricAutoscalingOptions" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.putAsymmetricAutoscalingOptions"></a>

```typescript
public putAsymmetricAutoscalingOptions(value: IResolvable | GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.putAsymmetricAutoscalingOptions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions">GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions</a>[]

---

##### `putAutoscalingLimits` <a name="putAutoscalingLimits" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.putAutoscalingLimits"></a>

```typescript
public putAutoscalingLimits(value: GoogleSpannerInstanceAutoscalingConfigAutoscalingLimits): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.putAutoscalingLimits.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimits">GoogleSpannerInstanceAutoscalingConfigAutoscalingLimits</a>

---

##### `putAutoscalingTargets` <a name="putAutoscalingTargets" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.putAutoscalingTargets"></a>

```typescript
public putAutoscalingTargets(value: GoogleSpannerInstanceAutoscalingConfigAutoscalingTargets): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.putAutoscalingTargets.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargets">GoogleSpannerInstanceAutoscalingConfigAutoscalingTargets</a>

---

##### `resetAsymmetricAutoscalingOptions` <a name="resetAsymmetricAutoscalingOptions" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.resetAsymmetricAutoscalingOptions"></a>

```typescript
public resetAsymmetricAutoscalingOptions(): void
```

##### `resetAutoscalingLimits` <a name="resetAutoscalingLimits" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.resetAutoscalingLimits"></a>

```typescript
public resetAutoscalingLimits(): void
```

##### `resetAutoscalingTargets` <a name="resetAutoscalingTargets" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.resetAutoscalingTargets"></a>

```typescript
public resetAutoscalingTargets(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.property.asymmetricAutoscalingOptions">asymmetricAutoscalingOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList">GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.property.autoscalingLimits">autoscalingLimits</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference">GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.property.autoscalingTargets">autoscalingTargets</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference">GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.property.asymmetricAutoscalingOptionsInput">asymmetricAutoscalingOptionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions">GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.property.autoscalingLimitsInput">autoscalingLimitsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimits">GoogleSpannerInstanceAutoscalingConfigAutoscalingLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.property.autoscalingTargetsInput">autoscalingTargetsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargets">GoogleSpannerInstanceAutoscalingConfigAutoscalingTargets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfig">GoogleSpannerInstanceAutoscalingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `asymmetricAutoscalingOptions`<sup>Required</sup> <a name="asymmetricAutoscalingOptions" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.property.asymmetricAutoscalingOptions"></a>

```typescript
public readonly asymmetricAutoscalingOptions: GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList">GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptionsList</a>

---

##### `autoscalingLimits`<sup>Required</sup> <a name="autoscalingLimits" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.property.autoscalingLimits"></a>

```typescript
public readonly autoscalingLimits: GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference">GoogleSpannerInstanceAutoscalingConfigAutoscalingLimitsOutputReference</a>

---

##### `autoscalingTargets`<sup>Required</sup> <a name="autoscalingTargets" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.property.autoscalingTargets"></a>

```typescript
public readonly autoscalingTargets: GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference">GoogleSpannerInstanceAutoscalingConfigAutoscalingTargetsOutputReference</a>

---

##### `asymmetricAutoscalingOptionsInput`<sup>Optional</sup> <a name="asymmetricAutoscalingOptionsInput" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.property.asymmetricAutoscalingOptionsInput"></a>

```typescript
public readonly asymmetricAutoscalingOptionsInput: IResolvable | GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions">GoogleSpannerInstanceAutoscalingConfigAsymmetricAutoscalingOptions</a>[]

---

##### `autoscalingLimitsInput`<sup>Optional</sup> <a name="autoscalingLimitsInput" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.property.autoscalingLimitsInput"></a>

```typescript
public readonly autoscalingLimitsInput: GoogleSpannerInstanceAutoscalingConfigAutoscalingLimits;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingLimits">GoogleSpannerInstanceAutoscalingConfigAutoscalingLimits</a>

---

##### `autoscalingTargetsInput`<sup>Optional</sup> <a name="autoscalingTargetsInput" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.property.autoscalingTargetsInput"></a>

```typescript
public readonly autoscalingTargetsInput: GoogleSpannerInstanceAutoscalingConfigAutoscalingTargets;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigAutoscalingTargets">GoogleSpannerInstanceAutoscalingConfigAutoscalingTargets</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleSpannerInstanceAutoscalingConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceAutoscalingConfig">GoogleSpannerInstanceAutoscalingConfig</a>

---


### GoogleSpannerInstanceTimeoutsOutputReference <a name="GoogleSpannerInstanceTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleSpannerInstance } from '@cdktf/provider-google-beta'

new googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeouts">GoogleSpannerInstanceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleSpannerInstanceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleSpannerInstance.GoogleSpannerInstanceTimeouts">GoogleSpannerInstanceTimeouts</a>

---



