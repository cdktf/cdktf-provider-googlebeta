# `googleMonitoringMetricDescriptor` Submodule <a name="`googleMonitoringMetricDescriptor` Submodule" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleMonitoringMetricDescriptor <a name="GoogleMonitoringMetricDescriptor" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_metric_descriptor google_monitoring_metric_descriptor}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.Initializer"></a>

```typescript
import { googleMonitoringMetricDescriptor } from '@cdktf/provider-google-beta'

new googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor(scope: Construct, id: string, config: GoogleMonitoringMetricDescriptorConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorConfig">GoogleMonitoringMetricDescriptorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorConfig">GoogleMonitoringMetricDescriptorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.putLabels">putLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.putMetadata">putMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.resetLaunchStage">resetLaunchStage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.resetUnit">resetUnit</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLabels` <a name="putLabels" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.putLabels"></a>

```typescript
public putLabels(value: IResolvable | GoogleMonitoringMetricDescriptorLabels[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.putLabels.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabels">GoogleMonitoringMetricDescriptorLabels</a>[]

---

##### `putMetadata` <a name="putMetadata" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.putMetadata"></a>

```typescript
public putMetadata(value: GoogleMonitoringMetricDescriptorMetadata): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.putMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadata">GoogleMonitoringMetricDescriptorMetadata</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleMonitoringMetricDescriptorTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeouts">GoogleMonitoringMetricDescriptorTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetLaunchStage` <a name="resetLaunchStage" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.resetLaunchStage"></a>

```typescript
public resetLaunchStage(): void
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.resetMetadata"></a>

```typescript
public resetMetadata(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetUnit` <a name="resetUnit" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.resetUnit"></a>

```typescript
public resetUnit(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleMonitoringMetricDescriptor resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.isConstruct"></a>

```typescript
import { googleMonitoringMetricDescriptor } from '@cdktf/provider-google-beta'

googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.isTerraformElement"></a>

```typescript
import { googleMonitoringMetricDescriptor } from '@cdktf/provider-google-beta'

googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.isTerraformResource"></a>

```typescript
import { googleMonitoringMetricDescriptor } from '@cdktf/provider-google-beta'

googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.generateConfigForImport"></a>

```typescript
import { googleMonitoringMetricDescriptor } from '@cdktf/provider-google-beta'

googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleMonitoringMetricDescriptor resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleMonitoringMetricDescriptor to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleMonitoringMetricDescriptor that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_metric_descriptor#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleMonitoringMetricDescriptor to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.labels">labels</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsList">GoogleMonitoringMetricDescriptorLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference">GoogleMonitoringMetricDescriptorMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.monitoredResourceTypes">monitoredResourceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference">GoogleMonitoringMetricDescriptorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.labelsInput">labelsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabels">GoogleMonitoringMetricDescriptorLabels</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.launchStageInput">launchStageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.metadataInput">metadataInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadata">GoogleMonitoringMetricDescriptorMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.metricKindInput">metricKindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeouts">GoogleMonitoringMetricDescriptorTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.unitInput">unitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.valueTypeInput">valueTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.launchStage">launchStage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.metricKind">metricKind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.unit">unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.valueType">valueType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.labels"></a>

```typescript
public readonly labels: GoogleMonitoringMetricDescriptorLabelsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsList">GoogleMonitoringMetricDescriptorLabelsList</a>

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.metadata"></a>

```typescript
public readonly metadata: GoogleMonitoringMetricDescriptorMetadataOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference">GoogleMonitoringMetricDescriptorMetadataOutputReference</a>

---

##### `monitoredResourceTypes`<sup>Required</sup> <a name="monitoredResourceTypes" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.monitoredResourceTypes"></a>

```typescript
public readonly monitoredResourceTypes: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleMonitoringMetricDescriptorTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference">GoogleMonitoringMetricDescriptorTimeoutsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.labelsInput"></a>

