# `googleMonitoringNotificationChannel` Submodule <a name="`googleMonitoringNotificationChannel` Submodule" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleMonitoringNotificationChannel <a name="GoogleMonitoringNotificationChannel" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_monitoring_notification_channel google_monitoring_notification_channel}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.Initializer"></a>

```typescript
import { googleMonitoringNotificationChannel } from '@cdktf/provider-google-beta'

new googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel(scope: Construct, id: string, config: GoogleMonitoringNotificationChannelConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelConfig">GoogleMonitoringNotificationChannelConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelConfig">GoogleMonitoringNotificationChannelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.putSensitiveLabels">putSensitiveLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.resetForceDelete">resetForceDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.resetSensitiveLabels">resetSensitiveLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.resetUserLabels">resetUserLabels</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSensitiveLabels` <a name="putSensitiveLabels" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.putSensitiveLabels"></a>

```typescript
public putSensitiveLabels(value: GoogleMonitoringNotificationChannelSensitiveLabels): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.putSensitiveLabels.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabels">GoogleMonitoringNotificationChannelSensitiveLabels</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleMonitoringNotificationChannelTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeouts">GoogleMonitoringNotificationChannelTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetForceDelete` <a name="resetForceDelete" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.resetForceDelete"></a>

```typescript
public resetForceDelete(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetSensitiveLabels` <a name="resetSensitiveLabels" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.resetSensitiveLabels"></a>

```typescript
public resetSensitiveLabels(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetUserLabels` <a name="resetUserLabels" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.resetUserLabels"></a>

```typescript
public resetUserLabels(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleMonitoringNotificationChannel resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.isConstruct"></a>

```typescript
import { googleMonitoringNotificationChannel } from '@cdktf/provider-google-beta'

googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.isTerraformElement"></a>

```typescript
import { googleMonitoringNotificationChannel } from '@cdktf/provider-google-beta'

googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.isTerraformResource"></a>

```typescript
import { googleMonitoringNotificationChannel } from '@cdktf/provider-google-beta'

googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.generateConfigForImport"></a>

```typescript
import { googleMonitoringNotificationChannel } from '@cdktf/provider-google-beta'

googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleMonitoringNotificationChannel resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleMonitoringNotificationChannel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleMonitoringNotificationChannel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_monitoring_notification_channel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleMonitoringNotificationChannel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.sensitiveLabels">sensitiveLabels</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference">GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference">GoogleMonitoringNotificationChannelTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.verificationStatus">verificationStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.forceDeleteInput">forceDeleteInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.sensitiveLabelsInput">sensitiveLabelsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabels">GoogleMonitoringNotificationChannelSensitiveLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeouts">GoogleMonitoringNotificationChannelTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.userLabelsInput">userLabelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.forceDelete">forceDelete</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.userLabels">userLabels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `sensitiveLabels`<sup>Required</sup> <a name="sensitiveLabels" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.sensitiveLabels"></a>

```typescript
public readonly sensitiveLabels: GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference">GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleMonitoringNotificationChannelTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference">GoogleMonitoringNotificationChannelTimeoutsOutputReference</a>

---

##### `verificationStatus`<sup>Required</sup> <a name="verificationStatus" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.verificationStatus"></a>

```typescript
public readonly verificationStatus: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `forceDeleteInput`<sup>Optional</sup> <a name="forceDeleteInput" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.forceDeleteInput"></a>

```typescript
public readonly forceDeleteInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `sensitiveLabelsInput`<sup>Optional</sup> <a name="sensitiveLabelsInput" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.sensitiveLabelsInput"></a>

```typescript
public readonly sensitiveLabelsInput: GoogleMonitoringNotificationChannelSensitiveLabels;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabels">GoogleMonitoringNotificationChannelSensitiveLabels</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleMonitoringNotificationChannelTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeouts">GoogleMonitoringNotificationChannelTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `userLabelsInput`<sup>Optional</sup> <a name="userLabelsInput" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.userLabelsInput"></a>

```typescript
public readonly userLabelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `forceDelete`<sup>Required</sup> <a name="forceDelete" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.forceDelete"></a>

```typescript
public readonly forceDelete: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `userLabels`<sup>Required</sup> <a name="userLabels" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.userLabels"></a>

```typescript
public readonly userLabels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleMonitoringNotificationChannelConfig <a name="GoogleMonitoringNotificationChannelConfig" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelConfig.Initializer"></a>

```typescript
import { googleMonitoringNotificationChannel } from '@cdktf/provider-google-beta'

const googleMonitoringNotificationChannelConfig: googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelConfig.property.type">type</a></code> | <code>string</code> | The type of the notification channel. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelConfig.property.description">description</a></code> | <code>string</code> | An optional human-readable description of this notification channel. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelConfig.property.displayName">displayName</a></code> | <code>string</code> | An optional human-readable name for this notification channel. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether notifications are forwarded to the described channel. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelConfig.property.forceDelete">forceDelete</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, the notification channel will be deleted regardless of its use in alert policies (the policies will be updated to remove the channel). |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_monitoring_notification_channel#id GoogleMonitoringNotificationChannel#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Configuration fields that define the channel and its behavior. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_monitoring_notification_channel#project GoogleMonitoringNotificationChannel#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelConfig.property.sensitiveLabels">sensitiveLabels</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabels">GoogleMonitoringNotificationChannelSensitiveLabels</a></code> | sensitive_labels block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeouts">GoogleMonitoringNotificationChannelTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelConfig.property.userLabels">userLabels</a></code> | <code>{[ key: string ]: string}</code> | User-supplied key/value data that does not need to conform to the corresponding NotificationChannelDescriptor's schema, unlike the labels field. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of the notification channel.

This field matches the value of the NotificationChannelDescriptor.type field. See https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.notificationChannelDescriptors/list to get the list of valid values such as "email", "slack", etc...

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_monitoring_notification_channel#type GoogleMonitoringNotificationChannel#type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional human-readable description of this notification channel.

This description may provide additional details, beyond the display name, for the channel. This may not exceed 1024 Unicode characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_monitoring_notification_channel#description GoogleMonitoringNotificationChannel#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

An optional human-readable name for this notification channel.

It is recommended that you specify a non-empty and unique name in order to make it easier to identify the channels in your project, though this is not enforced. The display name is limited to 512 Unicode characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_monitoring_notification_channel#display_name GoogleMonitoringNotificationChannel#display_name}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether notifications are forwarded to the described channel.

This makes it possible to disable delivery of notifications to a particular channel without removing the channel from all alerting policies that reference the channel. This is a more convenient approach when the change is temporary and you want to receive notifications from the same set of alerting policies on the channel at some point in the future.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_monitoring_notification_channel#enabled GoogleMonitoringNotificationChannel#enabled}

---

##### `forceDelete`<sup>Optional</sup> <a name="forceDelete" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelConfig.property.forceDelete"></a>

```typescript
public readonly forceDelete: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, the notification channel will be deleted regardless of its use in alert policies (the policies will be updated to remove the channel).

If false, channels that are still
referenced by an existing alerting policy will fail to be
deleted in a delete operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_monitoring_notification_channel#force_delete GoogleMonitoringNotificationChannel#force_delete}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_monitoring_notification_channel#id GoogleMonitoringNotificationChannel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Configuration fields that define the channel and its behavior.

The
permissible and required labels are specified in the
NotificationChannelDescriptor corresponding to the type field.

Labels with sensitive data are obfuscated by the API and therefore Terraform cannot
determine if there are upstream changes to these fields. They can also be configured via
the sensitive_labels block, but cannot be configured in both places.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_monitoring_notification_channel#labels GoogleMonitoringNotificationChannel#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_monitoring_notification_channel#project GoogleMonitoringNotificationChannel#project}.

---

##### `sensitiveLabels`<sup>Optional</sup> <a name="sensitiveLabels" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelConfig.property.sensitiveLabels"></a>

```typescript
public readonly sensitiveLabels: GoogleMonitoringNotificationChannelSensitiveLabels;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabels">GoogleMonitoringNotificationChannelSensitiveLabels</a>

sensitive_labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_monitoring_notification_channel#sensitive_labels GoogleMonitoringNotificationChannel#sensitive_labels}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleMonitoringNotificationChannelTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeouts">GoogleMonitoringNotificationChannelTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_monitoring_notification_channel#timeouts GoogleMonitoringNotificationChannel#timeouts}

---

##### `userLabels`<sup>Optional</sup> <a name="userLabels" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelConfig.property.userLabels"></a>

```typescript
public readonly userLabels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

User-supplied key/value data that does not need to conform to the corresponding NotificationChannelDescriptor's schema, unlike the labels field.