```typescript
public readonly labelsInput: IResolvable | GoogleMonitoringMetricDescriptorLabels[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabels">GoogleMonitoringMetricDescriptorLabels</a>[]

---

##### `launchStageInput`<sup>Optional</sup> <a name="launchStageInput" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.launchStageInput"></a>

```typescript
public readonly launchStageInput: string;
```

- *Type:* string

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.metadataInput"></a>

```typescript
public readonly metadataInput: GoogleMonitoringMetricDescriptorMetadata;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadata">GoogleMonitoringMetricDescriptorMetadata</a>

---

##### `metricKindInput`<sup>Optional</sup> <a name="metricKindInput" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.metricKindInput"></a>

```typescript
public readonly metricKindInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleMonitoringMetricDescriptorTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeouts">GoogleMonitoringMetricDescriptorTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.unitInput"></a>

```typescript
public readonly unitInput: string;
```

- *Type:* string

---

##### `valueTypeInput`<sup>Optional</sup> <a name="valueTypeInput" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.valueTypeInput"></a>

```typescript
public readonly valueTypeInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `launchStage`<sup>Required</sup> <a name="launchStage" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.launchStage"></a>

```typescript
public readonly launchStage: string;
```

- *Type:* string

---

##### `metricKind`<sup>Required</sup> <a name="metricKind" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.metricKind"></a>

```typescript
public readonly metricKind: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

---

##### `valueType`<sup>Required</sup> <a name="valueType" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.valueType"></a>

```typescript
public readonly valueType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptor.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleMonitoringMetricDescriptorConfig <a name="GoogleMonitoringMetricDescriptorConfig" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorConfig.Initializer"></a>