This field is intended to be used for organizing and identifying the NotificationChannel objects.The field can contain up to 64 entries. Each key and value is limited to 63 Unicode characters or 128 bytes, whichever is smaller. Labels and values can contain only lowercase letters, numerals, underscores, and dashes. Keys must begin with a letter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_monitoring_notification_channel#user_labels GoogleMonitoringNotificationChannel#user_labels}

---

### GoogleMonitoringNotificationChannelSensitiveLabels <a name="GoogleMonitoringNotificationChannelSensitiveLabels" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabels.Initializer"></a>

```typescript
import { googleMonitoringNotificationChannel } from '@cdktf/provider-google-beta'

const googleMonitoringNotificationChannelSensitiveLabels: googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabels = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabels.property.authToken">authToken</a></code> | <code>string</code> | An authorization token for a notification channel. Channel types that support this field include: slack. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabels.property.password">password</a></code> | <code>string</code> | An password for a notification channel. Channel types that support this field include: webhook_basicauth. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabels.property.serviceKey">serviceKey</a></code> | <code>string</code> | An servicekey token for a notification channel. Channel types that support this field include: pagerduty. |

---

##### `authToken`<sup>Optional</sup> <a name="authToken" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabels.property.authToken"></a>

```typescript
public readonly authToken: string;
```

- *Type:* string

An authorization token for a notification channel. Channel types that support this field include: slack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_monitoring_notification_channel#auth_token GoogleMonitoringNotificationChannel#auth_token}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabels.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

An password for a notification channel. Channel types that support this field include: webhook_basicauth.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_monitoring_notification_channel#password GoogleMonitoringNotificationChannel#password}

---

##### `serviceKey`<sup>Optional</sup> <a name="serviceKey" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabels.property.serviceKey"></a>

```typescript
public readonly serviceKey: string;
```

- *Type:* string

An servicekey token for a notification channel. Channel types that support this field include: pagerduty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_monitoring_notification_channel#service_key GoogleMonitoringNotificationChannel#service_key}

---

### GoogleMonitoringNotificationChannelTimeouts <a name="GoogleMonitoringNotificationChannelTimeouts" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeouts.Initializer"></a>

```typescript
import { googleMonitoringNotificationChannel } from '@cdktf/provider-google-beta'

const googleMonitoringNotificationChannelTimeouts: googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_monitoring_notification_channel#create GoogleMonitoringNotificationChannel#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_monitoring_notification_channel#delete GoogleMonitoringNotificationChannel#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_monitoring_notification_channel#update GoogleMonitoringNotificationChannel#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_monitoring_notification_channel#create GoogleMonitoringNotificationChannel#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_monitoring_notification_channel#delete GoogleMonitoringNotificationChannel#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_monitoring_notification_channel#update GoogleMonitoringNotificationChannel#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference <a name="GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.Initializer"></a>

```typescript
import { googleMonitoringNotificationChannel } from '@cdktf/provider-google-beta'

new googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.resetAuthToken">resetAuthToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.resetServiceKey">resetServiceKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthToken` <a name="resetAuthToken" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.resetAuthToken"></a>

```typescript
public resetAuthToken(): void
```

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetServiceKey` <a name="resetServiceKey" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.resetServiceKey"></a>

```typescript
public resetServiceKey(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.authTokenInput">authTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.serviceKeyInput">serviceKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.authToken">authToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.serviceKey">serviceKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabels">GoogleMonitoringNotificationChannelSensitiveLabels</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authTokenInput`<sup>Optional</sup> <a name="authTokenInput" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.authTokenInput"></a>

```typescript
public readonly authTokenInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `serviceKeyInput`<sup>Optional</sup> <a name="serviceKeyInput" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.serviceKeyInput"></a>

```typescript
public readonly serviceKeyInput: string;
```

- *Type:* string

---

##### `authToken`<sup>Required</sup> <a name="authToken" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.authToken"></a>

```typescript
public readonly authToken: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `serviceKey`<sup>Required</sup> <a name="serviceKey" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.serviceKey"></a>

```typescript
public readonly serviceKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleMonitoringNotificationChannelSensitiveLabels;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabels">GoogleMonitoringNotificationChannelSensitiveLabels</a>

---


### GoogleMonitoringNotificationChannelTimeoutsOutputReference <a name="GoogleMonitoringNotificationChannelTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleMonitoringNotificationChannel } from '@cdktf/provider-google-beta'

new googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeouts">GoogleMonitoringNotificationChannelTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleMonitoringNotificationChannelTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeouts">GoogleMonitoringNotificationChannelTimeouts</a>

---