```typescript
import { googleMonitoringMetricDescriptor } from '@cdktf/provider-google-beta'

const googleMonitoringMetricDescriptorConfig: googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorConfig.property.description">description</a></code> | <code>string</code> | A detailed description of the metric, which can be used in documentation. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorConfig.property.displayName">displayName</a></code> | <code>string</code> | A concise name for the metric, which can be displayed in user interfaces. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorConfig.property.metricKind">metricKind</a></code> | <code>string</code> | Whether the metric records instantaneous values, changes to a value, etc. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorConfig.property.type">type</a></code> | <code>string</code> | The metric type, including its DNS name prefix. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorConfig.property.valueType">valueType</a></code> | <code>string</code> | Whether the measurement is an integer, a floating-point number, etc. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_metric_descriptor#id GoogleMonitoringMetricDescriptor#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorConfig.property.labels">labels</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabels">GoogleMonitoringMetricDescriptorLabels</a>[]</code> | labels block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorConfig.property.launchStage">launchStage</a></code> | <code>string</code> | The launch stage of the metric definition. Possible values: ["LAUNCH_STAGE_UNSPECIFIED", "UNIMPLEMENTED", "PRELAUNCH", "EARLY_ACCESS", "ALPHA", "BETA", "GA", "DEPRECATED"]. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorConfig.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadata">GoogleMonitoringMetricDescriptorMetadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_metric_descriptor#project GoogleMonitoringMetricDescriptor#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeouts">GoogleMonitoringMetricDescriptorTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorConfig.property.unit">unit</a></code> | <code>string</code> | The units in which the metric value is reported. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A detailed description of the metric, which can be used in documentation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_metric_descriptor#description GoogleMonitoringMetricDescriptor#description}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

A concise name for the metric, which can be displayed in user interfaces.

Use sentence case without an ending period, for example "Request count".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_metric_descriptor#display_name GoogleMonitoringMetricDescriptor#display_name}

---

##### `metricKind`<sup>Required</sup> <a name="metricKind" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorConfig.property.metricKind"></a>

```typescript
public readonly metricKind: string;
```

- *Type:* string

Whether the metric records instantaneous values, changes to a value, etc.

Some combinations of metricKind and valueType might not be supported. Possible values: ["METRIC_KIND_UNSPECIFIED", "GAUGE", "DELTA", "CUMULATIVE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_metric_descriptor#metric_kind GoogleMonitoringMetricDescriptor#metric_kind}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The metric type, including its DNS name prefix.

The type is not URL-encoded. All service defined metrics must be prefixed with the service name, in the format of {service name}/{relative metric name}, such as cloudsql.googleapis.com/database/cpu/utilization. The relative metric name must have only upper and lower-case letters, digits, '/' and underscores '_' are allowed. Additionally, the maximum number of characters allowed for the relative_metric_name is 100. All user-defined metric types have the DNS name custom.googleapis.com, external.googleapis.com, or logging.googleapis.com/user/.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_metric_descriptor#type GoogleMonitoringMetricDescriptor#type}

---

##### `valueType`<sup>Required</sup> <a name="valueType" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorConfig.property.valueType"></a>

```typescript
public readonly valueType: string;
```

- *Type:* string

Whether the measurement is an integer, a floating-point number, etc.

Some combinations of metricKind and valueType might not be supported. Possible values: ["BOOL", "INT64", "DOUBLE", "STRING", "DISTRIBUTION"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_metric_descriptor#value_type GoogleMonitoringMetricDescriptor#value_type}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_metric_descriptor#id GoogleMonitoringMetricDescriptor#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorConfig.property.labels"></a>

```typescript
public readonly labels: IResolvable | GoogleMonitoringMetricDescriptorLabels[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabels">GoogleMonitoringMetricDescriptorLabels</a>[]

labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_metric_descriptor#labels GoogleMonitoringMetricDescriptor#labels}

---

##### `launchStage`<sup>Optional</sup> <a name="launchStage" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorConfig.property.launchStage"></a>

```typescript
public readonly launchStage: string;
```

- *Type:* string

The launch stage of the metric definition. Possible values: ["LAUNCH_STAGE_UNSPECIFIED", "UNIMPLEMENTED", "PRELAUNCH", "EARLY_ACCESS", "ALPHA", "BETA", "GA", "DEPRECATED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_metric_descriptor#launch_stage GoogleMonitoringMetricDescriptor#launch_stage}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorConfig.property.metadata"></a>

```typescript
public readonly metadata: GoogleMonitoringMetricDescriptorMetadata;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadata">GoogleMonitoringMetricDescriptorMetadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_metric_descriptor#metadata GoogleMonitoringMetricDescriptor#metadata}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_metric_descriptor#project GoogleMonitoringMetricDescriptor#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleMonitoringMetricDescriptorTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeouts">GoogleMonitoringMetricDescriptorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_metric_descriptor#timeouts GoogleMonitoringMetricDescriptor#timeouts}

---

##### `unit`<sup>Optional</sup> <a name="unit" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorConfig.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

The units in which the metric value is reported.

It is only applicable if the
valueType is INT64, DOUBLE, or DISTRIBUTION. The unit defines the representation of
the stored metric values.

Different systems may scale the values to be more easily displayed (so a value of
0.02KBy might be displayed as 20By, and a value of 3523KBy might be displayed as
3.5MBy). However, if the unit is KBy, then the value of the metric is always in
thousands of bytes, no matter how it may be displayed.

If you want a custom metric to record the exact number of CPU-seconds used by a job,
you can create an INT64 CUMULATIVE metric whose unit is s{CPU} (or equivalently
1s{CPU} or just s). If the job uses 12,005 CPU-seconds, then the value is written as
12005.

Alternatively, if you want a custom metric to record data in a more granular way, you
can create a DOUBLE CUMULATIVE metric whose unit is ks{CPU}, and then write the value
12.005 (which is 12005/1000), or use Kis{CPU} and write 11.723 (which is 12005/1024).
The supported units are a subset of The Unified Code for Units of Measure standard.
More info can be found in the API documentation
(https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.metricDescriptors).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_metric_descriptor#unit GoogleMonitoringMetricDescriptor#unit}

---

### GoogleMonitoringMetricDescriptorLabels <a name="GoogleMonitoringMetricDescriptorLabels" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabels.Initializer"></a>

```typescript
import { googleMonitoringMetricDescriptor } from '@cdktf/provider-google-beta'

const googleMonitoringMetricDescriptorLabels: googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabels = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabels.property.key">key</a></code> | <code>string</code> | The key for this label. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabels.property.description">description</a></code> | <code>string</code> | A human-readable description for the label. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabels.property.valueType">valueType</a></code> | <code>string</code> | The type of data that can be assigned to the label. Default value: "STRING" Possible values: ["STRING", "BOOL", "INT64"]. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabels.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key for this label.

The key must not exceed 100 characters. The first character of the key must be an upper- or lower-case letter, the remaining characters must be letters, digits or underscores, and the key must match the regular expression [a-zA-Z][a-zA-Z0-9_]*

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_metric_descriptor#key GoogleMonitoringMetricDescriptor#key}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabels.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A human-readable description for the label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_metric_descriptor#description GoogleMonitoringMetricDescriptor#description}

---

##### `valueType`<sup>Optional</sup> <a name="valueType" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabels.property.valueType"></a>

```typescript
public readonly valueType: string;
```

- *Type:* string

The type of data that can be assigned to the label. Default value: "STRING" Possible values: ["STRING", "BOOL", "INT64"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_metric_descriptor#value_type GoogleMonitoringMetricDescriptor#value_type}

---

### GoogleMonitoringMetricDescriptorMetadata <a name="GoogleMonitoringMetricDescriptorMetadata" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadata.Initializer"></a>

```typescript
import { googleMonitoringMetricDescriptor } from '@cdktf/provider-google-beta'

const googleMonitoringMetricDescriptorMetadata: googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadata = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadata.property.ingestDelay">ingestDelay</a></code> | <code>string</code> | The delay of data points caused by ingestion. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadata.property.samplePeriod">samplePeriod</a></code> | <code>string</code> | The sampling period of metric data points. |

---

##### `ingestDelay`<sup>Optional</sup> <a name="ingestDelay" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadata.property.ingestDelay"></a>

```typescript
public readonly ingestDelay: string;
```

- *Type:* string

The delay of data points caused by ingestion.

Data points older than this age are guaranteed to be ingested and available to be read, excluding data loss due to errors. In '[duration format](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf?&_ga=2.264881487.1507873253.1593446723-935052455.1591817775#google.protobuf.Duration)'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_metric_descriptor#ingest_delay GoogleMonitoringMetricDescriptor#ingest_delay}

---

##### `samplePeriod`<sup>Optional</sup> <a name="samplePeriod" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadata.property.samplePeriod"></a>

```typescript
public readonly samplePeriod: string;
```

- *Type:* string

The sampling period of metric data points.

For metrics which are written periodically, consecutive data points are stored at this time interval, excluding data loss due to errors. Metrics with a higher granularity have a smaller sampling period. In '[duration format](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf?&_ga=2.264881487.1507873253.1593446723-935052455.1591817775#google.protobuf.Duration)'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_metric_descriptor#sample_period GoogleMonitoringMetricDescriptor#sample_period}

---

### GoogleMonitoringMetricDescriptorTimeouts <a name="GoogleMonitoringMetricDescriptorTimeouts" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeouts.Initializer"></a>

```typescript
import { googleMonitoringMetricDescriptor } from '@cdktf/provider-google-beta'

const googleMonitoringMetricDescriptorTimeouts: googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_metric_descriptor#create GoogleMonitoringMetricDescriptor#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_metric_descriptor#delete GoogleMonitoringMetricDescriptor#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_metric_descriptor#update GoogleMonitoringMetricDescriptor#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_metric_descriptor#create GoogleMonitoringMetricDescriptor#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_metric_descriptor#delete GoogleMonitoringMetricDescriptor#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_monitoring_metric_descriptor#update GoogleMonitoringMetricDescriptor#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleMonitoringMetricDescriptorLabelsList <a name="GoogleMonitoringMetricDescriptorLabelsList" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsList.Initializer"></a>

```typescript
import { googleMonitoringMetricDescriptor } from '@cdktf/provider-google-beta'

new googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsList.get"></a>

```typescript
public get(index: number): GoogleMonitoringMetricDescriptorLabelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabels">GoogleMonitoringMetricDescriptorLabels</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleMonitoringMetricDescriptorLabels[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabels">GoogleMonitoringMetricDescriptorLabels</a>[]

---


### GoogleMonitoringMetricDescriptorLabelsOutputReference <a name="GoogleMonitoringMetricDescriptorLabelsOutputReference" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.Initializer"></a>

```typescript
import { googleMonitoringMetricDescriptor } from '@cdktf/provider-google-beta'

new googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.resetValueType">resetValueType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetValueType` <a name="resetValueType" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.resetValueType"></a>

```typescript
public resetValueType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.property.valueTypeInput">valueTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.property.valueType">valueType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabels">GoogleMonitoringMetricDescriptorLabels</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueTypeInput`<sup>Optional</sup> <a name="valueTypeInput" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.property.valueTypeInput"></a>

```typescript
public readonly valueTypeInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `valueType`<sup>Required</sup> <a name="valueType" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.property.valueType"></a>

```typescript
public readonly valueType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabelsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleMonitoringMetricDescriptorLabels;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorLabels">GoogleMonitoringMetricDescriptorLabels</a>

---


### GoogleMonitoringMetricDescriptorMetadataOutputReference <a name="GoogleMonitoringMetricDescriptorMetadataOutputReference" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.Initializer"></a>

```typescript
import { googleMonitoringMetricDescriptor } from '@cdktf/provider-google-beta'

new googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.resetIngestDelay">resetIngestDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.resetSamplePeriod">resetSamplePeriod</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIngestDelay` <a name="resetIngestDelay" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.resetIngestDelay"></a>

```typescript
public resetIngestDelay(): void
```

##### `resetSamplePeriod` <a name="resetSamplePeriod" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.resetSamplePeriod"></a>

```typescript
public resetSamplePeriod(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.property.ingestDelayInput">ingestDelayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.property.samplePeriodInput">samplePeriodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.property.ingestDelay">ingestDelay</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.property.samplePeriod">samplePeriod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadata">GoogleMonitoringMetricDescriptorMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ingestDelayInput`<sup>Optional</sup> <a name="ingestDelayInput" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.property.ingestDelayInput"></a>

```typescript
public readonly ingestDelayInput: string;
```

- *Type:* string

---

##### `samplePeriodInput`<sup>Optional</sup> <a name="samplePeriodInput" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.property.samplePeriodInput"></a>

```typescript
public readonly samplePeriodInput: string;
```

- *Type:* string

---

##### `ingestDelay`<sup>Required</sup> <a name="ingestDelay" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.property.ingestDelay"></a>

```typescript
public readonly ingestDelay: string;
```

- *Type:* string

---

##### `samplePeriod`<sup>Required</sup> <a name="samplePeriod" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.property.samplePeriod"></a>

```typescript
public readonly samplePeriod: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleMonitoringMetricDescriptorMetadata;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorMetadata">GoogleMonitoringMetricDescriptorMetadata</a>

---


### GoogleMonitoringMetricDescriptorTimeoutsOutputReference <a name="GoogleMonitoringMetricDescriptorTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleMonitoringMetricDescriptor } from '@cdktf/provider-google-beta'

new googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeouts">GoogleMonitoringMetricDescriptorTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleMonitoringMetricDescriptorTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleMonitoringMetricDescriptor.GoogleMonitoringMetricDescriptorTimeouts">GoogleMonitoringMetricDescriptorTimeouts</a>

---



